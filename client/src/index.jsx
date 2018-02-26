import React from 'react';
import ReactDOM from 'react-dom';
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
          this.setState({
            images: data.results
          });
        }
      },
     
      
    })
    
  }

  render(props) {

    return (
      <div>
        <h1>Hello</h1>
        {

          this.state.images.map((image, ind) => {
            return (
              <div  key={ind} >
              <img src={image.imageUrl} style={{'width':'600px',' height':'200px'}}></img>

              </div>
            );
          })
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));