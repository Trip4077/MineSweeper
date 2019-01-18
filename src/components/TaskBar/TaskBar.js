import React from 'react';
import StartBtn from './StartBtn';
import Time from './Time';
import './TaskBar.css';

const TaskBar = () => {
  return(
    <div className='taskbar'>
      <StartBtn />
      <Time />
    </div>
  );
}

export default TaskBar;
