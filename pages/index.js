import React from 'react';
import Head from 'next/head'
import dynamic from 'next/dynamic.js';
import styled from 'styled-components';

// import NavBar from '../components/NavBar';
// import Resume from '../components/Resume';
// import Preface from '../components/Preface';
// import TimeLine from '../components/TimeLine';

const NavBar = dynamic(() => import('../components/NavBar'));
const Resume = dynamic(() => import('../components/Resume'));
const Preface = dynamic(() => import('../components/Preface'));
const TimeLine = dynamic(() => import('../components/TimeLine'));

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
        <link rel="icon" href="/logo.svg" />
      </Head>
      
      <Sections id={'home'}>
        <NavBar isScreenTop={screenPosition.isScreenTop} />
        <Preface />
        <Resume />
        <TimeLine />
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