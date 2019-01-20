import React from 'react';
import { Start } from './tb-styled';
import icon from '../../images/start-icon.png';

const StartBtn = props => {
  return(
    <Start onClick={props.toggle}>
      <img src={icon} alt='microsoft logo' />
      <p>Start</p>
    </Start>
  );
}

export default StartBtn;
