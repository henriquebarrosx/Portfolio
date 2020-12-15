import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	margin: 84px 0;
`

export const PlacesContainer = styled.div`
	width: 100%;
	display: flex;
	margin: 84px 0;
	flex-direction: row;
	justify-content: center;
	
	@media(max-width: 640px) {
		width: 90%;
		margin: auto;
		overflow-x: scroll;
		scrollbar-width: thin;
		justify-content: normal;
	  scrollbar-color: #fdfafe;

	  &::-webkit-scrollbar {
	    width: 8px;
	  }

	  &::-webkit-scrollbar-track {
	    background: #555;
	  }

	  &::-webkit-scrollbar-thumb {
	    background-color: #808080;
	    border-radius: 15px;
	    border: 3px solid #f9f9f9;
	  }
	}
`;

export const TimeLineContainer = styled.div`
	display: flex;
	cursor: pointer;
	position: relative;
	margin: 32px 24px 16px;
	flex-direction: column;
	justify-content: center;
`;

export const CompanyAvatar = styled.img`
	height: 216px;
	border-radius: 6%;
	
	@media(max-width: 640px) {
		height: 156px;
	}
`

export const Place = styled.a`
	color: #fdfafe;
	margin: 18px 0;
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	text-decoration: none;
`;

export const BlurText = styled.span`
	color: #33ffa9;
	margin: 40% auto;
	font-weight: 700;
	padding: 10px 54px;
	transition: all 0.3s;
	text-transform: uppercase;
	
	&:hover {
		color: #1d1b24;
		border-radius: 6%;
		background-color: #33ffa9;
	}
`;

export const BlurBackground = styled.div`
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	opacity: 0;
	display: flex;
	position: absolute;
	align-items: flex-start;
	justify-content: center;
	background-color: #1d1b24;
	
	@media(hover:hover) {
		&:hover {
			opacity: 0.90;
		}
	}
`;

