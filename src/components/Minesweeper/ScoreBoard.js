import React from 'react';

import play from '../../images/scoreboard/default-bg.png';
import lost from '../../images/scoreboard/lost-bg.png';

import { Score,
         ScoreText,
         ScoreTextContainer,
         Smiles } from './ms-styled';
         

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

      <Smiles onClick={props.reset}><img src={btnDisplay} alt="smile" /></Smiles>

      <ScoreTextContainer>
        <ScoreText>{props.stats.mines}</ScoreText>
      </ScoreTextContainer>
    </Score>
  );
}

export default ScoreBoard;
