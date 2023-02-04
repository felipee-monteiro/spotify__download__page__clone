import * as React from 'react';
import {
  Wrapper,
  MenuContainer,
  MenuItemsWrapper,
  MenuLink,
  LigthLinks
} from './styles';
import { DividerTall } from '@styled-icons/fluentui-system-regular/DividerTall';
import { Spotify } from '@styled-icons/boxicons-logos/Spotify';
import { Menu } from '@styled-icons/boxicons-regular/Menu';
import MobileMenu from '../MenuMobile/MenuMobile';

function Header () {
  const [open, setOpen] = React.useState(false);
  if (open) {
    return <MobileMenu open={setOpen} />;
  }

  return (
    <Wrapper>
      <MenuContainer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Spotify size='5rem' color='white' />
          <h2 style={{ color: 'white', fontSize: '2.5rem' }}>Spotify</h2>
        </div>
        <button onClick={() => setOpen(true)} type='button'>
          <Menu size='4rem' color='white' />
        </button>
        <MenuItemsWrapper>
          <MenuLink href='#'>Premium</MenuLink>
          <MenuLink href='#'>Suporte</MenuLink>
          <MenuLink href='#'>Baixar</MenuLink>
          <DividerTall size='2rem' color='white' />
          <LigthLinks href='#'>Inscrever-se</LigthLinks>
          <LigthLinks href='#'>Entrar</LigthLinks>
        </MenuItemsWrapper>
      </MenuContainer>
    </Wrapper>
  );
}

export default Header;
