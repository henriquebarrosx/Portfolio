import styled from 'styled-components';

const Container = styled.div`
  width: 95%;
  display: flex;
  max-width: 1600px;
  position: relative;
  margin: 0 auto 100px;
  flex-direction: row-reverse;
  
  @media (max-width: 1050px) {
    margin-bottom: 50px;
    flex-direction: column;
  }
  @media(max-width: 750px) {
    width: 100%;
  }
`

const Photo = styled.img`
    float: right;
    height: 60%;
    display: flex;
    margin: 0 auto;
    max-height: 550px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 18px 18px #2a2830;
    
    @media (max-width: 1500px) {
      height: 65vh;
    }
    @media (max-width: 1280px) {
      height: 50vh;
      margin: 0 auto;
    }
    @media (max-width: 1050px) {
      height: 500px;
      max-width: 475px;
      margin: 0 auto 70px;
    }
    @media (max-width: 750px) {
      height: 100vw;
    }
`

const PresentationContainer = styled.div`
  width: 720px;
  margin: 0 auto;
  max-width: 720px;
  
  @media(max-width: 1250px) {
     width: 100%;
     max-width: 520px;
     margin: 0 auto;
  }
`

const Presentation = styled.span`
  display: flex;
  max-width: 600px;
  font-weight: 700;
  flex-direction: column;
  font-family: "roboto",sans-serif;
  
  @media(max-width: 1500px) {
    margin-top: 0;
    font-size: 45px;
    line-height: 60px;
    letter-spacing: 0;
  }
  
  @media(max-width: 750px) {
    margin: 0 20px;
  }
`

const PresentationTitle = styled.span`
  color: #33ffa9;
  font-size: 95px;
  line-height: 80px;
  font-family: "roboto",sans-serif;
  
  @media(max-width: 1280px) {
     font-size: 80px;
  }
  @media(max-width: 750px) {
     font-size: 50px;
  }
`

const PresentationSubtitle = styled.span`
  color: #fdfafe;
  font-size: 36px;
  line-height: 80px;
  
  @media(max-width: 750px) {
     font-size: 25px;
     line-height: 30px;
  }
`

const AboutMe = styled.div`
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
  
  @media(max-width: 750px) {
    font-size: 18px;
    line-height: 30px;
    margin: 20px 20px 0;
  }
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
  
  @media(max-width: 750px) {
    width: 92%;
    max-width: none;
    margin: 30px auto;
  }
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
  
  @media(max-width: 750px) {
    &:not(:last-child) {
      margin-right: 12px
    }
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
  font-family: "roboto",sans-serif !important;
  
  @media(max-width: 750px) {
     margin: 0 auto;
     font-size: 14px;
  }
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