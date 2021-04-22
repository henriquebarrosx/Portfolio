import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;  
  margin: 0 auto;
  padding: 0 40px;
  max-width: 1600px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  `
export const LeftSide = styled.div`
  max-width: 700px;
  flex-direction: column;
`

export const RightSide = styled.div`
  max-width: 500px;
  
  & svg {
    transform: scale(60vw)
  }
`

export const Presentation = styled.span`
  display: flex;
  font-weight: 600;
  flex-direction: column;
`

export const Name = styled.span`
  width: 100%;
  height: 90px;
  color: #47444f;
  font-size: 80px;
`

export const LastName = styled.span`
  width: 100%;
  height: 90px;
  color: #47444f;
  font-size: 80px;
`

export const PresentationSubtitle = styled.span`
  color: #1d1b24;
  font-size: 36px;
  line-height: 80px;
`

export const AboutMe = styled.div`
  color: #666371;
  font-size: 20px;
  margin-top: 20px;
  font-weight: 300;
  max-width: 640px;
  text-align: left;
  line-height: 36px;
  letter-spacing: 0;
  font-style: normal;
  text-decoration: none;
`

export const SocialSection = styled.div`
  bottom: 0;
  height: 69px;
  display: flex;
  padding: 15px 0;
  margin-top: 55px;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
`

export const MatchMe = styled.button`
  border: none;
  height: 54px;
  width: 240px;
  outline: none;
  color: #FFFFFF;
  cursor: pointer;
  font-weight: 700;
  transition: 0.3s;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: #7562e0;

  &:hover {
    background-color: #4a37b0
  }
`

export const SocialContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`

export const SocialItem = styled.li`
  width: 60px;
  height: 60px;
  display: flex;
  transition: .3s;
  align-items: center;
  border-radius: 100%;
  letter-spacing: 1.2px;
  justify-content: center;


  & svg {
    transition: all 0.5s;
  }

  & svg:not(:hover) {
    color: rgb(132, 130, 138) !important;
  }
  
  &:not(:last-child) {
    margin-right: 6px
  }
  
  @media(max-width: 750px) {
    &:not(:last-child) {
      margin-right: 12px
    }
  }
`

export const SocialLink = styled.a`
  font-size: 18px;
  color: #23272d;
  transition: .3s;
  line-height: 21px;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  letter-spacing: .5px;
  font-family: "roboto",sans-serif !important;
`