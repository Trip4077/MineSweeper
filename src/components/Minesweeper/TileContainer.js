import React from 'react';
import { Tile } from './ms-styled';

class TileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tyleType: this.props.tile,
      clicked: false,
      flagged: false
    }
  }

  render() {
    return <Tile></Tile>
  }
}

export default TileContainer;
