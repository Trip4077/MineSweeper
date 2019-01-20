import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import minesweeper from '../../images/desktop/winmine.png';

import './Minesweeper.css';

class Minesweeper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    const TopBar = styled.div`
      background-color: #000080;
      padding: 3px;

      display: flex;
      justify-content: space-between;
      align-items: center;
    `;

    const TopBarLogo = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-around;

      width: 40%;

      color: white;
      font-size: 1.6rem;
    `;

    const TopBarTools = styled.div`
      a button, button {
        background-color: #d0d1cc;
        font-size: 1.6rem;
        height: 23px;
      }

      a button:focus, button:focus {
        outline: none;
      }

      button {
        margin: 0 1px;
      }
    `;

    const Control = styled.div`
      display: flex;
      align-items: center;

      font-size: 1.6rem;

      p {
        margin: 5px;
      }

      span {
        text-decoration: underline;
      }
    `;

    return(
      <div className='minesweeper'>
        <TopBar>
          <TopBarLogo>
            <img src={minesweeper} alt="Minesweeper logo" />
            <h2>Minesweeper</h2>
          </TopBarLogo>
          <TopBarTools>
            <Link to='/minesweeper/min'><button>_</button></Link>
            <button>&#9633;</button>
            <Link to='/'><button>&times;</button></Link>
          </TopBarTools>
        </TopBar>


        <Control>
          <p><span>G</span>ame</p>
          <p><span>H</span>elp</p>
        </Control>
      </div>
    );
  }
}

export default Minesweeper;
