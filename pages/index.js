import React from 'react';
import Head from 'next/head'
import styled from 'styled-components';
import NavBar from '../components/NavBar'
import Preface from '../components/Preface'

export default function Home() {
   const Sections = styled.div`
    width: 100%;
    display: flex;
    padding-top: 130px;
    position: relative;
    flex-direction: column;
   `

  return (
    <React.Fragment>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sections>
          <NavBar />
          <Preface />
      </Sections>
    </React.Fragment>
  )
}
