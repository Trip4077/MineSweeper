import React from 'react';
import styled from 'styled-components';

import aol from '../../images/AOL.png';
import mail from '../../images/mail.png';

const TimeBox = styled.div`
  border: 2px inset #8b8b8b;
  background-color: #b5abab;
  height: 80%;
  width: 8.5%;
  padding: 0 4px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 2rem;

  div {
    display: flex;
    align-items: center;
  }

  img {
    cursor: pointer;
    margin: 0 2px;
  }
`;

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
