import React, {memo} from 'react';
import Title from '../../components/SectionTitle';

import {
  Root, 
  TextContainer,
  LeftSideStyle, 
  RightSideStyle, 
  CardImgContainer,
  CardImgDescription
} from './styled';

function Experiences() {
  return (
    <React.Fragment>
      <div id={'experiences'} />
      <Title title={'Experiences'} />

      <Root>
        <LeftSide />
        <RightSide />
      </Root>
    </React.Fragment>
  )
}

function LeftSide() {
  return (
    <LeftSideStyle>
      <TextContainer>
        <h1>1.5+</h1>
        <div>
          <h2>Years</h2>
          <h2>Experiences</h2>
          <h2>Working</h2>
        </div>
      </TextContainer>
    </LeftSideStyle>
  )
}

function RightSide() {
  const images = [
    {
      thumbnail: '/undraw_Working_oh83 1.png',
      description: 'Web Developer',
    },
    {
      thumbnail: '/undraw_Mobile_apps_re_3wjf 1.png',
      description: 'Mobile Developer',
    },
    {
      thumbnail: '/undraw_server_cluster_jwwq 1.png',
      description: 'Backend Developer',
    },
    {
      thumbnail: '/undraw_design_components_9vy6 1.png',
      description: 'UX Design',
    },
  ];

  return (
    <RightSideStyle>
      {images.map(({thumbnail, description}) => {
        return (
          <CardImgContainer key={description}>
            <CardImgDescription>{description}</CardImgDescription>
            <img src={thumbnail} alt={'experiences'} />
          </CardImgContainer>
        )
      })}
    </RightSideStyle>
  )
}

export default memo(Experiences);