import styled from "styled-components";
import {ContentTitle} from "../Content/Content";

export const DevicesWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: rgb(34, 35, 38);
    padding: 6rem 0;
`;
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 2rem;
    > img{
        height: 20rem;
        margin: 2rem 0;
        @media (max-width: 900px){
            height: 15vh;
        }
    }
`;

export const AnchorsSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    text-transform: uppercase;
    font-size: 1.7rem;
    > p{
        color: white;
        margin: 2rem 0;
    }
    > a{
        color: green;
    }
`;

export const Title = styled(ContentTitle)`
    color: white;
    margin: 2rem 0;
`;