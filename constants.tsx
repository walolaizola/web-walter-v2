import { Brain, Database, LineChart, ShieldCheck, Users, Target, Rocket, GraduationCap } from 'lucide-react';
import { CaseStudy, Service, TechItem, Testimonial } from './types';

export const NAVIGATION = [
  { name: 'Inicio', path: '/' },
  { name: 'Consultoría', path: '/consultoria' },
  { name: 'Formación', path: '/formacion' },
  { name: 'Sobre Mí', path: '/sobre-mi' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Walter reestructuró todo nuestro Centro de Excelencia de Datos. En 6 meses redujimos costes un 30% mientras mejorábamos la calidad de entrega.",
    name: "Director de IT",
    role: "CIO",
    company: "Volkswagen Group España Distribución"
  },
  {
    id: 2,
    quote: "El proyecto estaba a punto de cancelarse. Walter intervino, rediseñó el entregable y recuperó la confianza del cliente en 3 semanas.",
    name: "Socio Director",
    role: "Partner",
    company: "Consultora Tecnológica Global"
  },
  {
    id: 3,
    quote: "Por fin una formación que conecta la técnica con el negocio. Nuestro equipo salió con casos de uso reales listos para implementar.",
    name: "Responsable de RRHH",
    role: "HR Director",
    company: "Multinacional Farmacéutica"
  }
];

export const SERVICES: Service[] = [
  {
    id: 'strategy',
    title: 'Estrategia Data & IA',
    description: 'De iniciativas dispersas a un roadmap ejecutable con ROI claro.',
    icon: Brain,
    benefits: ['Assessment de madurez real', 'Roadmap priorizado por valor', 'Business Cases con ROI'],
    link: '/consultoria'
  },
  {
    id: 'governance',
    title: 'Gobierno del Dato',
    description: 'De datos caóticos a una única fuente de verdad certificada.',
    icon: ShieldCheck,
    benefits: ['Calidad de datos garantizada', 'Cumplimiento GDPR/Regulatorio', 'Confianza en los reportes'],
    link: '/consultoria'
  },
  {
    id: 'interim',
    title: 'Interim CDO/CAIO',
    description: 'Liderazgo ejecutivo experimentado sin compromiso a largo plazo.',
    icon: Users,
    benefits: ['Gestión inmediata de crisis', 'Liderazgo de equipos técnicos', 'Puente entre Tech y Negocio'],
    link: '/consultoria'
  },
  {
    id: 'training',
    title: 'Formación Ejecutiva',
    description: 'Upskilling práctico para directivos y equipos. Bonificable FUNDAE.',
    icon: GraduationCap,
    benefits: ['100% Bonificable', 'Metodología Learning by Doing', 'Adaptado a tu sector'],
    link: '/formacion'
  }
];

export const PROBLEMS = [
  "¿Tienes muchos datos pero sigues tomando decisiones por intuición?",
  "¿Tus proyectos de IA nunca llegan a producción?",
  "¿Tu equipo de datos vive desconectado de las necesidades de negocio?",
  "¿Has invertido en tecnología (Snowflake, Databricks) pero no ves el ROI?",
  "¿La calidad de tus datos es tan mala que nadie confía en los reportes?",
  "¿Te preocupa que la competencia te deje atrás con la IA Generativa?"
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "Reestructuración CoE Datos",
    client: "Volkswagen Group España",
    situation: "Centro de Excelencia con 60+ profesionales, costes disparados y calidad cuestionable.",
    intervention: "Reestructuración completa, renegociación de proveedores e implementación de gobierno.",
    results: [
      "Reducción del 30% en costes operativos",
      "Mejora del 40% en time-to-market",
      "Consolidación de 5 a 2 proveedores clave"
    ],
    stats: [
      { value: "30%", label: "Ahorro Costes" },
      { value: "40%", label: "Más Rápido" }
    ]
  },
  {
    id: 2,
    title: "Large Vision Models en Construcción",
    client: "Ferrovial (vía NTT DATA)",
    situation: "Necesidad de innovación en seguridad y eficiencia en obras utilizando IA avanzada.",
    intervention: "Diseño y validación de modelos de visión multimodales en escenarios reales.",
    results: [
      "Modelos con 60-80% de accuracy en detección",
      "Validación en streaming real-time",
      "Caso pionero en el sector"
    ],
    stats: [
      { value: "80%", label: "Accuracy" },
      { value: "Real-time", label: "Procesamiento" }
    ]
  },
  {
    id: 3,
    title: "Rescate de Proyecto Crítico",
    client: "Consultora Tecnológica",
    situation: "Cliente insatisfecho, entregable rechazado por CEO, riesgo de multa de 200K€.",
    intervention: "Intervención de emergencia (3 semanas), rediseño ejecutivo y presentación al CEO.",
    results: [
      "Proyecto rescatado y aprobado",
      "Contrato renovado para Fase 2",
      "Penalización de 200K€ evitada"
    ],
    stats: [
      { value: "200K€", label: "Ahorrados" },
      { value: "3", label: "Semanas" }
    ]
  }
];

export const TECH_STACK: TechItem[] = [
  {
    category: "Cloud & Platforms",
    tools: ["Azure", "AWS", "Google Cloud", "Databricks", "Snowflake", "Microsoft Fabric"]
  },
  {
    category: "AI & ML",
    tools: ["Agentic AI", "RAG", "Azure ML", "Vertex AI", "SageMaker", "MLOps"]
  },
  {
    category: "Data Arch",
    tools: ["Data Mesh", "Lakehouse", "Data Vault 2.0", "Medallion Architecture"]
  },
  {
    category: "Databases",
    tools: ["BigQuery", "Synapse", "Oracle", "MongoDB", "Neo4j", "SQL Server"]
  }
];

export const VALUES = [
  {
    title: "Compromiso Absoluto",
    description: "Me pongo tu camiseta. No soy el consultor que entrega un PPT y desaparece."
  },
  {
    title: "Pragmatismo vs Perfección",
    description: "Prefiero quick wins que generen tracción hoy, a estrategias perfectas que nunca se ejecutan."
  },
  {
    title: "Resultados Medibles",
    description: "Si no se puede medir, no se puede gestionar. Todo tiene un KPI asociado."
  },
  {
    title: "Transferencia Real",
    description: "No creo dependencias. Tu equipo debe poder continuar sin mí."
  }
];