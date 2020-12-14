import React from 'react';
import SectionTitle from '../../components/SectionTitle'

import {
	Time,
	Place,
	Office,
	Container,
	TextContainer,
	PlacesContainer,
	TimeLineContainer,
} from './styled.js';

export default function TimeLine() {
	
	const timeLine = [
		{
			time: '08.2019 - 04.2020',
			place: 'Sua Formatura - Maceió',
			office: 'Front-end web developer',
			link: 'https://suaformatura.com/',
		},
		{
			time: '07.2020 - 08.2020',
			place: 'Labbits - Maceió',
			office: 'Full stack web developer',
			link: 'https://www.labbitspace.com/',
		},
		{
			place: 'Softwrap - São Paulo',
			time: '08.2020 - Current Work',
			link: 'https://softwrap.com.br/',
			office: 'Full stack web developer',
		}
	];
	
	return (
		<Container id={'timeLine'}>
			<SectionTitle title={'Timeline'} />
			
			<PlacesContainer>
				{timeLine.map(({ place, office, link ,time }) => (
					<TimeLineContainer key={place}>
						<TextContainer>
							<Place link={'a'} href={link} target={'_blank'}>{place}</Place>
							<Office>{office}</Office>
						</TextContainer>
						
						<Time>{time}</Time>
					</TimeLineContainer>
				))}
			</PlacesContainer>
		</Container>
	)
}