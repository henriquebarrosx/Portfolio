import styled from 'styled-components';

export const Link = styled.a`
	width: 90vw;
  margin: 5px;
  max-width: 500px;
  text-align: center;
  font-weight: bolder;
  text-decoration: none;
  letter-spacing: 0.05em;
  color: #33ffa9 !important;
`;

export const Container = styled.div`
	z-index: 1;
	height: 70px;
  display: flex;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border-radius: 20px;
  align-items: center;
  margin: 0 auto 30px;
  transition: all .3s;
  border: 2px solid #33ffa9;
  background-color: #1d1b24;
  
  &:after {
  	left: 0;
  	bottom: 0;
  	content: '';
  	width: 100%;
  	z-index: -2;
  	height: 100%;
  	position: absolute;
  	border-radius: 20px;
  	background-color: #1d1b24;
  }
  
  &:before {
    left: 0;
    width: 0;
    bottom: 0;
    content: '';
    z-index: -1;
    height: 100%;
    position: absolute;
    transition: all .3s;
    border-radius: 16px;
    background-color: #33ffa9;
  }
  
  @media (hover: hover) {
	  &:hover, &:hover > ${Link} {
	    color: #1d1b24 !important;
	    &:before { width: 100%; }
	  }
	}
`;