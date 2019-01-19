import React from 'react';
import styled from 'styled-components';

import shutdown from '../../images/shutdown.png';
import run from '../../images/run.png';
import help from '../../images/help.png';
import find from '../../images/find.png';
import settings from '../../images/settings.png';
import documents from '../../images/documents.png';
import favorites from '../../images/favorites.png';
import programs from '../../images/programs.png';

const StartMenu = props => {
  const menuItems = [
    {
      text: 'Programs',
      image: programs,
      id: 0
    },
    {
      text: 'Favorites',
      image: favorites,
      id: 1
    },
    {
      text: 'Documents',
      image: documents,
      id: 2
    },
    {
      text: 'Settings',
      image: settings,
      id: 3
    },
    {
      text: 'Find',
      image: find,
      id: 4
    },
    {
      text: 'Help',
      image: help,
      id: 5
    },
    {
      text: 'Run...',
      image: run,
      id: 6
    },
    {
      text: 'Shut Down...',
      image: shutdown,
      id: 7
    }];

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
  `;

  let displayStatus;

  if(!props.menuStatus) {
    displayStatus = 'hidden';
  }

  return(

    <Menu className={displayStatus}>
      {menuItems.map(item => {
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
