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
      image: programs
    },
    {
      text: 'Favorites',
      image: favorites
    },
    {
      text: 'Documents',
      image: documents
    },
    {
      text: 'Settings',
      image: settings
    },
    {
      text: 'Find',
      image: find
    },
    {
      text: 'Help',
      image: help
    },
    {
      text: 'Run...',
      image: run
    },
    {
      text: 'Shut Down...',
      image: shutdown
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

  return(
    <Menu>
      {menuItems.map(item => {
        return (
          <MenuItem>
            <img src={item.image} alt='menu icon' />
            <p>{item.text}</p>
          </MenuItem>
        );
      })}
    </Menu>
  );
}

export default StartMenu;
