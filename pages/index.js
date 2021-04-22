import React from 'react';
import Head from 'next/head'
import styled from 'styled-components';

import NavBar from '../components/NavBar';
import Skills from '../components/Skills';
import SeeMore from '../components/SeeMore';
import Preface from '../components/Preface';
import Experiences from '../components/Experiences';

const Sections = styled.div`
    width: 100%;
    display: flex;
    margin: 0 auto;
    max-width: 1600px;
    overflow-x: hidden;
    position: relative;
    flex-direction: column;
   `;

export default function Home() {
  const [ screenPosition, updateScreenCurrentPosition] = React.useState({ isScreenTop: true });
  React.useEffect(() => captureScreenScroll(updateScreenCurrentPosition), []);
  React.useEffect(() => removeScreenListener(), [screenPosition]);
  
  return (
    <React.Fragment>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      
      <NavBar isScreenTop={screenPosition.isScreenTop} />
      
      <Sections id={'home'}>
        <Preface />
        <SeeMore />
        <Skills />
        <Experiences />
      </Sections>
    </React.Fragment>
  )
}

export function captureScreenScroll(updateScreenCurrentPosition, position = 1) {
  window.addEventListener('scroll', () => {
    const SCREEN_TOP_REFERENCE = position;
    const isScreenTop = window.scrollY <= SCREEN_TOP_REFERENCE;
    
    updateScreenCurrentPosition({ isScreenTop })
  })
}

export function removeScreenListener() {
  window.removeEventListener('scroll', () => {});
}