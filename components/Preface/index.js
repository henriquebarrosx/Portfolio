import React from 'react';
import Thubnail from '../../public/undraw_version_control_9bpv.svg';

import {
	FaGithub,
	FaLinkedin,
	FaInstagram,
	FaTwitterSquare,
	FaCloudDownloadAlt,
} from "react-icons/fa";

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
    const emailLinkAPI = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=henriquebarrosx@gmail.com";

		const _match = ()  => {
			window.open(emailLinkAPI, '_blank')
		}

		const socialData = [
			{
				label: "Currículo",
				icon: FaCloudDownloadAlt,
				color: '#47444f',
				link: "https://github.com/henriquebarrosx",
			},
			{
				label: "LinkedIn",
				icon: FaLinkedin,
				color: '#0077B5',
				link: "https://www.linkedin.com/in/henrique-barros-xavier-706a04178"
		},
		{
				label: "Twitter",
				icon: FaTwitterSquare,
				color: '#55acee',
				link: "https://twitter.com/Henry_bhx"
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
    ]

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
						<Thubnail />
					</RightSide>
				</Container>
			</React.Fragment>
	)
}
