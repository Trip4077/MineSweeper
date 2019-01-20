import React from 'react';
import { Tile } from './ms-styled';

class TileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tyleType: this.props.tile,
      clicked: false,
      flagged: false,
      mineContact: 0,
    }
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
    return <Tile>{this.state.mineContact}</Tile>
  }
}

export default TileContainer;
