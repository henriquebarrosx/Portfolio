import React from 'react';
import SectionTitle from '../../components/SectionTitle'

import {
	Time,
	Place,
	Office,
	Container,
	CompanyAvatar,
	TextContainer,
	PlacesContainer,
	TimeLineContainer,
} from './style.js';

const timeLine = [
	{
		shadowColor: '#fdfafe',
		time: '08.2019 - 04.2020',
		avatar: './suaformatura.png',
		place: 'Sua Formatura - Maceió',
		office: 'Front-end web developer',
		link: 'https://suaformatura.com/',
	},
	{
		shadowColor: '#757575',
		avatar: './labbits.png',
		time: '07.2020 - 08.2020',
		place: 'Labbits - Maceió',
		office: 'Full stack web developer',
		link: 'https://www.labbitspace.com/',
	},
	{
		shadowColor: '#6bb3ed',
		avatar: '/softwrap.jpeg',
		place: 'Softwrap - São Paulo',
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
				{timeLine.map(work => <Work work={work} />)}
			</PlacesContainer>
		</Container>
	)
}

function Work({ work }) {
	const { place, avatar, office, link, time, shadowColor } = work;
	
	return (
		<TimeLineContainer key={place}>
			<CompanyAvatar src={avatar} shadowColor={shadowColor} />
			
			<TextContainer>
				<Place as={'a'} href={link} target={'_blank'}>{place}</Place>
				<Office>{office}</Office>
			</TextContainer>
			
			<Time>{time}</Time>
		</TimeLineContainer>
	)
}