import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
    this.getImages();
  }

  getImages() {
    console.log('in method');
    $.ajax({
      method: 'GET',
      url: '/image',
      contentType: 'application/json',
      success: (data) => {
        if (data) {
          this.setState({
            images: data
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

          this.state.images.map((image) => {
            return (
              <div>
              <img src={image.imageUrl}></img>
              <footer>{image.imageTitle}</footer>
              </div>
            );
          })
        }
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));