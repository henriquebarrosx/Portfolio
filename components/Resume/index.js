import React from 'react';
import { Container, Link } from './styled';

export default function Resume() {
	const resumePath = process.env.VERCEL_ENV_RESUME_LINK;
	
	return (
		<Container>
			<Link as={'a'} href={resumePath} target={'_blank'}>Download resume</Link>
		</Container>
	)
}