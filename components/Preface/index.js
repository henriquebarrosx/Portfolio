import React from 'react';

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitterSquare
} from "react-icons/fa";

import {
		Name,
    AboutMe,
		MatchMe,
    LeftSide,
		LastName,
    Container,
    SocialItem,
    SocialLink,
    Presentation,
    SocialSection,
    SocialContainer,
} from './styled'

export default function Preface() {
    const emailLinkAPI = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=henriquebarrosx@gmail.com";
    const emailSubject = "Topa marcar uma conversa?";

		const _match = ()  => {
			window.open(emailLinkAPI, '_blank')
		}

		const socialData = [
			{
				label: "LinkedIn",
				icon: FaLinkedin,
				link: "https://www.linkedin.com/in/henrique-barros-xavier-706a04178"
		},
		{
				label: "Twitter",
				icon: FaTwitterSquare,
				link: "https://twitter.com/Henry_bhx"
		},
		{
				label: "Instagram",
				icon: FaInstagram,
				link: "https://www.instagram.com/bh_xavier"
		},
		{
				label: "Github",
				icon: FaGithub,
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
							technology
						</AboutMe>

						<SocialSection>
							<MatchMe type="button" onClick={_match}>
								Match me!
							</MatchMe>

							<SocialContainer>
								{socialData.map(({ label, link, icon: Icon }) => (
									<SocialItem key={label}>
										<SocialLink as={"a"} href={link} target={"_blank"}>
											<Icon size={42} />
										</SocialLink>
									</SocialItem>
								))}
							</SocialContainer>
						</SocialSection>
					</LeftSide>
				</Container>
			</React.Fragment>
	)
}
