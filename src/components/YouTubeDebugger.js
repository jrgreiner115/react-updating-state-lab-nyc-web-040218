// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

class YouTubeDebugger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
          }
        }
    }
  }
  handleBitrate = (event) => {
    this.setState( (prevState) => {
      return ({ settings: {
        bitrate: 12,
        video: {
          resolution: prevState.settings.video.resolution
        }
      }})
    })
  }

  handleResolution = (event) => {
    this.setState( (prevState) => {
      return ( {settings: {
        bitrate: prevState.settings.bitrate,
        video: {
          resolution: '720p'
        }
      }
    })})
  }

  render = () => {
    return (
      <div>
      <button
        onClick={this.handleBitrate}  className='bitrate'>Bitrate: {this.state.settings.bitrate}</button>
        <button
          onClick= {this.handleResolution}
          className='resolution'>Resolution: {this.state.settings.video.resolution}</button>
      </div>
    );
  }
}
export default YouTubeDebugger;
