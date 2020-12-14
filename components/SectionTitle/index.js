import React from 'react';
import { Title, Container } from './styled';

export default function Index({ title }) {
	return (
		<Container>
			<Title>{title}</Title>
		</Container>
	)
}