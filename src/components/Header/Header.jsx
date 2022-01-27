import * as React from "react";
import {Wrapper, MenuContainer, MenuItems} from "./styles";
import {DividerTall} from "@styled-icons/fluentui-system-regular/DividerTall";
import {Spotify} from "@styled-icons/boxicons-logos/Spotify";
import {Menu} from "@styled-icons/boxicons-regular/Menu";
import MobileMenu from "../MenuMobile/MenuMobile";

function Header(){
    const [open, setOpen] = React.useState(false);
    if(open){
        return <MobileMenu open={setOpen} />
    }

    return (
       <Wrapper>
           <MenuContainer>
               <Spotify size="5rem" color="white"/>
               <button onClick={() => setOpen(true)} type="button"><Menu size="4rem" color="white"/></button>
               <MenuItems>
                   <a href="#">Premium</a>
                   <a href="#">Suporte</a>
                   <a href="#">Baixar</a>
                   <DividerTall size="2rem" color="white"/>
                   <a href="#">Inscrever-se</a>
                   <a href="#">Entrar</a>
               </MenuItems>             
           </MenuContainer>
       </Wrapper>
    )
}

export default Header;