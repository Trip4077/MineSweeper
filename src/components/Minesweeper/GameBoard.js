import React from 'react';
import TileContainer from './TileContainer';
import { BoardContainer } from './ms-styled';

const GameBoard = props => {
  const shuffle = (arr) => {
    const a = arr;
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  const boardMap = shuffle(props.board);
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
