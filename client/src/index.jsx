import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import $ from 'jquery';

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
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      dotsClass: 'slick-thumb slick-dots',

      centerMode: true,
      // centerPadding: '100px',
      customPaging(i) {
        return <img src={this.children[i].ref} alt="missing" style={{ width: '75px', ' height': '50px' }} />;
      },
    };

    return (
      <div>
        <Slider {...settings}>
          {
          this.state.images.map((image, ind) => (
            <div key={image.id} ref={image.imageUrl}>
              <img alt="missing" src={image.imageUrl} style={{ width: '600px', ' height': '200px' }} />
            </div>
            ))
        }
        </Slider>
      </div>
    );
  }
}

export default ReactDOM.render(<App />, document.getElementById('app') || document.createElement('div'));

