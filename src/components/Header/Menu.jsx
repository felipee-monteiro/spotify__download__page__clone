import React from 'react';
import { Spotify } from '@styled-icons/boxicons-logos/Spotify';
import { Wrapper, MenuContainer } from './styles';

function Menu (props) {
  return (
    <Wrapper>
      <MenuContainer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Spotify size='5rem' color='white' />
          <h2 style={{ color: 'white', fontSize: '2.5rem' }}>Spotify</h2>
        </div>
        {/* eslint-disable-next-line react/prop-types */}
        {props.children}
      </MenuContainer>
    </Wrapper>
  );
}

export default Menu;
