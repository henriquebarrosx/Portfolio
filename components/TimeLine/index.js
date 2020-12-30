import React from 'react';
import SectionTitle from '../../components/SectionTitle'

import {
	WorkLink,
	WorkImage,
	Container,
	LeftArrow,
	BlurEffect,
	RightArrow,
	WorkContainer,
	ImageContainer,
} from './styled.js';

const timeLine = [
	{
		place: 'Sua Formatura',
		time: '08.2019 - 04.2020',
		avatar: './suaformatura.png',
		office: 'Front-end web developer',
		link: 'https://suaformatura.com/',
	},
	{
		place: 'Labbits',
		avatar: './labbits.png',
		time: '07.2020 - 08.2020',
		office: 'Full stack web developer',
		link: 'https://www.labbitspace.com/',
	},
	{
		place: 'Softwrap',
		avatar: '/softwrap.jpeg',
		time: '08.2020 - Current Work',
		link: 'https://softwrap.com.br/',
		office: 'Full stack web developer',
	}
];

export default function TimeLine() {
	return (
		<Container id={'timeLine'}>
			<SectionTitle title={'Timeline'} />
			<Work />
		</Container>
	)
}

function Work({ link }) {
	return (
		<WorkContainer>
			<LeftArrow />
			
			<ImageContainer>
				<WorkImage src={'/sua_formatura_site.png'} />
				
				<BlurEffect>
					<WorkLink as='a' href={link} target='_blank'>Visitar</WorkLink>
				</BlurEffect>
			</ImageContainer>
			
			<RightArrow />
		</WorkContainer>
	)
}