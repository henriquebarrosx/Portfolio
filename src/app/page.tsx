"use client"

import Image from 'next/image';
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { SiGmail } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import "../../styles/globals.css";

interface SocialIconProps {
    children: ReactNode;
    link: string;
    label: string;
}


const SocialIcon: FC<SocialIconProps> = ({ children, link, label }) => (
    <a
        href={link}
        target="_blank"
        title={label}
        className="w-6 h-6 inline-flex items-center justify-center text-white/90 cursor-pointer"
    >
        {children}
    </a>
);


const Portfolio: FC = () => {
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
            label: "Github",
            icon: FaGithub,
            color: '#47444f',
            link: "https://github.com/henriquebarrosx",
        },
    ];

    const experiences = [
        {
            cargo: "Desenvolvedor Frontend Sênior",
            empresa: "Cast Informática S.A. · São Paulo, SP",
            periodo: "09/2023 - atualmente",
            descricao: "Atuei no desenvolvimento de aplicações web com TypeScript, Angular (v14, v16 e v18) + RxJS e React.js (v18), implementando testes unitários e de integração com Karma, Jasmine, Jest e Testing Library para garantir qualidade e prevenção de regressões. Trabalhei com bibliotecas de componentes e Tailwind CSS para padronização visual e consistência de design system entre equipes, além de monitorar pipelines CI/CD com Jenkins e GitHub Actions nos ambientes de desenvolvimento, homologação e produção. Mantive a qualidade do código via SonarQube, identificando bugs, code smells e duplicidades, e conduzi análise estática de segurança com Checkmarx. Configurei Nginx como proxy reverso para roteamento de requisições e gerenciei o backlog com BusinessMap, seguindo rituais de Scrum e Kanban. Atuei ativamente em code reviews via GitLab e GitHub, contribuindo para a evolução técnica do time."
        },
        {
            cargo: "Desenvolvedor Frontend Sênior",
            empresa: "Assurance Consultoria em Tecnologia da Informacao LTDA · São Paulo, SP",
            periodo: "05/2022 - 07/2023",
            descricao: "Atuei no desenvolvimento de funcionalidades e melhorias em aplicações web com JavaScript, TypeScript e React.js, implementando testes unitários e de integração com Jest e Testing Library para garantir qualidade e prevenção de regressões. Compus interfaces com Material UI e Tailwind CSS, assegurando padronização visual e consistência de design system. Monitorei pipelines CI/CD com Jenkins nos ambientes de desenvolvimento, homologação e produção, e mantive a qualidade do código via SonarQube, identificando code smells, duplicidades e vulnerabilidades. Gerenciei o backlog com Jira, seguindo rituais de Scrum e Kanban, e conduzi code reviews via GitLab, contribuindo para a evolução técnica do time."
        },
        {
            cargo: "Desenvolvedor Full Stack Pleno",
            empresa: "Intensivet Atividades Veterinarias LTDA · Brasília, DF",
            periodo: "01/2021 - 05/2022",
            descricao: "Atuei no desenvolvimento de funcionalidades e correção de bugs com JavaScript, TypeScript, Angular, React.js, Next.js, Express e Node.js e Ruby on Rails, com interfaces compostas em Material UI para padronização visual e consistência de design system. Gerenciei o backlog com Trello, seguindo rituais de Scrum e Kanban, e conduzi code reviews via GitHub, contribuindo para a evolução técnica do time."
        },
        {
            cargo: "Desenvolvedor Frontend Júnior",
            empresa: "Sua Formatura Pagamentos LTDA · Maceió, AL",
            periodo: "09/2019 - 04/2020",
            descricao: "Atuei no desenvolvimento de funcionalidades e correção de bugs com JavaScript, TypeScript e React.js, utilizando Redux para gerenciamento de estado global, e compus interfaces com Material UI assegurando padronização visual e consistência de design system. Gerenciei o backlog com Jira, seguindo rituais de Scrum e Kanban, e conduzi code reviews via GitHub, contribuindo para a evolução técnica do time."
        }
    ];

    const skills = [
        {
            categoria: "Frontend Development",
            tecnologias: ["JavaScript", "TypeScript", "Angular", "React.js"]
        },
        {
            categoria: "Backend Development",
            tecnologias: ["Java - Spring Boot", "Node.js"]
        },
        {
            categoria: "Testes Automatizados",
            tecnologias: ["Jest", "Karma", "JUnit", "Mockito"]
        },
        {
            categoria: "DevOps / Infra",
            tecnologias: ["Github Actions", "Docker", "Jenkins", "Nginx", "SonarQube"]
        },
        {
            categoria: "Banco de Dados",
            tecnologias: ["PostgreSQL", "SQLite", "H2"]
        },
        {
            categoria: "Metodologias Ágeis",
            tecnologias: ["Scrum", "Kanban"]
        },
        {
            categoria: "Outros",
            tecnologias: ["Mensageria - RabbitMQ", "Redis"]
        },
    ];

    const container = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } }
    };

    return (
        <div className="font-sans">
            {/* HERO */}
            <section
                id="hero"
                className="relative w-full min-h-[95vh] flex items-center justify-center bg-black"
            >
                <img
                    src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1800&auto=format&fit=crop"
                    alt="hero-bg"
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 blur-2xl"
                />

                <div className="relative z-10 text-center px-6">
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                    >
                        Henrique Barros
                    </motion.h1>

                    <span className="text-white typing text-base md:text-2xl font-mono inline-block">
                        Desenvolvedor de Software
                    </span>

                    <motion.div
                        className="mt-4 md:mt-6 flex items-center justify-center gap-4 text-white"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        {socialData.map(({ label, link, icon: Icon }) => (
                            <motion.div key={label} variants={item}>
                                <SocialIcon link={link} label={label}>
                                    <Icon size={42} />
                                </SocialIcon>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="flex justify-center mt-4 md:mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        <a
                            href="https://docs.google.com/document/d/1lsax1PEOqPRfcTlB1N6lXkWzBDgkEAcAoEWUxEZVtMw/edit?usp=sharing"
                            target="_blank"
                            className="flex items-center gap-2 rounded-full border-2 border-orange-500 bg-transparent px-6 py-3 text-sm sm:text-base font-medium text-white transition-all duration-300 hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                        >
                            Baixar Currículo
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5 sm:h-6 sm:w-6"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </motion.div>
                </div>

                {/* Scroll to top button */}
                <div className="absolute inset-x-0 bottom-4 flex justify-center sm:bottom-6">
                    <a
                        href="#about"
                        className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-6 w-6 bg-transparent sm:h-8 sm:w-8"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </div>
            </section>

            {/* ABOUT */}
            <motion.section
                id="about"
                className="bg-[#222222] text-white py-32"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                variants={container}
            >
                <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center md:items-start">
                    <motion.div className="relative w-52 h-52 flex justify-center md:justify-start" variants={item}>
                        <Image
                            src="/foto_perfil.jpg"
                            alt="avatar"
                            fill
                            className="rounded-md object-cover border-2 border-white/10"
                        />
                    </motion.div>
                    <motion.div className="col-span-10 flex flex-col gap-4 text-base text-white/80 leading-relaxed max-w-3xl" variants={item}>
                        <h2 className="text-2xl font-bold mb-3">Sobre</h2>
                        
                        <p>
                            Desenvolvedor Full Stack Sênior com mais de 6 anos construindo aplicações web em domínios como sistemas bancários, telemedicina veterinária e logística ferroviária. Especialista em Angular (v14, v16 e v18) e React (v17 e v18) no frontend, com background sólido em Java (Spring Boot) e Node.js no backend, cobrindo o ciclo completo de desenvolvimento: arquitetura de componentes, testes automatizados (Jest, Testing Library, Karma, Jasmine, JUnit, Mockito), pipelines CI/CD (Jenkins, GitHub Actions) e qualidade de código (SonarQube, Checkmarx).
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* EDUCATION */}
            <motion.section
                id="education"
                className="max-w-5xl mx-auto px-6 flex gap-12 my-24 items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={container}
            >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 py-8 first:pt-0 last:pb-0 w-full">
                    <motion.div className="flex justify-center md:justify-start" variants={item}>
                        <div className="relative h-max">
                            <h2 className="text-xl font-bold uppercase text-neutral-800">Formação</h2>
                            <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400"></span>
                        </div>
                    </motion.div>

                    <motion.div className="col-span-1 md:col-span-3 flex flex-col" variants={container}>
                        <motion.div
                            className="flex flex-col pb-8 last:pb-0 text-justify md:text-left"
                            variants={item}
                        >
                            <div className="flex flex-col pb-4">
                                <h2 className="text-xl font-bold text-left">Análise e Desenvolvimento de Sistemas</h2>
                                <span className="flex-1 text-sm font-medium italic sm:flex-none">Centro Universitário Mario Pontes Jucá - UMJ</span>
                                <span className="flex-1 text-sm sm:flex-none">Março 2017 - Dezembro 2022</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            <section className="max-w-5xl mx-auto px-6">
                <hr />
            </section>

            {/* WORK */}
            <motion.section
                id="work"
                className="max-w-5xl mx-auto px-6 flex gap-12 my-24 items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={container}
            >
                <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-4">
                    <motion.div className="col-span-1 flex justify-center md:justify-start" variants={item}>
                        <div className="relative h-max">
                            <h2 className="text-xl font-bold uppercase text-neutral-800">Experiência</h2>
                            <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400"></span>
                        </div>
                    </motion.div>

                    <motion.div className="col-span-1 flex flex-col md:col-span-3" variants={container}>
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                className="flex flex-col pb-8 last:pb-0 text-justify md:text-left"
                                variants={item}
                            >
                                <div className="flex flex-col pb-4">
                                    <h2 className="text-xl font-bold text-left">{exp.cargo}</h2>
                                    <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-x-2 md:justify-start">
                                        <span className="flex-1 text-sm font-medium italic sm:flex-none">{exp.empresa}</span>
                                        <span className="hidden md:block">•</span>
                                        <span className="flex-1 text-sm sm:flex-none">{exp.periodo}</span>
                                    </div>
                                </div>
                                <p>{exp.descricao}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* SKILLS */}
            <motion.section
                className="bg-[#f5f5f6] py-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                variants={container}
            >
                <div className="max-w-5xl mx-auto px-6">
                    <h3 className="text-lg font-bold mb-8">Competências</h3>

                    <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" variants={item}>
                        {skills.map((skill, idx) => (
                            <div key={idx} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition" >
                                <h5 className="text-center mb-4 font-semibold text-lg">
                                    {skill.categoria}
                                </h5>

                                <div className="flex flex-wrap gap-2 justify-center">
                                    {skill.tecnologias.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* FOOTER */}
            <section className="relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pt-14 sm:pb-8">
                {/* Scroll to top button */}
                <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
                    <a
                        href="#hero"
                        className="rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-6 w-6 bg-transparent sm:h-8 sm:w-8"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                    </a>
                </div>

                <div className="flex flex-col items-center gap-y-4 py-20" >
                    <div className="flex gap-x-4 text-neutral-500">
                        {socialData.map(({ label, link, icon: Icon }) => (
                            <div key={label}>
                                <SocialIcon link={link} label={label}>
                                    <Icon size={42} className="text-neutral-500" />
                                </SocialIcon>
                            </div>
                        ))}
                    </div>

                    <span className="text-sm text-neutral-700">
                        Henrique Barros
                    </span>
                </div>
            </section>

        </div>
    );
};

export default Portfolio;
