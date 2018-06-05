// Code DigitalClicker Component Here
import React, {Component} from 'react';

class DigitalClicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timesClicked: 0
    }
  }
  incrementClicker = (event) => {

    this.setState((prevState) => {
      return {timesClicked: prevState.timesClicked + 1}
    })
  }

  render = () => {
    return (
      <button onClick={this.incrementClicker}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker;
