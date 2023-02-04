import React from 'react';
import { MenuItemsWrapper, MenuLink, LigthLinks } from './styles';
import { DividerTall } from '@styled-icons/fluentui-system-regular/DividerTall';
import { Menu } from '@styled-icons/boxicons-regular/Menu';
import MobileMenu from '../MenuMobile/MenuMobile';
import MenuWrapper from './Menu.jsx';

function Header () {
  const [open, setOpen] = React.useState(false);
  if (open) {
    return (
      <MenuWrapper>
        <MobileMenu open={setOpen} />
      </MenuWrapper>
    );
  }

  return (
    <MenuWrapper>
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
    </MenuWrapper>
  );
}

export default Header;
