import React from 'react';
import { Container, Link } from './styled';

export default function Resume() {
	const resumePath = process.env.NEXT_PUBLIC_RESUME_LINK;
	
	return (
		<Container>
			<Link as={'a'} href={resumePath} target={'_blank'}>Download resume</Link>
		</Container>
	)
}