import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: rgb(25, 230, 140);
  width: 100%;
  min-height: 54vh;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 900px) {
    padding: 2rem 0 3rem 0;
  }
`;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    height: 8rem;
    margin-bottom: 4rem;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 4.5rem;
  color: ${props => props.color};
`;

export const SubTitle = styled.p`
  font-weight: semibold;
  font-size: 1.5rem;
  margin: 2rem auto;
  text-align: center;
`;

export const DownloadButton = styled.a`
  margin-top: 4rem;
  color: black;
  padding: 1rem;
  font-weight: 600;
  font-size: 1.5rem;
  background-color: white;
  padding: 1.5rem 3.5rem;
  border-radius: 3rem;

  &:hover {
    tranform: scale(1);
    text-decoration: none;
  }
`;
