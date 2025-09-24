// Importe suas imagens aqui
// Lembre-se de colocar suas imagens na pasta /src/assets/images/
import profileImg from '../assets/images/profile.jpg';
import powerBiProjectImg from '../assets/images/project-powerbi.png';
import futScoreProjectImg from '../assets/images/project-futscore.png';
import excelProjectImg from '../assets/images/project-excel.png';
import nodejsProjectImg from '../assets/images/project-nodejs.png';
import powerBiCertImg from '../assets/images/cert-powerbi.jpg';
import jsCertImg from '../assets/images/cert-javascript.jpg';
import webscrapingCertImg from '../assets/images/cert-webscraping.jpg';

export const portfolioData = {
    name: "João Vitor",
    role: "Analista de Dados",
    profileImageUrl: profileImg,
    about: "Analista de Dados apaixonado por transformar dados brutos em insights de negócios acionáveis. Possuo experiência em visualização de dados, modelagem, e automação de processos. Estou sempre em busca de novos desafios e oportunidades para aplicar minhas habilidades analíticas para resolver problemas complexos.",
    contact: {
        email: "wenes.vargas10@gmail.com",
        linkedin: "https://www.linkedin.com/in/jo%C3%A3o-vitor-vargas-martins-b67b29292/",
        github: "https://github.com/Wenes11",
        whatsapp: "5564992486472",
    },
    projects: [
        {
            title: "Análise de Dados com Power BI",
            description: "Dashboard interativo para análise de indicadores de vendas, KPIs e performance de produtos.",
            link: "https://github.com/Wenes11/analise_dados_powerBi_projeto_final",
            imageUrl: powerBiProjectImg,
            tags: ["Power BI", "Analise de Dados", "Banco de Dados reacionais"]
        },
        {
            title: "FutScore Analytics",
            description: "Análise de dados esportivos, com web scraping para coleta de dados e criação de insights.",
            link: "https://github.com/Wenes11/Projeto-FutScore-Analytics",
            imageUrl: futScoreProjectImg,
            tags: ["Python", "Web Scraping", "Pandas"]
        },
        {
            title: "Dashboard de Vendas em Excel",
            description: "Construção de um dashboard dinâmico no Excel para acompanhamento de métricas de vendas.",
            link: "https://github.com/Wenes11/dashboard-de-vendas",
            imageUrl: excelProjectImg,
            tags: ["Excel", "Dashboard", "Vendas"]
        },
      // DENTRO DO ARQUIVO portfolioData.ts
{
      title: "Portal de Vagas com Node.js", // <-- TÍTULO ALTERADO
      description: "Plataforma de busca de empregos construída com Node.js. Permite aos usuários pesquisar e encontrar vagas de acordo com seus interesses.", // <-- DESCRIÇÃO ALTERADA
      link: "https://github.com/Wenes11/ProjetoNodeJs--1---1-",
      imageUrl: nodejsProjectImg,
      tags: ["Node.js", "Web Scraping", "JavaScript"] // <-- TAG SUGERIDA
}
    ],
    experiences: [
        {
            role: "Suporte Técnico & Desenvolvedor",
            company: "AgroLucros",
            duration: "8 meses",
            description: "Atuei na montagem e manutenção de hardware, como balanças de supermercado e impressoras. Realizei formatação de computadores, configuração de sistemas e prestei atendimento direto ao cliente, solucionando problemas técnicos e garantindo a satisfação."
        },
        {
            role: "Digitador e Transcritor",
            company: "Cartório de Morrinhos - GO",
            duration: "Contrato Temporário",
            description: "Responsável pela digitalização e transcrição de documentos oficiais, garantindo a precisão e a integridade das informações em um ambiente que exigia alta atenção aos detalhes e confidencialidade."
        }
    ],
    certifications: [
        { 
            title: "Análise de Dados com Power BI",
            imageUrl: powerBiCertImg
        },
        { 
            title: "JavaScript Básico ao Avançado",
            imageUrl: jsCertImg
        },
        { 
            title: "WebScraping com Python",
            imageUrl: webscrapingCertImg
        }
    ],
};
