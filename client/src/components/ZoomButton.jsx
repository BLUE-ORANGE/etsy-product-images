import React from 'react';
import { ModalImage, Lightbox } from 'react-modal-image';
import ZoomedPhoto from './ZoomedPhoto';

const closeLightBox = () => {
  this.state.open = true;
};
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
        <div className="zoom" style={{ float: 'right' }} onClick={e => this.handleClick(e)}>
          <span className="ss-icon">🔎</span>zoom
        </div>
        <div>
          {

          this.state.displayZoom && (
            <Lightbox
              medium={this.state.imageUrl}
              large={this.state.imageUrl}
              onClose={() => this.setState({
              displayZoom: false,
            })}
            />

          )
        }
        </div>
      </div>
    );
  }
}


export default ZoomButton;
