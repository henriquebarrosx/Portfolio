import React from 'react';

import {
    Logo,
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
            label: "Works",
            link: "#projects",
        },
    ];    

    const [displayName, setDisplayName] = React.useState(false);

    React.useEffect(() => captureScreenScroll(setDisplayName), []);
    React.useEffect(() => removeScreenListener(), [displayName]);
    
    return (
      <React.Fragment>
        <Container isScreenTop={isScreenTop}>
          <SubContainer displayName={displayName}>
            <LogoContainer displayName={displayName}>
              <Logo>Henrique Barros</Logo>
            </LogoContainer>
              
            <NavBarLinksContainer>
              {menuOptions.map(({ label, link }) => (
                <NavbarLinkItem key={label}>
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