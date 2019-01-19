import React from 'react';
import styled from 'styled-components';

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
      {props.menuItems.map(item => {
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
