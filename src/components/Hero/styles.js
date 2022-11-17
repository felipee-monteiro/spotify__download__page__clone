import styled from "styled-components";

export const Wrapper = styled.div`
   background-color: rgb(25, 230, 140);
   width: 100%;
   height: 54vh;
   padding: 2rem 0;
   display: flex;
   align-items: center;
   justify-content: center;  
`;

export const SubWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   > img{
      height: 8rem;
      margin-bottom: 4rem;
   }
`;

export const Title = styled.h1`
    font-weight: bold;
    font-size: 4rem;
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
   > a{
      text-decoration: none;
      color: black;
      padding: 1rem;
      font-weight: 600;
      font-size: 1.5rem;
      background-color: white;
      width: 10vw;
      padding: 1.5rem 3.5rem; 
      border-radius: 3rem;
      
      &:hover{
         text-decoration: underline;
      }
   }
`;
