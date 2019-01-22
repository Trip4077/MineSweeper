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
  font-size: 3em;
  color: #ff0000;
  letter-spacing: 1px;
  font-family: 'ZCOOL QingKe HuangYou';
`;

const ScoreTextContainer = styled.div`
  background-color: #000;
  border: 2px inset #fdfbff;
  width: 25%;

  text-align: center;
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

  if(!props.stats.status) {
    btnDisplay = lost;
  }

  return(
    <Score>
      <ScoreTextContainer>
        <ScoreText>{props.stats.score}</ScoreText>
      </ScoreTextContainer>

      <Smiles><img src={btnDisplay} alt="smile" /></Smiles>

      <ScoreTextContainer>
        <ScoreText>{props.stats.mines}</ScoreText>
      </ScoreTextContainer>
    </Score>
  );
}

export default ScoreBoard;
