// src/data/portfolioData.ts

// --- DEFINIÇÕES DE TIPOS (Isso corrige o erro TS2305) ---
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl: string;
  githubUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
}

export interface Contact {
  email: string;
  linkedin: string;
  github: string;
  whatsapp: string;
  instagram?: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  profileImageUrl: string;
  about: string;
  contact: Contact;
  projects: Project[];
  experiences: Experience[];
  certifications: Certificate[];
}

// --- SEUS DADOS ---
export const portfolioData: PortfolioData = {
  name: "João Vitor",
  role: "Engenheiro de Dados & Web Developer",
  profileImageUrl: "https://github.com/Wenes01.png", 
  about: "Especialista em transformar dados brutos em inteligência de negócio e interfaces digitais em ferramentas de conversão. Combinando a precisão da Engenharia de Dados com a criatividade do Desenvolvimento Web, crio ecossistemas digitais que não apenas funcionam, mas geram resultados. Foco em Python, Power BI, Automação e Landing Pages de alta performance.",
  
  contact: {
    email: "seuemail@exemplo.com", // Atualize aqui
    linkedin: "https://www.linkedin.com/in/joaovitorvargas",
    github: "https://github.com/Wenes01",
    whatsapp: "5562999999999", // Atualize aqui
    instagram: "https://instagram.com/seuinsta",
  },

  projects: [
    {
      title: "Landing Page Tarot Terapêutico",
      description: "Página de alta conversão desenvolvida para captação de clientes no nicho esotérico. Otimizada para SEO e performance mobile, focada em experiência do usuário e retenção.",
      technologies: ["React", "Tailwind CSS", "UX Design"],
      imageUrl: "/landingPage.png", 
      projectUrl: "https://tarotarcterapeutico.netlify.app/",
      githubUrl: "#" 
    },
    {
      title: "Dashboard Financeiro Corporativo",
      description: "Solução de Business Intelligence para análise financeira detalhada. Transformação de dados complexos em visualizações intuitivas para tomada de decisão estratégica.",
      technologies: ["Power BI", "DAX", "ETL", "Data Modeling"],
      imageUrl: "https://raw.githubusercontent.com/microsoft/PowerBI-Icons/main/SVG/Power-BI.svg", 
      projectUrl: "https://app.powerbi.com/groups/me/reports/0c9de950-0828-495b-ab3e-c891e449d104/ReportSection4fbb47422c5bac526570?experience=power-bi",
      githubUrl: "#"
    }
  ],

  experiences: [
    {
      role: "Desenvolvedor & Suporte Técnico",
      company: "Freelancer / Projetos",
      duration: "Atual",
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
      date: "2024",
      credentialUrl: "#"
    },
    {
      title: "Power BI Analyst",
      issuer: "Microsoft / Curso",
      date: "2024",
      credentialUrl: "#"
    }
  ]
};
