import React from 'react';
import { Title, Container } from './styled';

function TitleComponent({ title }) {
	return (
		<Container>
			<Title>{title}</Title>
		</Container>
	)
}

export default React.memo(TitleComponent)