import styled  from 'styled-components';

const Container = styled.div`
  top: 0;
  z-index: 10;
  width: 100%;
  height: 70px;
  border: none;
  position: fixed;
  transition: all 1s;
  background-color: ${({ isScreenTop }) => isScreenTop ? '#FFFFFF' : '#eeeeee'};
  `

export const SubContainer = styled.div`
  display: flex;
  transition: 3s;
  justify-content: space-between;
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
  `

const LogoContainer = styled.div`
  height: 70px;
  float: left;
  display: flex;
  transition: 1s;
  margin: 0 25px;
  align-items: center;
  opacity: ${({ displayName }) => displayName ? '1' : '0'};
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