export interface CareerArea { title: string; description: string }
export interface OpenPosition { title: string; team: string; location: string; type: string; description: string; href?: string }

export const careerAreas: CareerArea[] = [
  { title: 'Software Engineering', description: 'Potential roles across product, backend and full-stack engineering.' },
  { title: 'AI / ML', description: 'Potential roles across AI integration, NLP, machine learning and intelligent systems.' },
  { title: 'Data Science', description: 'Potential roles across analysis, modelling, experimentation and decision systems.' },
  { title: 'Data Engineering', description: 'Potential roles across data models, pipelines and platform engineering.' },
  { title: 'Cloud / DevOps', description: 'Potential roles across deployment, infrastructure and developer operations.' },
  { title: 'Product Design', description: 'Potential roles across product UX, interface design and design systems.' },
  { title: 'Business Development', description: 'Potential roles across partnerships, solution discovery and client development.' },
];

// Add verified roles here when hiring is active.
export const openPositions: OpenPosition[] = [];
