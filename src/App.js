import React, { Component } from 'react';
import TaskBar from './components/TaskBar/TaskBar';
import Desktop from './components/Desktop/Desktop';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Desktop />
        <TaskBar />
      </div>
    );
  }
}

export default App;
