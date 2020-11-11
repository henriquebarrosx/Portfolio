import styled  from 'styled-components';

const Container = styled.div`
    top: 0;
    z-index: 10;
    width: 100%;
    height: 70px;
    border: none;
    position: fixed;
    transition: .3s;
`

const Logo = styled.a`
    color: #33ffa9;
    cursor: pointer;
    font-size: 35px;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 8px;
    text-decoration: none;
    font-family: "Open Sans", sans-serif;
    
    &:hover {
      text-decoration: underline;
    }
`

const LogoContainer = styled.div`
    height: 70px;
    float: left;
    display: flex;
    margin: 0 25px;
    align-items: center;
`

const NavBarLinksContainer = styled.ul`
    height: 70px;
    float: right;
    display: flex;
    margin: 0 35px;
    align-items: center;
    justify-content: flex-end;
`

const NavBarLink = styled.a`
    color: #fff;
    height: 100%;
    display: flex;
    transition: .1s;
    cursor: pointer;
    font-weight: 700;
    border-radius: 8px;
    padding: 8px 12px;
    place-items: center;
    text-decoration: none;
    
    &:hover {
      color: #23272d;
      background-color: #33ffa9;
    }
`

const NavbarLinkItem = styled.li`]
    height: 40px;
    display: flex;
    margin: 0 6px;
    cursor: pointer;
    transition: .1s;
    place-items: center;
    list-style-type: none;
`

export { Container, Logo, LogoContainer, NavBarLinksContainer, NavBarLink, NavbarLinkItem }