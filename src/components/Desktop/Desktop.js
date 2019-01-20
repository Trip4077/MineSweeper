import React from 'react';
import styled from 'styled-components';

import iconData from './dt-data';

const DesktopContainer = styled.div`
  height: 100%;
  width: 25%;

  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const DeskIcon = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  img {
    height: 40px;
    width: 40px;

    margin: 10px 0;
  }

  p {
    margin-bottom: 10px;
    text-align: center;

    font-size: 1.4rem;
    color: white;
  }

  &:active {
    background-color: #000080;
  }
`;

const Desktop = props => {
  return(
    <DesktopContainer>
      {iconData.map(item => {
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
