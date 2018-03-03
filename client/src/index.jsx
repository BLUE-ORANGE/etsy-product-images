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
      useCSS: false,
      customPaging(i) {
        return <img src={this.children[i].ref} alt="random cat" className="thumb-default" style={{ width: '30px', height: '30px' }} />;
      },
    };

    return (
      <div style={{
         marginLeft: 'auto',
         marginRight: 'auto',
         width: '560px',
         height: '610px',
         }}
      >


        <Slider {...settings} prevArrow={prevBtn} nextArrow={nextBtn}>
          {
          this.state.images.map(image => (
            <div key={image.id} ref={image.imageUrl}>
              <img
                alt="random cat"
                src={image.imageUrl}
                style={{
                'object-fit': 'scale-down', height: '610px', width: '560px', marginLeft: 'auto', marginRight: 'auto', 'background-color': '#F2F1F1',
                }}
              />
            </div>
            ))
        }
        </Slider>
        <div>
          {
          this.state.images.length > 0 ? <ImageCarousel activeImage={this.state.images[0].imageUrl} /> : ''
          }
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

