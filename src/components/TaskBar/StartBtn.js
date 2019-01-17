import React from 'react';
import styled from 'styled-components';
import icon from '../../images/start-icon.png';

const StartBtn = props => {
  const Start = styled.button`
    height: 80%;
    width: 4.5%;
    border: 1px outset;
    border-color: white rgba(0, 0, 0, 0.6) rgba(0, 0, 0, 0.7) white;
    background-color: #c0c0c0;
    position: relative;

    display: flex;
    justify-content: space-around;
    align-items: center;

    &:before {
      content: " ";
      position: absolute;

      top: 1px;
      left: 1px;
      right: 1px;
      bottom: 1px;
      border: 1px outset #dfdfdf;
    }

    &:active {
      background-color: #b0aaaa;
    }

    &:focus {
      outline: none;
    }

    img {
      height: 20px;
      width: 20px;
    }
  `;

  return(
    <Start>
      <img src={icon} alt='microsoft logo' />
      <p>Start</p>
    </Start>
  );
}

export default StartBtn;
