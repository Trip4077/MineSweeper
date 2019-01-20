import React from 'react';

import { TopBar, TopBarLogo, TopBarTools, Control } from './ms-styled';
import { Link } from 'react-router-dom';

import GameBoard from './GameBoard';
import ScoreBoard from './ScoreBoard';

import minesweeper from '../../images/desktop/winmine.png';

import './Minesweeper.css';

class Minesweeper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      mines: 10,
      flags: 0,
      boardArr: []
    }
  }

  componentDidMount() {
   const boardTemplate = [
     0,0,0,0,0,0,0,0,
     0,0,0,0,0,0,0,1,
     0,1,0,1,0,1,0,0,
     0,0,0,0,0,1,0,0,
     0,0,0,0,0,0,1,0,
     0,0,1,0,0,0,0,0,
     0,0,0,0,0,1,0,0,
     0,0,1,0,0,0,0,1
   ];

   this.setState({
     boardArr: boardTemplate
   })
  }

  render() {
    return(
      <div className='minesweeper'>
        <TopBar>
          <TopBarLogo>
            <img src={minesweeper} alt="Minesweeper logo" />
            <h2>Minesweeper</h2>
          </TopBarLogo>
          <TopBarTools>
            <Link to='/minesweeper/min'><button>_</button></Link>
            <button>&#9633;</button>
            <Link to='/'><button>&times;</button></Link>
          </TopBarTools>
        </TopBar>


        <Control>
          <p><span>G</span>ame</p>
          <p><span>H</span>elp</p>
        </Control>

        <ScoreBoard stats={this.state}/>
        <GameBoard board={this.state.boardArr} />
      </div>
    );
  }
}

export default Minesweeper;
