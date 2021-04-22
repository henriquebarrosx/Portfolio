import React from 'react';
import {HiMenuAlt3} from 'react-icons/hi'

import {
    Logo,
    MenuIcon,
    Container,
    NavBarLink,
    SubContainer,
    LogoContainer,
    NavbarLinkItem,
    NavBarLinksContainer,
} from './styled'

function NavBar({ isScreenTop }) {
    const menuOptions = [
        {
            label: "Home",
            link: "#home",
        },
        {
            label: "Skills",
            link: "#skills",
        },
        {
            label: "Experiences",
            link: "#experiences",
        },
    ];    

    const [displayName, setDisplayName] = React.useState(false);
    const [displayMenu, setDisplayMenu] = React.useState(false);

    React.useEffect(() => captureScreenScroll(setDisplayName), []);
    React.useEffect(() => removeScreenListener(), [displayName]);

    const _changeMenuBehavior = () =>  setDisplayMenu(!displayMenu)
    
    return (
      <React.Fragment>
        <Container isScreenTop={isScreenTop} displayMenu={displayMenu}>
          <SubContainer displayName={displayName}>
            <LogoContainer>
              <Logo displayName={displayName}>Henrique Barros</Logo>

              <MenuIcon displayMenu={displayMenu} onClick={_changeMenuBehavior}>
                <HiMenuAlt3 size={24} />
              </MenuIcon>
            </LogoContainer>
              
            <NavBarLinksContainer displayMenu={displayMenu}>
              {menuOptions.map(({ label, link }) => (
                <NavbarLinkItem key={label} onClick={_changeMenuBehavior}>
                  <NavBarLink as="a" href={link}>{label}</NavBarLink>
                </NavbarLinkItem>
              ))}
            </NavBarLinksContainer>
          </SubContainer>    
        </Container>
      </React.Fragment>
    )
}

export function captureScreenScroll(setDisplayName) {
    window.addEventListener('scroll', () => {
      const SCREEN_TOP_REFERENCE = 200;
      const displayName = window.scrollY >= SCREEN_TOP_REFERENCE;
      
      setDisplayName(displayName)
    })
  }
  
  export function removeScreenListener() {
    window.removeEventListener('scroll', () => {});
  }

  export default React.memo(NavBar);