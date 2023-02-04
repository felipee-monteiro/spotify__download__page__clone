import 'animate.css';
import React from 'react';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { MenuWrapper, MenuLinks } from './styles';
import { DividerTall } from '@styled-icons/fluentui-system-regular/DividerTall';

function MobileMenu (props) {
  return (
    <>
      <MenuWrapper className='animate__animated animate__fadeInRight'>
        <MenuLinks>
          {/* eslint-disable-next-line react/prop-types */}
          <button onClick={() => props.open(false)}>
            <CloseOutline className='closeButton' size='5rem' color='white' />
          </button>
          <a href='#'>Premium</a>
          <a href='#'>Suporte</a>
          <a href='#'>Baixar</a>
          <DividerTall size='2rem' color='white' />
          <a href='#'>Inscrever-se</a>
          <a href='#'>Entrar</a>
        </MenuLinks>
      </MenuWrapper>
    </>
  );
}

export default MobileMenu;
