import { Project, Experience, Skill } from "../types";

export const ME = {
  name: "Filipe Rodrigues Moura",
  role: "Analista de Dados / BI",
  objective: "Estudante de Análise e Desenvolvimento de Sistemas (ADS) focado em Business Intelligence, Análise de Dados e Desenvolvimento Web. Experiência com SQL, Power BI, React e TypeScript.",
  email: "felpesrodrigues@outlook.com",
  github: "https://github.com/Felpsxxl",
  linkedin: "https://www.linkedin.com/in/filipe-rodrigues-661553244",
  whatsapp: "https://wa.me/5511970992152",
  about:
    "Com formação sólida em análise de sistemas, estou focando minha carreira em Business Intelligence e Análise de Dados. Minha experiência em resolver problemas complexos me permite extrair valor real dos dados, otimizando processos e auxiliando na tomada de decisão estratégica.",
};

export const SKILLS: Skill[] = [
  {
    category: "Linguagens & Consultas",
    items: ["SQL (PostgreSQL)", "Python (Pandas)"],
  },
  {
    category: "Ferramentas BI & Planilhas",
    items: ["Power BI (Dashboards, DAX, Power Query)", "Excel (Intermediário/Avançado - Fórmulas, Tabelas Dinâmicas)"],
  },
  {
    category: "Banco de Dados & Nuvem",
    items: ["PostgreSQL", "Conceitos de ETL e Data Warehouse", "AWS (Conceitos Básicos - Cloud Practitioner)"],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    title: "Analista de Suporte",
    company: "Rede Service",
    date: "2024 - Presente",
    description: "",
    achievements: [
      "Realizo levantamento e análise de requisitos para o desenvolvimento de soluções internas de dados e sistemas.",
      "Apoio a construção e manutenção de dashboards e relatórios em Power BI para acompanhamento de indicadores de negócio.",
      "Presto suporte a sistemas e rotinas de dados, assegurando a integridade e consistência das informações.",
      "Elaboro documentações técnicas e operacionais para padronização de processos internos.",
    ],
  },
  {
    id: "exp-2",
    title: "Jovem Aprendiz Administrativo/Financeiro",
    company: "Listo Tecnologia S.A.",
    date: "08/2022 - 11/2023",
    description: "",
    achievements: [
      "Vivência em rotinas financeiras e de Contas a Pagar utilizando o sistema SAP para lançamento de notas fiscais, aprovações e conciliação bancária.",
      "Criação e manutenção de planilhas de controle financeiro e administrativo em Excel com foco na acurácia e integridade dos dados.",
      "Execução de rotinas operacionais e administrativas com foco no cumprimento de prazos e eficiência de processos.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "proj-firax",
    slug: "firax-agencia",
    title: "Firax — Plataforma Web & Agência Digital",
    description: "Plataforma web institucional e comercial desenvolvida para apresentação de serviços de tecnologia, software sob medida e estratégias de marketing B2B. Focada em altíssima performance, microinterações modernas e conversão de leads.",
    longDescription: "Desenvolvido em React com TypeScript para tipagem estática e código escalável. Otimizado com Vite para tempo de carregamento ultrarrápido. Integração assíncrona de formulários via API (EmailJS). Interface moderna com cursores e microinterações customizadas.",
    tags: ["React", "TypeScript", "Vite", "EmailJS"],
    featured: true,
    date: "Aplicação Comercial",
    liveUrl: "https://www.firax.com.br/",
    repoUrl: "https://github.com/Felpsxxl/Site-firax",
  },
  {
    id: "proj-porsche-web",
    slug: "porsche-smart-analytics-web",
    title: "Porsche Smart Analytics — Painel Gerencial de Operações",
    description: "Solução executiva de inteligência de dados desenvolvida para análise de faturamento global, volume de vendas e comportamento de consumo da marca Porsche. Transforma dados brutos em inteligência estratégica por meio de visão tabular e gráfica dinâmicas.",
    longDescription: "Engine de insights e cálculo dinâmico de KPIs em tempo real. Estrutura de filtros combinados por modelo, ano de fabricação, cidade e meio de pagamento. Interface responsiva em Glassmorphism UI utilizando Chart.js para renderização de dados.",
    tags: ["JavaScript (ES6+)", "Chart.js", "HTML5/CSS3"],
    featured: true,
    date: "Dashboard Interativo",
    repoUrl: "https://github.com/Felpsxxl/porsche-smart-analytics",
  },
  {
    id: "proj-2",
    slug: "sistema-eleitoral",
    title: "Análise Demográfica e Eleitoral",
    description: "Tratamento, limpeza e análise exploratória de dados públicos demográficos. Identificação de padrões de votação e representação visual de insights.",
    longDescription: "Utilizando Python e bibliotecas de análise de dados (Pandas, Matplotlib), este projeto explorou dados públicos para entender as correlações entre perfis demográficos e tendências de voto nas últimas eleições.",
    tags: ["Python", "Pandas", "Data Analysis"],
    featured: true,
    date: "Estudo de Caso",
    codeSnippet: {
      language: "python",
      fileName: "demographics.py",
      code: `import pandas as pd
import matplotlib.pyplot as plt

# Load election data
df = pd.read_csv('election_data.csv')

# Group by demographic profile
demographics = df.groupby('age_group').agg({
    'votes': 'sum',
    'turnout_rate': 'mean'
}).sort_values('votes', ascending=False)

# Identify key voting trends
print("Voter Turnout by Age Group:")
print(demographics)
`
    }
  },
  {
    id: "proj-3",
    slug: "modelagem-sql-financeiro",
    title: "Modelagem SQL e Consultas Financeiras",
    description: "Criação de scripts em PostgreSQL para estruturação de tabelas, joins e queries analíticas voltadas para relatórios de faturamento e conciliação de dados.",
    longDescription: "Projeto focado na normalização e criação de índices em um banco de dados PostgreSQL. O resultado foi uma base de dados mais enxuta, garantindo integridade referencial e consultas otimizadas para o time de controladoria.",
    tags: ["PostgreSQL", "SQL", "Modelagem de Dados"],
    metrics: [
      { label: "Redução de Tempo (Queries)", value: "60%", trend: "-4.5s por query" },
    ],
    featured: false,
    date: "Estudo de Caso",
  },
];

export const getFeaturedProjects = () => PROJECTS.filter((p) => p.featured);
export const getProjectBySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug);
