import React from 'react';
import TileContainer from './TileContainer';
import { BoardContainer } from './ms-styled';

const GameBoard = props => {

  const boardMap = props.shuffle(props.board);
  const updateStatus = props.statusHandler;

  return(
    <BoardContainer>
      {boardMap.map((tile, index) => <TileContainer key={`tile-${index}`}
                                                    tile={tile}
                                                    map={boardMap}
                                                    stats={props.stats}
                                                    statsHandler={props.statsHandler}
                                                    statusHandler={updateStatus}
                                                    id={index} />)}
    </BoardContainer>
  );
}

export default GameBoard;
