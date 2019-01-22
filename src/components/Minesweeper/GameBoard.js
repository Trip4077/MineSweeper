import React from 'react';
import TileContainer from './TileContainer';
import { BoardContainer, GameEnd, GameWin } from './ms-styled';
import styled from 'styled-components';

const GameBoard = props => {

  const boardMap = props.shuffle(props.board);
  const updateStatus = props.statusHandler;

  return(
    <BoardContainer>
      {props.stats.status ? '' : <GameEnd>Game Over</GameEnd>}
      {props.stats.mines === 0 ? <GameWin>You Win!</GameWin> : ''}

      {boardMap.map((tile, index) => <TileContainer key={`tile-${index}`}
                                                    tile={tile}
                                                    map={boardMap}
                                                    stats={props.stats}
                                                    statsHandler={props.statsHandler}
                                                    statusHandler={updateStatus}
                                                    id={index} />) }
    </BoardContainer>
  );
}

export default GameBoard;
