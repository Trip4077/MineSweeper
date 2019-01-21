import React from 'react';
import { Tile } from './ms-styled';
import mine from '../../images/taskbar/minesweeper.png';
import flag from '../../images/gameboard/flag.png';

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

  flagTile = (e) => {
    e.preventDefault();
    this.props.statsHandler.flags(this.state.flagged);

    if(this.props.stats.flags >= 10 && !this.state.flagged) {
      return;
    }

    this.setState(prevState => {
      return { flagged: !prevState.flagged }
    })
  }

  mineCheck = () => {
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

    } else if (origin !== 63) {
      neighbors.push(board[origin - 7]);
    }

    const mineCount = neighbors.filter(val => val === 1);

    this.setState({
      mineContact: mineCount.length
    })
  }

  tileAction = (e) => {
    const tile = e.currentTarget;

    if(tile.childNodes.length === 0) {
      tile.classList.add('neutral');
      return;
    } else if(!tile.childNodes[0].innerText) {

      const tiles = tile.parentNode.childNodes;

      tiles.forEach(tile => {
        if(tile.childNodes[0]) {
          tile.childNodes[0].style.display = 'block';
          this.updateTileStyle(tile.childNodes[0])
          this.props.statusHandler();
        }
      });

      return;
    } else {
      this.updateTileStyle(tile.childNodes[0]);
    }
  }

  updateTileStyle = (tile) => {

    switch(tile.innerText) {
      case '1':
        tile.style.color = '#0800c6';
        tile.style.display = 'block';
        break;

      case '2':
        tile.style.color = '#286b26';
        tile.style.display = 'block';
        break;

      case '3':
        tile.style.color = '#d20a15';
        tile.style.display = 'block';
        break;

      case '4':
        tile.style.color = '#100784';
        tile.style.display = 'block';
        break;

      default:
        tile.style.display = 'block';
        break;
    }
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

    if(this.state.flagged) {
      display = <img src={flag} alt='mine icon' style={{display: 'block', height: '20px', width: '20px'}} />;
    }

    return <Tile onClick={this.tileAction} onContextMenu={this.flagTile}>{display}</Tile>
  }
}

export default TileContainer;
