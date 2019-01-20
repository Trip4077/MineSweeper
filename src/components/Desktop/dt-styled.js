import styled from 'styled-components';


const DesktopContainer = styled.div`
  height: 100%;
  width: 25%;

  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  a {
    text-decoration: none;
  }
`;

const DeskIcon = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  img {
    height: 40px;
    width: 40px;

    margin: 10px 0;
  }

  p {
    margin-bottom: 10px;
    text-align: center;

    font-size: 1.4rem;
    color: white;
    text-decoration: none;
  }

  &:active {
    background-color: #000080;
  }
`;

export {
  DesktopContainer,
  DeskIcon };
