import React from 'react';
import { Tile } from './ms-styled';
import mine from '../../images/taskbar/minesweeper.png';

class TileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tileType: this.props.tile,
      clicked: false,
      flagged: false,
      mineContact: 0,
    }
  }

  mineCheck = () => {
    const shuffle = this.shuffle;
    const origin = this.props.id;
    const board = this.props.map;
    const neighbors = [];

    neighbors.push(board[origin + 8]);
    neighbors.push(board[origin - 8]);

    if(!origin === 0 || !(origin % 8 === 0)) {
      neighbors.push(board[origin - 9]);
      neighbors.push(board[origin - 1]);
      neighbors.push(board[origin + 7]);
    }

    if(!origin === 7 || !(origin % 8 === 7)) {
      neighbors.push(board[origin + 9]);
      neighbors.push(board[origin - 7]);
      neighbors.push(board[origin + 1]);

    } else if(origin !== 63) {
      neighbors.push(board[origin - 7]);
    }

    const mineCount = neighbors.filter(val => val === 1);

    this.setState({
      mineContact: mineCount.length
    })
  }

  componentDidMount() {
    this.mineCheck();
  }

  render() {
    const styleType = this.state.mineContact;

    let display;

    switch(styleType) {
      case 1:
        display = <span>1</span>;
        break;

      case 2:
        display = <span>2</span>;
        break;

      case 3:
        display = <span>3</span>;
        break;

      case 4:
        display = <span>4</span>;
        break;

      case 5:
        display = <span>5</span>;
        break;

      case 6:
        display = <span>6</span>;
        break;

      case 7:
        display = <span>7</span>;
        break;

      case 8:
        display = <span>8</span>;
        break;

      default:
        break;
    }

    if(this.state.tileType === 1) {
      display = <img src={mine} alt='mine icon' />
    }

    return <Tile>{display}</Tile>
  }
}

export default TileContainer;
