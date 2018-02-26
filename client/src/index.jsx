import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import $ from 'jquery';
import ForwardButton from './components/ForwardButton';
import BackButton from './components/BackButton';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
    this.getImages(this.getRandomInt(200));
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  getImages(id) {
    $.ajax({
      method: 'GET',
      url: `/v1/product/${id}/images`,
      contentType: 'application/json',
      success: (data) => {
        if (data) {
          this.setState({ images: data.results });
        }
      },
    });
  }

  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: false,
      speed: 500,
      nextArrow: <ForwardButton />,
      prevArrow: <BackButton />,

      dotsClass: 'slick-thumb slick-dots',

      centerMode: true,
      centerPadding: '200px',
      customPaging(i) {
        return <img src={this.children[i].ref} alt="random cat" style={{ width: '75px', ' height': '50px' }} />;
      },
    };

    return (
      <div>
        <Slider {...settings}>
          <BackButton />
          {
          this.state.images.map(image => (
            <div key={image.id} ref={image.imageUrl}>
              <img alt="random cat" src={image.imageUrl} style={{ maxWidth: '75%', maxHeight: '75%' }} />
            </div>
            ))
        }
          <ForwardButton />
        </Slider>
      </div>
    );
  }
}

export default ReactDOM.render(<App />, document.getElementById('app') || document.createElement('div'));

