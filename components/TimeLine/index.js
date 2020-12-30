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

let timeOut = null;

const timeLine = [
	{
		place: 'Sua Formatura',
		time: '08.2019 - 04.2020',
		office: 'Front-end web developer',
		link: 'https://suaformatura.com/',
		thumbnail: './sua_formatura_site.png',
	},
	{
		place: 'Labbits',
		time: '07.2020 - 08.2020',
		thumbnail: './labbits_site.png',
		office: 'Full stack web developer',
		link: 'https://www.labbitspace.com/',
	},
	{
		place: 'Softwrap',
		time: '08.2020 - Current Work',
		thumbnail: '/softwrap_site.png',
		link: 'https://softwrap.com.br/',
		office: 'Full stack web developer',
	}
];

export default function TimeLine() {
	const [currentWork, updateCurrentWork] = React.useState(0)
	const [slideBehavior, updateSlideBehavior] = React.useState({ stop: false })
	
	React.useEffect(() => {
		if(!slideBehavior.stop) {
			return autoSlideTransition(currentWork, updateCurrentWork)
		}
	});
	
	return (
		<Container id={'experiences'}>
			<SectionTitle title={'Experiences'} />
			
			<Work
				currentWork={currentWork}
				link={timeLine[currentWork].link}
				updateCurrentWork={updateCurrentWork}
				updateSlideBehavior={updateSlideBehavior}
				thumbnail={timeLine[currentWork].thumbnail}
			/>
		</Container>
	)
}

function Work(props) {
	const { link, updateSlideBehavior, thumbnail, currentWork, updateCurrentWork } = props;
	
	const restartSlide = () => {
		clearCurrentTimeout()
	}
	
	function stopSlide() {
		restartSlide()
		updateSlideBehavior({ stop: true })
	}
	
	function startSlide() {
		restartSlide()
		updateSlideBehavior({ stop: false })
	}
	
	return (
		<WorkContainer>
			<LeftArrow onClick={() => {
				updateCurrentWork(previousImage(currentWork, restartSlide))
			}} />
			
			<ImageContainer>
				<WorkImage src={thumbnail} />
				
				<BlurEffect
					onMouseOver={() => stopSlide()}
					onMouseLeave={() => startSlide()}
				>
					<WorkLink
						as='a'
						href={link}
						target='_blank'
						onMouseOver={() => stopSlide()}
					>
						Visitar
					</WorkLink>
				</BlurEffect>
			</ImageContainer>
			
			<RightArrow onClick={() => {
				updateCurrentWork(nextImage(currentWork, restartSlide))
			}} />
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