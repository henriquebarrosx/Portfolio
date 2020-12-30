import React from 'react';

import {
    Logo,
    Container,
    NavBarLink,
    LogoContainer,
    NavbarLinkItem,
    NavBarLinksContainer,
} from './styled'

export default function NavBar({ isScreenTop }) {
    const menuOptions = [
        {
            label: "Home",
            link: "#home",
        },
        {
            label: "Experiences",
            link: "#experiences",
        },
        {
            label: "Projects",
            link: "#projects",
        },
    ];
    
    const githubRepository = 'https://github.com/Henryxavierb/portfolio';
    
    return (
      <React.Fragment>
          <Container isScreenTop={isScreenTop}>
              <LogoContainer>
                  <Logo as="a" href={githubRepository} target="_blank">
                      Portfolio
                  </Logo>
              </LogoContainer>
              
              <NavBarLinksContainer>
                  {menuOptions.map(({ label, link }) => (
                    <NavbarLinkItem key={label}>
                        <NavBarLink as="a" href={link}>{label}</NavBarLink>
                    </NavbarLinkItem>
                  ))}
              </NavBarLinksContainer>
          </Container>
      </React.Fragment>
    )
}