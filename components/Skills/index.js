import React from 'react';
import { techs } from './techs';
import { Container, WorkContainer, TechContainer, TechLabel } from './styled.js';
import SectionTitle from '../../components/SectionTitle';

function Skills() {	
	return (
		<Container id={'skills'}>
			<SectionTitle title={'Skills'} />
			<Tecnologies />
		</Container>
	)
}

function Tecnologies() {
	return (
		<WorkContainer>			
			{techs.map(({ label, icon: Icon, color}) => {
					return (
						<TechContainer key={label}>
							<Icon size={64} color={color} />
							<TechLabel>{label}</TechLabel>
						</TechContainer>
					)
				})}
		</WorkContainer>
	)
}

export default React.memo(Skills);