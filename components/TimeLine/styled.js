import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	margin: 55px 0;
`

export const PlacesContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 60px 0;
  align-items: flex-end;
	flex-direction: column;
	
	@media(max-width: 1150px) {
		align-items: center;
	}
`;

export const TimeLineContainer = styled.div`
	width: 60%;
	margin: 20px;
	font-size: 32px;
	max-width: 1050px;
	
	@media(max-width: 1500px) {
		width: 65%;
		font-size: 28px;
		max-width: none;
	}
	
	@media(max-width: 1150px) {
		width: 90%;
		font-size: 28px;
	}
	
	@media(max-width: 1150px) {
		width: 90%;
		font-size: 28px;
	}
	
	@media(max-width: 800px) {
		font-size: 24px;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	margin: 16px 0;
	justify-content: space-between;
	
	@media(max-width: 800px) {
		flex-direction: column;
	}
`;

export const Place = styled.a`
	color: #fdfafe;
	text-decoration: none;
	
	@media(hover: hover) {
		&:hover {
			text-decoration: underline;
		}
	}
`;

export const Office = styled.span`
	color: #33ffa9;
	font-weight: bold;
	
	@media(max-width: 800px) {
		margin: 10px 0;
	}
`;

export const Time = styled.span`
	color: #555555;
	font-size: 24px;
	
	@media(max-width: 800px) {
		font-size: 18px;
	}
`;