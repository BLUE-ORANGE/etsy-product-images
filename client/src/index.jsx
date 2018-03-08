import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ForwardButton from './components/ForwardButton';
import BackButton from './components/BackButton';
import ImageCarousel from './components/ImageCarousel';
import CarouselNavigation from './components/CarouselNavigation';
import ZoomButton from './components/ZoomButton';
import styles from '../../public/app.css';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
    this.max = 200;
    this.fetch(this.getRandomInt());
    this.handleClickThumbnail = this.handleClickThumbnail.bind(this);
  }
  componentWillMount() {
    // this.random();
    const idPathname = window.location.pathname.split('/')[3];
    if (idPathname) {
      // this.fetch(Number(idPathname));
    }
  }

  getRandomInt() {
    return Math.floor(Math.random() * Math.floor(this.max));
  }
  fetch(id) {
    axios.get(`/v1/product/${id}/images`, {
      headers: {
        contentType: 'application/json',
      },
    })
      .then((data) => {
        if (data) {
          const images = data.data.results.map((image, i) => {
            if (i === 0) {
              image.focused = true;
            } else {
              image.focused = false;
            }
            return image;
          });
          this.setState({ images });
        }
      }).catch(err => console.log(err));
  }


  handleClickThumbnail(image) {
    const images = this.state.images.slice();
    images.map((img, i) => {
      image === i ? img.focused = true : img.focused = false;
      return img;
    });
    this.setState({
      images,
    });
  }

  handleClickNext() {
    const imageState = this.state.images.slice();
    const oldFocused = imageState.find(img => img.focused);
    const focusedIndex = imageState.indexOf(oldFocused);
    imageState[focusedIndex].focused = false;
    imageState[focusedIndex + 1 > imageState.length - 1 ? 0 : focusedIndex + 1].focused = true;
    this.setState({
      images: imageState,
    });
  }


  handleClickPrev() {
    const imageState = this.state.images.slice();
    const oldFocused = imageState.find(img => img.focused);
    const focusedIndex = imageState.indexOf(oldFocused);
    imageState[focusedIndex].focused = false;
    imageState[focusedIndex - 1 < 0 ? imageState.length - 1 : focusedIndex - 1].focused = true;
    this.setState({
      images: imageState,
    });
  }

  render() {
    return (
      <div className="image-container">
        <div>
          {
          this.state.images.length > 0 ?
            <ImageCarousel images={this.state.images} /> : ''
          }
          <div>
            <BackButton className="slick-prev" onClick={() => this.handleClickPrev()} />
            <ForwardButton onClick={() => this.handleClickNext()} />
          </div>
        </div>
        <div className="image-footer">

          <CarouselNavigation
            images={this.state.images}
            clickHandler={this.handleClickThumbnail}
          />
          <ZoomButton image={this.state.images.slice().filter(x => x.focused)[0]} />


        </div>

      </div>
    );
  }
}

export default ReactDOM.render(<Carousel />, document.getElementById('carousel') || document.createElement('div'));

