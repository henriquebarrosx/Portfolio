import styled, {keyframes}  from 'styled-components';

const Container = styled.div`
  top: 0;
  z-index: 10;
  width: 100%;
  border: none;
  height: 70px;
  position: fixed;
  transition: all 1s;
  background-color: ${({ isScreenTop }) => isScreenTop ? '#FFFFFF' : '#f2f0fc'};

  @media(max-width: 750px) {
    transition: all 0.1s;
    height: ${({displayMenu}) => displayMenu ? '230px' : '70px'};
    background-color: ${({ displayMenu, isScreenTop }) => displayMenu || !isScreenTop ? '#f2f0fc' : '#FFFFFF'};
  }
`

export const SubContainer = styled.div`
  display: flex;
  transition: 3s;
  justify-content: space-between;

  @media(max-width: 750px) {
    flex-direction: column;
  }
`

const Logo = styled.span`
  color: #47444f;
  font-size: 20px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 2px;
  transition: all .3s;
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  opacity: ${({ displayName }) => displayName ? '1' : '0'};
`

export const MenuIcon = styled.div`
  display: none;

  @media(max-width: 750px) {
    display: flex;
  }
`

const LogoContainer = styled.div`
  height: 70px;
  float: left;
  display: flex;
  transition: 1s;
  margin: 0 25px;
  align-items: center;

  @media(max-width: 750px) {
    justify-content: space-between;
  }
`

const EasyIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`

const NavBarLinksContainer = styled.ul`
    height: 70px;
    float: right;
    display: flex;
    margin: 0 35px;
    transition: 2s;
    align-items: center;
    justify-content: flex-end;

    @media(max-width: 750px) {
      margin-top: 60px;
      animation: EasyIn;
      animation-delay: 5s;
      flex-direction: column;
      display: ${({displayMenu}) => displayMenu ? 'flex' : 'none'};
    }
`

const NavBarLink = styled.a`
    height: 100%;
    display: flex;
    color: #47444f;
    transition: 0.8s;
    cursor: pointer;
    font-weight: 700;
    padding: 8px 12px;
    place-items: center;
    text-decoration: none;
    border-bottom: 1px solid;
    border-color: transparent;
    
    &:hover {
      color: #23272d;
      border-color: #23272d
    }
`

const NavbarLinkItem = styled.li`
    height: 40px;
    display: flex;
    margin: 0 15px;
    cursor: pointer;
    transition: .1s;
    place-items: center;
    list-style-type: none;
`

export { Container, Logo, LogoContainer, NavBarLinksContainer, NavBarLink, NavbarLinkItem }