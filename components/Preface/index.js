import React from 'react';

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitterSquare
} from "react-icons/fa";

import {
    Photo,
    AboutMe,
    Container,
    SocialItem,
    SocialLink,
    Presentation,
    SocialSection,
    SocialContainer,
    PresentationTitle,
    PresentationSubtitle,
    PresentationContainer,
} from './styled'

export default function Preface() {
    const emailLinkAPI = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=henriquebarrosx@gmail.com";
    const emailSubject = "Topa marcar uma conversa?";
    
    const socialData = [
        // {
        //     label: "Gmail",
        //     link: `${emailLinkAPI}&su=${emailSubject}`
        // },
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
            link: "https://github.com/henryxavierb",
        },
    ]

    return (
        <React.Fragment>
            <Container>
                <Photo src={"/photo.jpg"} alt={"profile"} draggable={false} />

                <PresentationContainer>
                    <Presentation>
                        <PresentationTitle>I'm Henrique</PresentationTitle>
                        <PresentationSubtitle>A Web Developer</PresentationSubtitle>
                    </Presentation>

                    <AboutMe>
                        "Programmer with a strong desire to stand out through technology,
                        investing time and applying all possible knowledge. This is what I look
                        for when I'm participating in a project or software maintenance, constantly
                        looking for improvements in the processes and techniques applied in a way that
                        simplifies and improve people's daily lives."
                    </AboutMe>

                    <SocialSection>
                        <SocialContainer>
                            {socialData.map(({ label, link, icon: Icon }) => (
                                <SocialItem key={label}>
                                    <SocialLink as={"a"} href={link} target={"_blank"}>
                                        <Icon size={42} color={'#fdfafe'} />
                                    </SocialLink>
                                </SocialItem>
                            ))}
                        </SocialContainer>
                    </SocialSection>
                </PresentationContainer>
            </Container>
        </React.Fragment>
    )
}