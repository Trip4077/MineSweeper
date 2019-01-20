import React from 'react';
import { DesktopContainer, DeskIcon } from './dt-styled';
import { Link } from 'react-router-dom';

import iconData from './dt-data';

const Desktop = props => {
  return(
    <DesktopContainer>
      {iconData.map(item => {

        if(item.name === 'Winmine') {
          return(
            <Link to='/minesweeper' key={item.name}>
              <DeskIcon>
                <img src={item.image} alt={`${item.name} icon`} />
                <p>{item.name}</p>
              </DeskIcon>
            </Link>
          );
        }


        return(
          <DeskIcon key={item.name}>
            <img src={item.image} alt={`${item.name} icon`} />
            <p>{item.name}</p>
          </DeskIcon>
        );
      })}
    </DesktopContainer>
  );
}

export default Desktop;
