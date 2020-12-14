import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	margin: 55px 0;
`

export const PlacesContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 60px 0;
  align-items: center;
	flex-direction: row;
	justify-content: center;
	
	@media(max-width: 1040px) {
		display: flex;
		flex-direction: column;
	}
`;

export const TimeLineContainer = styled.div`
	width: 475px;
	margin: 20px;
	height: 280px;
	display: flex;
	cursor: pointer;
	font-size: 32px;
	padding: 0 10px;
	max-width: 1050px;
	text-align: center;
	border-radius: 30px;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	background-color: #2a2830;
	box-shadow: inset 0 0 0, 0 0 0.3em #33ffa9;

	
	@media(max-width: 1500px) {
		font-size: 28px;
	}
	
	@media(max-width: 1040px) {
		width: 425px;
		height: 260px;
	}
	
	@media(max-width: 740px) {
		width: 90%;
		height: 230px;
		max-width: 425px;
	}
`;

export const CompanyAvatar = styled.img`
	border: none;
	width: 100px;
	height: 100px;
	border-radius: 100%;
	background-color: #fdfafe;
	box-shadow: ${({ shadowColor }) => `inset 0 0 0, 0 0 0.3em ${shadowColor}`};
	
	@media(max-width: 740px) {
		width: 70px;
		height: 70px;
	}
`

export const TextContainer = styled.div`
	display: flex;
	margin: 16px 0;
	flex-direction: column;
	justify-content: space-between;
	
	@media(max-width: 800px) {
		flex-direction: column;
	}
`;

export const Place = styled.a`
	color: #fdfafe;
	font-size: 1em;
	font-weight: bold;
	text-decoration: none;
	
	@media(hover: hover) {
		&:hover {
			text-decoration: underline;
		}
	}
	
	@media(max-width: 740px) {
		font-size: 0.9em;
	}
`;

export const Office = styled.span`
	color: #33ffa9;
	margin-top: 12px;
	font-size: 0.5em;
	text-transform: uppercase;
`;

export const Time = styled.span`
	color: #555555;
	font-size: 1rem;
	
	@media(max-width: 800px) {
		font-size: 18px;
	}
`;