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
      boardArr: [],
      status: true,
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

  updateStatus = () => {
    this.setState(prevState => {
        return {status: !prevState.status};
      });
    }

  updateFlags = (flags) => {
    if(!flags) {

      if(this.state.flags >= 10) {
        return;
      }

      this.setState(prevState => {
        return { flags: prevState.flags += 1};
      })
    } else {
      this.setState(prevState => {
        return { flags: prevState.flags -= 1};
      })
    }
  }

  updateMines = (tileType, isFlagged) => {
    if(tileType === 1 && isFlagged) {
      this.setState(prevState => {
        return {
          mines: prevState.mines -= 1,
          score: prevState.score += 1
        }
      })
    } else if(tileType === 1 && !isFlagged) {
      this.setState(prevState => {
        return {
          mines: prevState.mines += 1,
          score: prevState.score -= 1
        }
      })
    }
  }

  render() {

    const updateStats = {
      flags: this.updateFlags,
      mines: this.updateMines
    }

    if(this.state.mines === 0) {
      console.log('win')
    }

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
        <GameBoard board={this.state.boardArr} statusHandler={this.updateStatus} stats={this.state} statsHandler={updateStats} />
      </div>
    );
  }
}

export default Minesweeper;
