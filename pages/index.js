import React from 'react';
import Head from 'next/head'
import styled from 'styled-components';
import NavBar from '../components/NavBar'
import Preface from '../components/Preface'
import Resume from '../components/Resume';

const Sections = styled.div`
    width: 100%;
    display: flex;
    padding-top: 130px;
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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Sections id={'home'}>
        <NavBar isScreenTop={screenPosition.isScreenTop} />
        <Preface />
        <Resume />
      </Sections>
    </React.Fragment>
  )
}

function captureScreenScroll(updateScreenCurrentPosition) {
  window.addEventListener('scroll', () => {
    const SCREEN_TOP_REFERENCE = 1;
    const isScreenTop = window.scrollY < SCREEN_TOP_REFERENCE;
    
    updateScreenCurrentPosition({ isScreenTop })
  })
}

function removeScreenListener() {
  window.removeEventListener('scroll', () => {});
}