import React from 'react';
import { Container, Link } from './styled';

export default function Resume() {
	const resumePath = 'https://drive.google.com/file/d/1ubZkcONptXkNy2vyWZIzAeh9jjKn8dXM/view?usp=sharing';
	
	return (
		<Container>
			<Link as={'a'} href={resumePath} target={'_blank'}>Download resume</Link>
		</Container>
	)
}