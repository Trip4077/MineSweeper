import React from 'react';
import TileContainer from './TileContainer';
import { BoardContainer } from './ms-styled';

const GameBoard = props => {
  return(
    <BoardContainer>
      {props.board.map((tile, index) => <TileContainer key={`tile-${index}`}
                                                       tile={tile}
                                                       map={props.board}
                                                       id={index} />)}
    </BoardContainer>
  );
}

export default GameBoard;
