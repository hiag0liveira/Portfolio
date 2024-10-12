import React from "react";
import { MdWork } from "react-icons/md";
import "../styles/components/experienceContainer.sass";

const ExperienceContainer = () => {
  const experienceData = [
    {
      title: "Desenvolvedor Back-end",
      company: "Polo de Inovação Campos dos Goytacazes (PICG)",
      date: "Abril/2024 - Atualmente",
      tasks:
        "Participo do projeto EMBRAPII, (Evolução de Ferramental de Software para Cálculo de Score de Risco e Avaliação de Eficiência Energética na Condução de Veículos Automotores), no Polo de Inovação. Como back-end, estou desenvolvendo uma API RESTful utilizando NestJS, capaz de integrar com APIs externas e calcular o score de risco dos condutores. Além disso, utilizo Flutter para criar interfaces mobile, ampliando o acesso e usabilidade das soluções desenvolvidas.",
    },
    {
      title: "Operador técnico N1 JR 1, Desenvolvedor JR",
      company: "MINSAIT BRASIL - Indra Company",
      date: "Dezembro/2022 a Março/2024",
      tasks:
        "Atuei como desenvolvedor jr, utilizando React e hospedando projetos no GitLab, além de fornecer suporte para toda a equipe. Realizei suporte técnico em sistemas Windows e arquitetura PC, bem como configuração e gerenciamento de impressoras. Prestei atendimento de 1º nível conforme o Catálogo de Serviços e fui responsável pela gestão de ativos, inventário de TI (hardware, software e licenças) e suporte a redes.",
    },
    {
      title: "Técnico de Informática & Desenvolvedor JR",
      company: "FyberMAN do Brasil",
      date: "Março/2022 a Outubro/2022",
      tasks:
        "Fui responsável por toda a TI de uma start-up em rápido crescimento, acumulando diversas responsabilidades. Desenvolvi aplicações e plugins em Python para otimizar processos e documentação, criei e mantive o site da empresa, além de prestar assistência técnica e controlar equipamentos de informática. Também cuidei da infraestrutura de rede, emiti relatórios e laudos técnicos, providenciei materiais para manutenção e orientei operadores sobre o uso adequado de equipamentos, garantindo o bom funcionamento da área tecnológica.",
    },
    {
      title: "Analista de dados com PowerBi",
      company: "Univitta Campos Saúde LTDA",
      date: "Julho/2019 a Março/2022",
      tasks:
        "Como analista de dados com PowerBi realizava a extração de dados e montava gráficos dinâmicos e práticos, para facilitar a análise de gestão, gerando relatórios para poder tomar as melhores decisões e consequentemente impactando de forma positiva a produtividade. Suporte Comercial, auxílio nas atividades de cobrança, atendimento telefônico, atendimento presencial, digitação de documento no sistema, digitalização de documentos e outras atividades administrativas. ",
    },
  ];

  return (
    <section className="experience-container">
      <h2>Experiência Profissional</h2>
      {experienceData.map((experience, index) => (
        <div key={index} className="experience-item">
          <MdWork className="experience-icon" />
          <div className="info">
            <h3>{experience.title}</h3>
            <h4 className="company">{experience.company}</h4>
            <span>{experience.date}</span>
            <p className="tasks">{experience.tasks}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceContainer;
