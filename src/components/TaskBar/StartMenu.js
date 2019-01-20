import React from 'react';
import { Menu, MenuItem } from './tb-styled';

import minesweeper from '../../images/minesweeper.png';

const StartMenu = props => {

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
