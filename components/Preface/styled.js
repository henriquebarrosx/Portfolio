import styled from 'styled-components';

const Container = styled.div`
  width: 95%;
  display: flex;
  max-width: 1600px;
  position: relative;
  margin-bottom: 100px;
  flex-direction: row-reverse;
`

const Photo = styled.img`
    float: right;
    height: 60%;
    display: flex;
    max-height: 550px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 18px 18px #2a2830;
`

const PresentationContainer = styled.div`
  width: 720px;
  margin: 0 auto;
  max-width: 720px;
`

const Presentation = styled.span`
  display: flex;
  max-width: 600px;
  font-weight: 700;
  flex-direction: column;
  font-family: "roboto",sans-serif;
`

const PresentationTitle = styled.span`
  color: #33ffa9;
  font-size: 95px;
  line-height: 80px;
  font-family: "roboto",sans-serif;
`

const PresentationSubtitle = styled.span`
  color: #fdfafe;
  font-size: 36px;
  line-height: 80px;
`

const AboutMe = styled.span`
  color: #777;
  font-size: 20px;
  margin-top: 20px;
  font-weight: 300;
  max-width: 900px;
  text-align: left;
  line-height: 36px;
  letter-spacing: 0;
  font-style: normal;
  text-decoration: none;
`

const SocialSection = styled.div`
  bottom: 0;
  height: 69px;
  display: flex;
  padding: 15px 0;
  max-width: 700px;
  margin-top: 55px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: #33ffa9;
  box-shadow: 8px 8px rgba(83,246,199,.08);
`

const SocialContainer = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
`

const SocialItem = styled.li`
  height: 69px;
  display: flex;
  transition: .2s;
  text-align: center;
  align-items: center;
  letter-spacing: 1.2px;
  
  ${SocialContainer}:hover > &:not(:hover){
    opacity: 0.2;
  }
    
  &:not(:last-child) {
    margin-right: 16px
  }
`

const SocialLink = styled.a`
  font-size: 18px;
  color: #23272d;
  transition: .3s;
  line-height: 21px;
  font-weight: 700;
  font-style: normal;
  text-decoration: none;
  letter-spacing: .5px;
  font-family: "roboto",sans-serif;
`

export {
  Photo,
  AboutMe,
  Container,
  SocialItem,
  SocialLink,
  Presentation,
  SocialSection,
  SocialContainer,
  PresentationTitle,
  PresentationSubtitle,
  PresentationContainer,
}