import * as React from "react";
import { SubTitle } from "../Hero/styles";
import {ContentTitle, ContentWrapper, IconWrapper} from "./Content";

function Content(){
    return (
        <ContentWrapper>
            <ContentTitle>
                Curta as suas músicas também no seu celular ou tablet.
            </ContentTitle>
            <SubTitle>
                Ouvir música no celular ou tablet é fácil, divertido e grátis.
            </SubTitle>
            <IconWrapper>
                <a href="#"><img src="https://www-growth.scdn.co/static/badges/apple/pt.png" alt="Baixar na App Store" /></a>
                <a href="#"><img src="https://www-growth.scdn.co/static/badges/google/pt.png" alt="Baixe no Google Play"/></a>
                <a href="#"><img src="https://www-growth.scdn.co/static/badges/microsoft-windows/pt.png" alt="Baixe da Microsoft"/></a>
            </IconWrapper>
        </ContentWrapper>
    )
}

export default Content;