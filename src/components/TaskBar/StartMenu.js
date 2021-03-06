import React from 'react';
import { Menu, MenuItem } from './tb-styled';
import { Link } from 'react-router-dom';

import minesweeper from '../../images/taskbar/minesweeper.png';

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
            <MenuItem className='menu-item' key={item.id} onMouseOut={mouseGone} onMouseOver={mouseOn}>
              <StartMenu className='mini' menuStatus={props.menuStatus} menuItems={miniMenu}/>
              <img src={item.image} alt='menu icon' />
              <p>{item.text}</p>
            </MenuItem>
          );
        } else if(item.text === 'Minesweeper') {
          return (
            <Link to='/minesweeper' key={item.id}>
              <MenuItem>
                <img src={item.image} alt='menu icon' />
                <p>{item.text}</p>
              </MenuItem>
            </Link>
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
