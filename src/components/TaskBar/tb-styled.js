import styled from 'styled-components';

const Menu = styled.div`
  position: absolute;
  top: -355px;
  left: 7px;
  cursor: pointer;

  border: 3px outset #808080;
`;

const MenuItem = styled.div`
  font-size: 2rem;

  padding: 10px 20px;
  background-color: #c0c0c0;

  display: flex;
  align-items: center;

  position: relative;

  p {
    margin-left: 15px;
  }

  &:hover {
    background-color: #000080;
    color: white;
  }

  &:last-child {
    border-top: 1px inset #808080;
  }

  &:first-child:after {
    content: '\\25B6';
    font-size: 1.2rem;
    font-weight: bold;

    position: absolute;
    right: 25px;
    bottom: 14.75px;
  }
`;

const Start = styled.button`
  height: 80%;
  width: 5.5%;
  border: 2.5px outset;
  border-color: white rgba(0, 0, 0, 0.6) rgba(0, 0, 0, 0.7) white;
  background-color: #c0c0c0;
  position: relative;

  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 1.5px;

  cursor: pointer;

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
    height: 25px;
    width: 25px;
  }
`;


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

export {
  Menu,
  MenuItem,
  Start,
  TimeBox };
