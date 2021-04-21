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

export default function TimeLine() {
	const [currentWork, updateCurrentWork] = React.useState({
		place: 'Sua Formatura',
		time: '08.2019 - 04.2020',
		office: 'Front-end web developer',
		link: 'https://suaformatura.com/',
		thumbnail: './sua_formatura_site.png',
	})
	
	return (
		<Container id={'experiences'}>
			<SectionTitle title={'Experiences'} />
			<Work currentWork={currentWork} />
		</Container>
	)
}

function Work({ currentWork }) {	
	return (
		<WorkContainer>			
			<ImageContainer>
				<WorkImage src={currentWork.thumbnail} />
				
				<BlurEffect>
					<WorkLink as='a' href={currentWork.link} target='_blank'>
						Visitar
					</WorkLink>
				</BlurEffect>
			</ImageContainer>
		</WorkContainer>
	)
}

function autoSlideTransition(currentWork, changeCurrentWork) {
	timeOut = setTimeout(() => changeCurrentWork(getIndex(currentWork)), 10000)
}

function clearCurrentTimeout() {
	clearInterval(timeOut)
}

function getIndex(currentWork) {
	return currentWork < 2 ? currentWork += 1 : 0
}

function nextImage(currentWork, callback) {
	callback()
	return currentWork === 2 ? 0 : currentWork + 1
}

function previousImage(currentWork, callback) {
	callback()
	return currentWork === 0 ? 2 : currentWork - 1
}