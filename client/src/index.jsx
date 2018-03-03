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
          this.setState({ images: data.results });
        }
      },
    });
  }

  render() {
    const nextBtn = <ForwardButton />;
    const prevBtn = <BackButton />;
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      fade: true,
      dotsClass: 'slick-thumb slick-dots dot-style',
      focusOnSelect: true,

      // className: 'image-container',
      useCSS: true,
      customPaging(i) {
        return <img src={this.children[i].ref} alt="random cat" className="thumb-default" style={{ width: '30px', height: '30px' }} />;
      },
    };

    return (
      <div
        style={{
         marginLeft: 'auto',
         marginRight: 'auto',
         width: '560px',
         height: '509px',
         }}
      >


        <Slider {...settings} prevArrow={prevBtn} nextArrow={nextBtn}>
          {
          this.state.images.map(image => (
            <div key={image.id} ref={image.imageUrl} className="image-container" style={{ 'object-fit': 'cover' }} >
              <img
                alt="random cat"
                src={image.imageUrl}
                style={{
                  objectFit: 'cover',
                  width: '570px',
                  height: '505px',
                }}
              />
            </div>
            ))
        }
        </Slider>
      </div>
    );
  }
}

export default ReactDOM.render(<App />, document.getElementById('app') || document.createElement('div'));

