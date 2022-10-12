import React from 'react';

import {
	FaGithub,
	FaLinkedin,
	FaInstagram,
	FaTwitterSquare,
	FaCloudDownloadAlt,
} from "react-icons/fa";

import { SiGmail } from 'react-icons/si'

import {
	Name,
	AboutMe,
	MatchMe,
	LeftSide,
	LastName,
	Container,
	RightSide,
	SocialItem,
	SocialLink,
	Presentation,
	SocialSection,
	SocialContainer,
} from './styled'

export default function Preface() {
	const curriculumLink = "https://drive.google.com/file/d/190xYi45X3AQTzrnaCj3534sAYfoDMXDQ/view?usp=sharing";

	const _match = () => {
		window.open(curriculumLink, '_blank')
	}

	const socialData = [
		{
			label: "Email",
			icon: SiGmail,
			color: '#47444f',
			link: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=henriquebarrosx@gmail.com",
		},
		{
			label: "LinkedIn",
			icon: FaLinkedin,
			color: '#0077B5',
			link: "https://www.linkedin.com/in/henriquebarrosx/"
		},
		{
			label: "Twitter",
			icon: FaTwitterSquare,
			color: '#55acee',
			link: "https://twitter.com/henriquebx_"
		},
		{
			label: "Instagram",
			icon: FaInstagram,
			color: ' #e4405f',
			link: "https://www.instagram.com/bh_xavier"
		},
		{
			label: "Github",
			icon: FaGithub,
			color: '#47444f',
			link: "https://github.com/henriquebarrosx",
		},
	];

	const thumbnail = '/undraw_version_control_9bpv 1.png';

	return (
		<React.Fragment>
			<Container>
				<LeftSide>
					<Presentation>
						<Name>Henrique</Name>
						<LastName>Barros</LastName>
					</Presentation>

					<AboutMe>
						Programmer passionate about obtaining new experiences and with a
						great desire to simplify and improve people's daily lives through
						technology.
					</AboutMe>

					<SocialSection>
						<MatchMe type="button" onClick={_match}>
							Match me!
						</MatchMe>

						<SocialContainer>
							{socialData.map(({ label, link, color, icon: Icon }) => (
								<SocialItem key={label}>
									<SocialLink as={"a"} href={link} target={"_blank"} title={label}>
										<Icon size={42} color={color} />
									</SocialLink>
								</SocialItem>
							))}
						</SocialContainer>
					</SocialSection>
				</LeftSide>

				<RightSide>
					<img src={thumbnail} alt={'experiences'} />
				</RightSide>
			</Container>
		</React.Fragment>
	)
}
