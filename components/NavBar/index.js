import React from 'react';

import {
    Logo,
    Container,
    NavBarLink,
    LogoContainer,
    NavbarLinkItem,
    NavBarLinksContainer,
} from './styled'

export default function NavBar() {
    const menuOptions = [
        {
            label: "Home",
            link: "#home",
        },
        {
            label: "Projects",
            link: "#projects",
        },
        {
            label: "Time Line",
            link: "#timeLine",
        },
    ];

    return (
        <React.Fragment>
            <Container>
                <LogoContainer>
                    <Logo as="a" href="https://github.com/Henryxavierb/dev-portfolio" target="_blank">
                        Portfolio
                    </Logo>
                </LogoContainer>

                <NavBarLinksContainer>
                    {menuOptions.map(({ label, link }) => (
                        <NavbarLinkItem key={label}>
                            <NavBarLink as="a" href={link}>{label}</NavBarLink>
                        </NavbarLinkItem>
                    ))};
                </NavBarLinksContainer>
            </Container>
        </React.Fragment>
    )
}