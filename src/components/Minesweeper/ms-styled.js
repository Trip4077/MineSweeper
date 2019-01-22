import styled from 'styled-components';

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

const BoardContainer = styled.div`
  border: 2px outset #818181;
  display: grid;
  grid-template-columns: 25px 25px 25px 25px 25px 25px 25px 25px;
  grid-template-rows: 25px 25px 25px 25px 25px 25px 25px 25px;
`;

const Tile = styled.button`
  border-bottom: 2px solid #010004;
  border-right: 1px solid #010004;

  border-top: 1px solid #fff;
  border-left: 2px solid #fff;

  background-color: #bebebe;

  padding: 0;

  span {
    display: none;
  }

  img {
    margin-left: 4px;
    display: none;
  }

  &:active {
    background-color: #bab5b5;
  }

  &:focus {
    outline: none;
  }
`;

export {
  TopBar,
  TopBarLogo,
  TopBarTools,
  Control,
  BoardContainer,
  Tile
}
