import React from 'react';
import styled from 'styled-components';

import minesweeper from '../../images/minesweeper.png';

const StartMenu = props => {

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

  let displayStatus;

  if(!props.menuStatus) {
    displayStatus = 'hidden';
  }

  const miniMenu = [
    {text: 'Minesweeper', image: minesweeper, id: 10},
  ]

  const mouseOn = (e) => {
    e.currentTarget.childNodes[0].classList.add('show');
  }

  const mouseGone = (e) => {
    e.currentTarget.childNodes[0].classList.remove('show');
  }

  return(

    <Menu className={`${displayStatus} ${props.className}`}>
      {props.menuItems.map(item => {

        if(item.id === 0) {
          return (
            <MenuItem key={item.id} onMouseOut={mouseGone} onMouseOver={mouseOn}>
              <StartMenu className='mini' menuStatus={props.menuStatus} menuItems={miniMenu}/>
              <img src={item.image} alt='menu icon' />
              <p>{item.text}</p>
            </MenuItem>
          );
        }

        return (
          <MenuItem key={item.id}>
            <img src={item.image} alt='menu icon' />
            <p>{item.text}</p>
          </MenuItem>
        );

      })}
    </Menu>
  );
}

export default StartMenu;
