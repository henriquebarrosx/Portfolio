import React from 'react';
import SectionTitle from '../../components/SectionTitle'

import {
	Place,
	BlurText,
	Container,
	CompanyAvatar,
	BlurBackground,
	PlacesContainer,
	TimeLineContainer,
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
			
			<PlacesContainer>
				{timeLine.map(work => <Work key={work.place} work={work} />)}
			</PlacesContainer>
		</Container>
	)
}

function Work({ work }) {
	const { place, avatar, link, shadowColor } = work;
	
	return (
		<TimeLineContainer key={place} onClick={() => redirectTo(link)}>
			<BlurBackground>
				<BlurText>More</BlurText>
			</BlurBackground>
			
			<CompanyAvatar src={avatar} shadowColor={shadowColor} />
			<Place>{place}</Place>
		</TimeLineContainer>
	)
}

const redirectTo = (link) => window.location.href = link;
