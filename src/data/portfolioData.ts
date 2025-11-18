/* Copie e cole este conteúdo TODO para o seu arquivo: src/data/portfolioData.ts */

// 1. DEFINIÇÃO DOS TIPOS (PARA CORRIGIR OS ERROS)
export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  stack: string[];
  liveUrl?: string; // O '?' significa que é opcional
  githubUrl?: string; // O '?' significa que é opcional
};

export type Certificate = {
  title: string;
  issuer: string;
  imageUrl: string;
};

export type PortfolioData = {
  name: string;
  role: string;
  profileImageUrl: string;
  contact: {
    email: string;
    linkedin: string;
    github: string;
    instagram: string;
    whatsapp: string;
  };
  about: string;
  projects: Project[];
  experiences: {
    role: string;
    company: string;
    duration: string;
    description: string;
  }[];
  certifications: Certificate[];
};


// 2. OS SEUS DADOS (COM OS NOMES CORRETOS DAS IMAGENS)
export const portfolioData: PortfolioData = {
  name: "João Vitor", 
  role: "Engenheiro de Dados & Analista de Dados", 
  profileImageUrl: "/assets/images/profile.jpeg", // Verificado: profile.jpeg
  contact: {
    email: "wenes.vargas@gmail.com", 
    linkedin: "https://www.linkedin.com/in/jo%C3%A0o-vitor-vargas-martins-b67b29292/",
    github: "https://github.com/Wenes11",
    instagram: "https://www.instagram.com/wenesvargas/",
    whatsapp: "5564992486472", 
  },
  about: `
    Transformando dados brutos em insights e soluções de negócio. | Python | SQL | Power BI
  `,

  // PROJETOS (COM OS NOMES DAS SUAS IMAGENS)
  projects: [
    {
      title: "Análise de Vendas no Power BI",
      description: "Dashboard interativo criado no Power BI para análise de dados de vendas, permitindo a visualização de KPIs, performance por região e tendências de produtos.",
      imageUrl: "/assets/images/project-powerbi.png", // Verificado: project-powerbi.png
      stack: ["Power BI", "Análise de Dados", "DAX"],
      liveUrl: "#", // <-- LEMBRETE: Adicione seu link do Power BI aqui
      githubUrl: "https://github.com/Wenes11/Power-Bi", 
    },
    {
      title: "Relatório Financeiro Power BI",
      description: "Relatório financeiro detalhado desenvolvido no Power BI, focado na visualização de métricas financeiras, custos e receitas.",
      imageUrl: "/assets/images/report-financeiro.png", // Verificado: report-financeiro.png
      stack: ["Power BI", "Finanças", "DAX"],
      liveUrl: "#", // <-- LEMBRETE: Adicione seu link do Power BI aqui
      githubUrl: "https://github.com/Wenes11/Power-Bi", 
    },
    {
      title: "Web Scraping (FutScore)",
      description: "Projeto de coleta de dados (ETL) que utiliza Python e Selenium para extrair dados de resultados de futebol e estruturá-las para análise.",
      imageUrl: "/assets/images/project-futscore.png", // Verificado: project-futscore.png
      stack: ["Python", "Web Scraping", "Selenium"],
      liveUrl: "", 
      githubUrl: "https://github.com/Wenes11/Projeto-FutScore-Analytics", // Verificado
    },
    {
      title: "API RESTful com Node.js (SOLID)",
      description: "Construção de uma API robusta em Node.js aplicando princípios SOLID. Demonstra minha habilidade em JavaScript e na criação de backends para servir dados.",
      imageUrl: "/assets/images/project-nodejs.png", // Verificado: project-nodejs.png
      stack: ["Node.js", "JavaScript", "API REST", "SOLID"],
      liveUrl: "",
      githubUrl: "https://github.com/Wenes11/ProjetoNodeJs--1---1-", // Verificado
    },
    {
      title: "Dashboard de Vendas no Excel",
      description: "Criação de um dashboard dinâmico no Excel para análise de performance de vendas, utilizando tabelas dinâmicas e gráficos.",
      imageUrl: "/assets/images/project-excel.png", // Verificado: project-excel.png
      stack: ["Excel", "Dashboards", "Tabelas Dinâmicas"],
      liveUrl: "",
      githubUrl: "",
    },
    {
      title: "Site Pessoal (Colaboração)",
      description: "Desenvolvimento de um site pessoal responsivo, demonstrando habilidades em desenvolvimento web (HTML, CSS, JavaScript/React).",
      imageUrl: "/assets/images/site-pehvargas.png", // Verificado: site-peh-vargas.png
      stack: ["HTML", "CSS", "JavaScript", "React"],
      liveUrl: "https://site-peh-vargas.vercel.app/", 
      githubUrl: "", 
    },
  ],

  // EXPERIÊNCIAS
  experiences: [
    {
      role: "Digitador (Foco em Qualidade de Dados)",
      company: "Cartório 1° Ofício",
      duration: "Fev 2024 – Jul 2024",
      description: "Responsável pela digitalização e manutenção de registros. Aprimorei minhas habilidades em atenção ao detalhe e garantia da qualidade dos dados.",
    },
    {
      role: "Estagiário (Suporte Técnico e Banco de Dados)",
      company: "Agro Lucros",
      duration: "Jan 2021 – Jul 2021",
      description: "Prestei suporte técnico a usuários e tive meu primeiro contato com a manutenção de bancos de dados, auxiliando na organização e consulta de informações.",
    },
  ],

  // CERTIFICADOS (COM OS NOMES DAS SUAS IMAGENS)
  certifications: [
    {
      title: "Analise de Dados com Power Bi",
      issuer: "Dio",
      imageUrl: "/assets/images/cert-powerbi.jpg", // Verificado: cert-powerbi.jpg
    },
    {
      title: "Engenheria de Dados com Python",
      issuer: "Dio",
      imageUrl: "/assets/images/engenhariadados.png", // Verificado: engenhariadados.png
    },
    {
      title: "Java Script do Basico ao Avançado",
      issuer: "Udemy",
      imageUrl: "/assets/images/cert-javascript.jpg", // Verificado: cert-javascript.jpg
    },
    {
      title: "Web Scraping com Python",
      issuer: "Udemy",
      imageUrl: "/assets/images/cert-webscraping.jpg", // Verificado: cert-webscraping.jpg
    },
    {
      title: "Dashboards & Excel",
      issuer: "Dio",
      imageUrl: "/assets/images/DashBoards&Excel.jpg", // Verificado: DashBoards&Excel.jpg
    },
  ],
};