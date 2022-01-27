import styled from "styled-components";

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
    padding: 1.7rem;
    width: min(60vw, 100%);
    > button {
        display: none;
    }
    @media (max-width: 900px){
        width: 100%;
        > button {
            display: initial;
        }
    }
`;

export const MenuItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    > a {
        color: white;
        font-size: 1.6rem;
        text-decoration: none;
        margin: auto 2rem;
        font-weight: bold;
        &:hover{
            color: green;
        }
    }
    @media (max-width: 900px){
        display: none;
        > svg {
            display: initial;
        }
    }
`;