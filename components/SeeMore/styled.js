import styled from 'styled-components';

export const Text = styled.a`
	width: 90vw;
  max-width: 500px;
  text-align: center;
  transition: all .3s;
  font-weight: bolder;
  text-decoration: none;
  letter-spacing: 0.05em;
  color: #7562e0 !important;
`;

export const Container = styled.div`
	z-index: 1;
	height: 70px;
  display: flex;
  font-size: 24px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border-radius: 6px;
  align-items: center;
  margin: 0 auto 30px;
  transition: all .3s;
  flex-direction: column;
  justify-content: center;

  &:not(:hover) > svg {
    transition: all .3s;
    color: #7562e0 !important;
  }

  &:hover > ${Text}, &:hover > svg {
    transition: all .3s;
    color: #4a37b0 !important;
  }
`;
