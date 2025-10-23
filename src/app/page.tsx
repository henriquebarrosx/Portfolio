import Image from 'next/image';
import { FC, ReactNode } from "react";
import { SiGmail } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

import "../../styles/globals.css";

interface SocialIconProps {
    children: ReactNode;
    link: string;
    label: string;
}

interface SkillBarProps {
    label: string;
    pct: number;
}

const SocialIcon: FC<SocialIconProps> = ({ children, link, label }) => (
    <a href={link} target="_blank" title={label} className="w-6 h-6 inline-flex items-center justify-center text-white/90 cursor-pointer">
        {children}
    </a>
);

const SkillBar: FC<SkillBarProps> = ({ label, pct }) => (
    <div className="mb-4">
        <div className="text-sm mb-1">{label}</div>

        <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden">
            <div
                className="h-full rounded-full"
                style={{ width: `${pct}%`, background: "#f78b2d" }}
            />
        </div>
    </div>
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

    const experiences = [
        {
            cargo: "Desenvolvedor Frontend Sênior",
            empresa: "Cast Group (Cliente: Banco do Brasil)",
            periodo: "Novembro 2023 - Atual",
            descricao: "Gestão de backlog e atividades com Genti e BusinessMap; aplicação de práticas ágeis com Kanban e Scrum; desenvolvimento com React (fase inicial) e Angular (fase atual); testes unitários e de integração com Jest + Testing Library e Karma + Jasmine; conteinerização com Docker/Docker Compose e orquestração com Kubernetes/OpenShift; automação de pipelines CI/CD com Jenkins; versionamento com GitLab; monitoramento de qualidade com SonarQube; configuração de Nginx."
        },
        {
            cargo: "Desenvolvedor Frontend Sênior",
            empresa: "Assurance IT (Clientes: IBM e MRS)",
            periodo: "Maio 2022 - Julho 2023",
            descricao: "Gestão de backlog e atividades com Jira; aplicação de práticas ágeis com Kanban e Scrum; desenvolvimento com React; testes unitários e de integração com Jest + Testing Library; conteinerização com Docker/Docker Compose; automação de pipelines CI/CD com Jenkins; versionamento com GitLab; monitoramento de qualidade com SonarQube."
        },
        {
            cargo: "Desenvolvedor Full Stack Pleno",
            empresa: "Intensivet",
            periodo: "Janeiro 2021 - Maio 2022",
            descricao: "Desenvolvimento de aplicação 24h para veterinários com Ruby on Rails e Vue.js; desenvolvimento de aplicativos de chat em tempo real com React Native; desenvolvimento guiado por testes com Jest; gestão de projetos com Scrum e Kanban; versionamento com Git; conteinerização com Docker/Docker Compose."
        },
        {
            cargo: "Desenvolvedor Full Stack Pleno",
            empresa: "SoftWrap",
            periodo: "Agosto 2020 - Janeiro 2021",
            descricao: "Desenvolvimento de aplicações com TypeScript (React); integração de APIs do Facebook e Instagram; desenvolvimento e sustentação de sistemas em Angular.js e Ruby on Rails; conteinerização com Docker/Docker Compose; versionamento com Git."
        },
        {
            cargo: "Desenvolvedor Frontend Junior",
            empresa: "Sua Formatura",
            periodo: "Setembro 2019 - Abril 2020",
            descricao: "Gestão de fluxo e práticas ágeis com Scrum; desenvolvimento de aplicações de gestão de formaturas com JavaScript (React e Redux); conteinerização com Docker/Docker Compose; versionamento com Git; replicação de protótipos via Figma."
        }
    ];

    const skills = [
        {
            categoria: "Frontend Development",
            tecnologias: ["JavaScript", "TypeScript", "Angular", "React.js"]
        },
        {
            categoria: "Backend Development",
            tecnologias: ["Spring Boot", "Node.js", "Ruby on Rails"]
        },
        {
            categoria: "Testes",
            tecnologias: ["Jest", "Karma", "JUnit", "Mockito"]
        },
        {
            categoria: "DevOps / Infra",
            tecnologias: ["Github Actions", "Docker", "Redis", "Jenkins", "Nginx"]
        },
        {
            categoria: "Banco de Dados",
            tecnologias: ["PostgreSQL", "SQLite", "H2"]
        },
        {
            categoria: "Outros",
            tecnologias: ["RabbitMQ", "CI/CD", "Scrum", "Kanban"]
        }
    ];

    return (
        <div className="font-sans">
            {/* HERO */}
            <section id="hero" className="relative w-full min-h-[95vh] flex items-center justify-center bg-black">
                <img
                    src="https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1800&auto=format&fit=crop"
                    alt="hero-bg"
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 blur-2xl"
                />

                <div className="relative z-10 text-center px-6">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
                        Henrique Barros
                    </h1>

                    <div className="mt-6 flex items-center justify-center gap-4 text-white">
                        {socialData.map(({ label, link, color, icon: Icon }) => (
                            <SocialIcon key={label} link={link} label={label}>
                                <Icon size={42} />
                            </SocialIcon>
                        ))}
                    </div>

                    {/* Botão para baixar o currículo */}
                    <div className="flex justify-center mt-8">
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
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                />
                            </svg>
                        </a>
                    </div>

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
            <section id="about" className="bg-[#222222] text-white py-32">
                <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center md:items-start">
                    <div className="relative w-52 h-52 flex justify-center md:justify-start">
                        <Image
                            src="/foto_perfil.jpg"
                            alt="avatar"
                            fill
                            className="rounded-md object-cover border-2 border-white/10"
                        />
                    </div>

                    <div className="col-span-10">
                        <h2 className="text-2xl font-bold mb-3">Sobre</h2>

                        <div className="flex flex-col gap-4 text-base text-white/80 leading-relaxed max-w-3xl">
                            <p>
                                Desenvolvedor de Software com mais de 5 anos de experiência, graduado pelo Centro Universitário Mario Pontes Jucá - UMJ (2022). Tenho atuado no desenvolvimento de aplicações web robustas, com foco em escalabilidade, qualidade e confiabilidade.
                            </p>

                            <p>
                                Minha experiência inclui o uso de Angular e React no frontend, além de Java (Spring) e TypeScript (Node.js) no backend. Trabalhei com desenvolvimento guiado por testes (Jest, Karma, JUnit e Mockito) e integração de microserviços, incluindo mensageria com RabbitMQ. Também possuo vivência em orquestração de containers com Docker e implementação de pipelines de CI/CD, sempre buscando otimizar processos e entregar valor de forma contínua.
                            </p>

                            <p>
                                Motivado por desafios, busco constantemente aprimorar minhas habilidades e colaborar para que times de desenvolvimento alcancem resultados de alto impacto.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section id="work" className="max-w-5xl mx-auto px-6 flex gap-12 my-24 items-start">
                <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-4">
                    <div className="col-span-1 flex justify-center md:justify-start">
                        <div className="relative h-max">
                            <h2 className="text-xl font-bold uppercase text-neutral-800">Experiência</h2>
                            <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400"></span>
                        </div>
                    </div>

                    <div className="col-span-1 flex flex-col md:col-span-3">
                        {experiences.map((exp, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col pb-8 last:pb-0 text-justify md:text-left"
                            >
                                <div className="flex flex-col pb-4">
                                    <h2 className="text-xl font-bold text-left">{exp.cargo}</h2>

                                    <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-x-2 md:justify-start">
                                        <span className="flex-1 text-sm font-medium italic sm:flex-none">
                                            {exp.empresa}
                                        </span>

                                        <span className="hidden md:block">
                                            •
                                        </span>

                                        <span className="flex-1 text-sm sm:flex-none">
                                            {exp.periodo}
                                        </span>
                                    </div>
                                </div>
                                <p>{exp.descricao}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SKILLS */}
            <section className="bg-[#f5f5f6] py-24">
                <div className="max-w-5xl mx-auto px-6">
                    <h3 className="text-lg font-bold mb-8">SKILLS</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {skills.map((skill, idx) => (
                            <div key={idx} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
                                <h5 className="text-center mb-4 font-semibold text-lg">{skill.categoria}</h5>
                                <div className="flex flex-wrap gap-2 justify-center">
                                    {skill.tecnologias.map((tech, i) => (
                                        <span key={i} className="bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOOLTER */}
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

                <div className="flex flex-col items-center gap-y-4 py-20">
                    {/* Social links */}
                    <div className="flex gap-x-4 text-neutral-500">
                        {socialData.map(({ label, link, icon: Icon }) => (
                            <SocialIcon key={label} link={link} label={label}>
                                <Icon size={42} className="text-neutral-500" />
                            </SocialIcon>
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
