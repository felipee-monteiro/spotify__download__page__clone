import styled from 'styled-components';
import { MenuContainer } from '../Header/styles';

export const MenuWrapper = styled(MenuContainer)`
  flex-direction: column;
  justify-content: initial;
  align-items: initial;
  position: fixed;
  background-color: black;
  right: 0;
  z-index: 2;
  height: 100vh;
  max-width: 90vw;
  animation-duration: .7s;
`;

export const MenuLinks = styled.nav`
  margin-top: 5rem;
  padding: 1rem;
  font-size: 3.5rem;
  display: flex;
  flex-direction: column;
  text-align: left;
  .closeButton {
    position: absolute;
    right: 0;
    top: 1rem;
  }
  > a {
    color: white;
    margin-bottom: 1.7rem;
    font-weight: bolder;
  }
`;
