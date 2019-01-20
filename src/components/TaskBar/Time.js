import React from 'react';
import { TimeBox } from './tb-styled';

import aol from '../../images/taskbar/AOL.png';
import mail from '../../images/taskbar/mail.png';

class Time extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: ''
    }
  }

  getTime = () => {
    const today = new Date();
    const hours = today.getHours()
    let minutes = today.getMinutes();
    let dayPart = 'AM';

    if (minutes.toString().length === 1) {
      minutes = "0" + minutes;
    }

    if (hours > 11) {
      dayPart = 'PM';
    }

    const current =   `${hours}:${minutes} ${dayPart}`;

    this.setState({
      time: current
    })
  }

  componentDidMount() {
    if(this.state.time === '') {
      this.getTime();
    }

    this.interval = setInterval(this.getTime, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return(
      <TimeBox>
        <div>
          <img src={mail} alt="Email icon - 95" />
          <img src={aol} alt="AOL icon - 95" />
        </div>
        {this.state.time}
      </TimeBox>
    );
  }
}

export default Time;
