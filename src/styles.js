import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
     *{
         margin: 0;
         padding: 0;
         box-sizing: border-box;
     }

     body, html{
         max-width: 100vw;
         max-height: 100vh;
         width: 100%;
         height: 100%;
         font-size: 60%;
         font-family: "Poppins", system-ui;
         @media (max-width: 900px){
             font-size: 53%;
         }
     }

     a{
         text-decoration: none;
         &:hover{
             text-decoration: underline;
         }
     }

     button {
         border: none;
         outline: none;
         background: none;
     }

     :root{
         --primary: rgb(34, 35, 38);
     }
`;