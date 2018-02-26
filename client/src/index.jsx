import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slick';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
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
        this.setState({images: data.results});
      }
    }
  })


}

  render(props) {
    var settings = {
      dots: true,
      arrows:true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

      centerMode: true,
      centerPadding: '100px',
      customPaging: function(i) {
        console.log(i);
        return <a style={{'display':'inline-block'}}><img src={this.children[i].ref} style={{'width':'150px',' height':'50px'}}></img></a>
      }
    }

    return (
      <div>
        <h1>Hello</h1>
        <Slider {...settings}>
        {

          this.state.images.map((image, ind) => {
            return (
              <div  key={image.id} ref={image.imageUrl}>
              <img  src={image.imageUrl} style={{'width':'600px',' height':'200px'}}></img>

              </div>
            );
          })
        }
        </Slider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));