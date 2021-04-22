import React from 'react';
import { Container, Text } from './styled';
import { FaSortDown } from "react-icons/fa";

function SeeMore() {
	const _navigateToRef = () => {
		window.location.href = "#skills";
	}

	return (
		<Container onClick={_navigateToRef}>
			<Text>See More</Text>
			<FaSortDown size={42} />
		</Container>
	)
}

export default React.memo(SeeMore)