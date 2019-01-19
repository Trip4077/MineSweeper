import React from 'react';
import StartBtn from './StartBtn';
import StartMenu from './StartMenu';
import Time from './Time';
import './TaskBar.css';

const TaskBar = () => {
  return(
    <div className='taskbar'>
      <StartMenu />
      <StartBtn />
      <Time />
    </div>
  );
}

export default TaskBar;
