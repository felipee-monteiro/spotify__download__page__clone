import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.7rem 0;
  width: min(62vw, 100%);
  > button {
    display: none;
  }
  @media (max-width: 900px) {
    width: 100%;
    > button {
      display: initial;
    }
  }
`;

export const MenuItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    display: none;
    > svg {
      display: initial;
    }
  }
`;

export const MenuLink = styled.a`
    color: white;
    font-size: 1.5rem;
    margin: auto 2rem;
    font-weight: bold;
    &:hover {
      color: rgb(25, 230, 140);
      text-decoration: none;
    }
`;

export const LigthLinks = styled(MenuLink)`
  font-weight: normal;
`;
