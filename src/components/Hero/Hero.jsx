import React from 'react';
import { SubTitle, Title, Wrapper, SubWrapper, DownloadButton } from './styles';

function Hero () {
  return (
    <>
      <Wrapper>
        <SubWrapper>
          <img
            src='https://www-growth.scdn.co/static/download/laptop.svg'
            alt='Laptop'
          />
          <Title>Baixe o Spotify</Title>
          <SubTitle>
            Escute milhões de músicas e podcasts no seu dispositivo.
          </SubTitle>
          <DownloadButton href='#'>Baixar</DownloadButton>
        </SubWrapper>
      </Wrapper>
    </>
  );
}

export default Hero;
