import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import $ from 'jquery';
import ForwardButton from './components/ForwardButton';
import BackButton from './components/BackButton';
import ImageCarousel from './components/ImageCarousel';
import CarouselNavigation from './components/CarouselNavigation';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
    this.max = 200;
    this.getImages(this.getRandomInt());
  }

  getRandomInt() {
    return Math.floor(Math.random() * Math.floor(this.max));
  }

  getImages(id) {
    $.ajax({
      method: 'GET',
      url: `/v1/product/${id}/images`,
      contentType: 'application/json',
      success: (data) => {
        if (data) {
          const images = data.results.map((image, i) => {
            if (i === 0) {
              image.focused = true;
            } else {
              image.focused = false;
            }
            return image;
          });
          this.setState({ images });
        }
      },
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

  render() {
    return (
      <div style={{
         marginLeft: 'auto',
         marginRight: 'auto',
         width: '560px',
         height: '610px',
         }}
      >
        <div>
          <BackButton className="slick-prev" />
          {
          this.state.images.length > 0 ?
            <ImageCarousel images={this.state.images} /> : ''
          }
          <ForwardButton className="slick-next" onClick={() => this.handleClickNext()} />
        </div>
        <div>
          {
            <CarouselNavigation images={this.state.images} />
          }
        </div>
      </div>
    );
  }
}

export default ReactDOM.render(<App />, document.getElementById('app') || document.createElement('div'));

