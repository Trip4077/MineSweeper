import React, { Component } from 'react';
import Home from './components/Home/Home';
import Minesweeper from './components/Minesweeper/Minesweeper';
import { Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={Home} />
        <Route exact path='/minesweeper' component={Minesweeper} />
      </div>
    );
  }
}

export default App;
