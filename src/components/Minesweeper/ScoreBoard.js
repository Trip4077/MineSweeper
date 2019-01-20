import React from 'react';
import play from '../../images/scoreboard/default-bg.png';
import lost from '../../images/scoreboard/lost-bg.png';
import styled from 'styled-components';

const Score = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  border: 2px inset #fdfbff;
  background-color: #bebebe;
  padding: 3px 0;
  margin: 7px 0;
`;

const ScoreText = styled.div`
  font-size: 2rem;
  letter-spacing: 1px;
`;

const Smiles = styled.button`
  height: 30px;
  width: 30px;
  background-color: #e2e2e0;

  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }

  img {
    height: 20px;
    width: 20px;
    margin-right: 1.5px;
  }
`;

const ScoreBoard = props => {
  let btnDisplay = play;

  if(props.play) {
    btnDisplay = lost;
  }

  return(
    <Score>
      <ScoreText>{props.stats.score}</ScoreText>
      <Smiles><img src={btnDisplay} alt="smile" /></Smiles>
      <ScoreText>{props.stats.mines}</ScoreText>
    </Score>
  );
}

export default ScoreBoard;
