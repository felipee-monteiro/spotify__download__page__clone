import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  background-color: black;
  padding: 7rem 0;
`;

export const Main = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  @media (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    margin: 0;
  }
`;

export const FooterIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 3rem;
  gap: ${props => (props.gap ? `${props.gap}rem` : 'auto')};
  > h1 {
    color: white;
    font-size: 2.5rem;
    text-align: center;
  }
  @media (max-width: 900px) {
    justify-content: initial;
    margin-left: 1.5rem;
    padding: 0 0.5rem;
  }
`;

export const FooterWrapperContent = styled.footer`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  > h2 {
    color: gray;
    font-size: 1.3rem;
    margin: 0 3rem 1rem;
  }
  > a {
    color: white;
    margin: 1.2rem 3rem;
    font-size: 1.5rem;
    &:hover {
      color: rgb(25, 230, 140);
    }
  }
  @media (max-width: 900px) {
    margin: 2rem 0;
  }
`;

export const FooterFinalContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
