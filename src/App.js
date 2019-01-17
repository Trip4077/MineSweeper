import React, { Component } from 'react';
import TaskBar from './components/TaskBar/TaskBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskBar />
      </div>
    );
  }
}

export default App;
