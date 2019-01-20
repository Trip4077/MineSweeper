import React from 'react';
import TaskBar from '../TaskBar/TaskBar';
import Desktop from '../Desktop/Desktop';

const Home = props => {
  return(
    <div className="App">
      <Desktop />
      <TaskBar />
    </div>
  );
}

export default Home;
