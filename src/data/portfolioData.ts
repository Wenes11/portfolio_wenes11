// Copie e cole isto em: src/data/portfolioData.ts

export const portfolioData = {
  name: "João Vitor",
  role: "Engenheiro de Dados & Web Developer",
  profileImageUrl: "https://github.com/Wenes01.png", // Sua foto do GitHub (ou troque pelo link da sua foto)
  about: "Especialista em transformar dados brutos em inteligência de negócio e interfaces digitais em ferramentas de conversão. Combinando a precisão da Engenharia de Dados com a criatividade do Desenvolvimento Web, crio ecossistemas digitais que não apenas funcionam, mas geram resultados. Foco em Python, Power BI, Automação e Landing Pages de alta performance.",
  
  contact: {
    email: "seuemail@exemplo.com", // Coloque seu email real aqui
    linkedin: "https://www.linkedin.com/in/joaovitorvargas", // Seu LinkedIn
    github: "https://github.com/Wenes01",
    whatsapp: "5562999999999", // Coloque seu número real
    instagram: "https://instagram.com/seuinsta",
  },

  projects: [
    {
      title: "Landing Page Tarot Terapêutico",
      description: "Página de alta conversão desenvolvida para captação de clientes no nicho esotérico. Otimizada para SEO e performance mobile, focada em experiência do usuário e retenção.",
      technologies: ["React", "Tailwind CSS", "UX Design"],
      imageUrl: "/landingPage.png", // Certifique-se de que essa imagem está na pasta 'public'
      projectUrl: "https://tarotarcterapeutico.netlify.app/",
      githubUrl: "#" // Se for privado, pode deixar # ou remover
    },
    {
      title: "Dashboard Financeiro Corporativo",
      description: "Solução de Business Intelligence para análise financeira detalhada. Transformação de dados complexos em visualizações intuitivas para tomada de decisão estratégica.",
      technologies: ["Power BI", "DAX", "ETL", "Data Modeling"],
      imageUrl: "https://raw.githubusercontent.com/microsoft/PowerBI-Icons/main/SVG/Power-BI.svg", // Placeholder do logo Power BI (Troque por um print do seu dashboard depois)
      projectUrl: "https://app.powerbi.com/groups/me/reports/0c9de950-0828-495b-ab3e-c891e449d104/ReportSection4fbb47422c5bac526570?experience=power-bi",
      githubUrl: "#"
    },
    // Adicione mais projetos aqui se tiver
  ],

  experiences: [
    {
      role: "Desenvolvedor & Suporte Técnico",
      company: "Freelancer / Projetos",
      duration: "Até Ago/2021",
      description: "Desenvolvimento de soluções full-stack e hardware. Destaque para a engenharia de uma Balança de Supermercado inteligente utilizando Arduino e integração física-digital, além de automação de processos e criação de Landing Pages estratégicas."
    },
    {
      role: "Gestão de Dados & Transcrição",
      company: "Cartório",
      duration: "Até Ago/2024",
      description: "Atuação focada na integridade e digitalização de registros públicos. Responsável pela transcrição de alta precisão, organização de bases de dados documentais e otimização do fluxo de informações digitais do ofício."
    }
  ],

  certifications: [
    {
      title: "Engenharia de Dados",
      issuer: "DIO / Instituição",
      date: "2025",
      credentialUrl: "#"
    },
    {
      title: "Power BI Analyst",
      issuer: "Microsoft / Curso",
      date: "2025",
      credentialUrl: "#"
    },
    // Adicione mais certificados
  ]
};
