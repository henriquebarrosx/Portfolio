import styled from 'styled-components';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
	margin: 84px 0;
  border-radius: 6px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const WorkContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
`

export const ImageContainer = styled.div`
  display: flex;
  margin-top: 32px;
  position: relative;
  flex-direction: row;
  align-items: center;
`

export const WorkImage = styled.img`
  z-index: 0;
  width: 100%;
  height: auto;
  display: flex;
  user-select: none;
  max-width: 1350px;
  border-radius: 6px;
  transition: all .7s;
  align-items: center;
  justify-content: center;
  
  @media(max-width: 800px) {
    width: 95%;
    margin: auto
  }
`;

export const WorkLink = styled.a`
  z-index: 1;
  width: 350px;
  height: 54px;
  margin: auto;
  display: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  border-radius: 6px;
  color: transparent;
  transition: all .3s;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  text-transform: uppercase;
  border: 2px solid #33ffa9;
  background-color: transparent;

  &:after {
    right: 0;
    bottom: 0;
    content: '';
    width: 100%;
    z-index: -2;
    height: 100%;
    position: absolute;
    border-radius: 6px;
    background-color: transparent;
  }

  &:before {
    right: 0;
    width: 0;
    bottom: 0;
    content: '';
    z-index: -1;
    height: 100%;
    position: absolute;
    transition: all .3s;
    border-radius: 4px;
    background-color: #33ffa9;
  }

  @media (hover: hover) {
    &:hover {
      color: #1d1b24 !important;
      &:before { width: 100%; }
    }
  }
`;

export const LeftArrow = styled(FaChevronLeft)`
  color: #33ffa9;
  margin: 0 24px;
  cursor: pointer;
  font-size: 32px;
  
  @media (hover: hover) {
    &:hover {
      opacity: 0.3;
    }
  }
  
  @media(max-width: 800px) {
    display: none;
  }
`;

export const RightArrow = styled(FaChevronRight)`
  color: #33ffa9;
  margin: 0 24px;
  cursor: pointer;
  font-size: 32px;

  @media (hover: hover) {
    &:hover {
      opacity: 0.3;
    }
  }
  
  @media(max-width: 800px) {
    display: none;
  }
`;

export const BlurEffect = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  position: absolute;
  transition: all .3s;
  flex-direction: column;

  @media (hover: hover) {
    &:hover {
      background-color: rgba(0,0,0,0.7);
      
       ${WorkLink} {
         color: #33ffa9;
         display: flex;
       }
    }
  }
`;