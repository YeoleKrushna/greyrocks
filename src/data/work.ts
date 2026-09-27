export type WorkLabel = 'Concept' | 'Prototype' | 'Internal Build' | 'Representative Solution';

export interface WorkItem {
  title: string;
  label: WorkLabel;
  summary: string;
  disciplines: string[];
}

export const workItems: WorkItem[] = [
  { title: 'Intelligent document workflow', label: 'Representative Solution', summary: 'A pattern for extracting, validating and routing information from business documents with human review points.', disciplines: ['AI', 'NLP', 'Automation'] },
  { title: 'Operational analytics platform', label: 'Concept', summary: 'A modular analytics experience combining structured data, reusable metrics and decision-focused reporting.', disciplines: ['Data Science', 'Analytics', 'Web'] },
  { title: 'API and data platform foundation', label: 'Prototype', summary: 'A service architecture pattern for reliable APIs, data models, authentication and integration boundaries.', disciplines: ['Backend', 'Databases', 'APIs'] },
  { title: 'Cloud delivery system', label: 'Internal Build', summary: 'A deployment pattern covering environments, CI/CD, containerized services and operational visibility.', disciplines: ['Cloud', 'DevOps', 'Infrastructure'] },
];
