import React from 'react';
import {
  FooterWrapperContent,
  FooterWrapper,
  Main,
  FooterIconWrapper
} from './styles.js';
import { Spotify } from '@styled-icons/boxicons-logos/Spotify';
import { Instagram } from '@styled-icons/boxicons-logos/Instagram';
import { Twitter } from '@styled-icons/boxicons-logos/Twitter';
import { FacebookCircle } from '@styled-icons/boxicons-logos/FacebookCircle';

function Footer () {
  return (
    <FooterWrapper>
      <Main>
        <FooterIconWrapper>
          <Spotify size='5rem' color='white' />
          <h1>Spotify</h1>
        </FooterIconWrapper>
        <FooterWrapperContent>
          <h2>EMPRESA</h2>
          <a href='#'>Sobre</a>
          <a href='#'>Empregos</a>
          <a href='#'>For the Record</a>
        </FooterWrapperContent>
        <FooterWrapperContent>
          <h2>COMUNIDADES</h2>
          <a href='#'>Para Artistas</a>
          <a href='#'>Desenvolvedores</a>
          <a href='#'>Publicidade</a>
          <a href='#'>Investidores</a>
          <a href='#'>Fornecedores</a>
        </FooterWrapperContent>
        <FooterWrapperContent>
          <h2>LINKS ÚTEIS</h2>
          <a href='#'>Suporte</a>
          <a href='#'>Player da Web</a>
          <a href='#'>Aplicativo Móvel Grátis</a>
        </FooterWrapperContent>
        <FooterIconWrapper gap={2}>
          <Instagram size='3.5rem' color='white' />
          <Twitter size='3.5rem' color='white' />
          <FacebookCircle size='3.5rem' color='white' />
        </FooterIconWrapper>
      </Main>
    </FooterWrapper>
  );
}

export default Footer;
