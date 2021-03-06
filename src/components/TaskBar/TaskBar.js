import React from 'react';
import StartBtn from './StartBtn';
import StartMenu from './StartMenu';
import Time from './Time';

import menuData from './tb-data';
import './TaskBar.css';

class TaskBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
  }

  toggleMenu = (e) => {
    this.setState(prevState => {
      return { isOpen: !prevState.isOpen }
    })
  }

  render() {

    return(
      <div className='taskbar'>
        <StartMenu menuStatus={this.state.isOpen} menuItems={menuData}/>
        <StartBtn toggle={this.toggleMenu}/>
        <Time />
      </div>
    );
  }
}

export default TaskBar;
