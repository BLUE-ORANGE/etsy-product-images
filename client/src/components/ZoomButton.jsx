import React from 'react';
import ZoomedPhoto from './ZoomedPhoto';

class ZoomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayZoom: false,
      imageUrl: 'https://i.imgur.com/ZgZ8YKN.jpg',
    };
  }

  handleClick(e) {
    console.log(e.target);
    this.setState({
      displayZoom: true,
    });

  }

  render() {
    return (
      <div>
        <div onClick={ (e) => this.handleClick(e) }>
          <span className="ss-icon">🔎</span>zoom
        </div>
        <div>
          {
          this.state.displayZoom ? <ZoomedPhoto imageUrl={this.state.imageUrl} /> : ''
        }
        </div>
      </div>
    );
  }
}


export default ZoomButton;
