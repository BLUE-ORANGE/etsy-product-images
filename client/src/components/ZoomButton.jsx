import React from 'react';
import { Lightbox } from 'react-modal-image';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'grey',
  },
};
class ZoomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayZoom: false,
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
      <a className="zoom" id="zoom" style={{ float: 'right' }} aria-role="image-expand" onClick={e => this.handleClick(e)}>
        <span className="ss-icon">🔎</span>zoom
        {

          this.state.displayZoom && (
            <Lightbox

              medium={this.props.image.imageUrl}
              large={this.props.image.imageUrl}
              onClose={() => this.setState({
              displayZoom: false,
            })}
            />

          )
        }
      </a>

    );
  }
}


export default ZoomButton;
