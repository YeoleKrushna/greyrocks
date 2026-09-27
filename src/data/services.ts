export type Service = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  value: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
  technologies: string[];
  problem: string;
  approach: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'web-software',
    number: '01',
    title: 'Web & Software Engineering',
    shortTitle: 'Software Engineering',
    eyebrow: 'PRODUCT ENGINEERING',
    value: 'Build reliable software around the way your business actually works.',
    description: 'Corporate websites, web applications, internal systems and SaaS products engineered as maintainable software rather than presentation-only prototypes.',
    capabilities: ['Corporate websites', 'Web applications', 'SaaS platforms', 'Internal business software', 'Full-stack engineering', 'REST APIs', 'CMS integrations', 'Performance optimization'],
    deliverables: ['Responsive front end', 'Backend services', 'API layer', 'Database integration', 'Deployment-ready build', 'Technical handover'],
    technologies: ['Astro', 'Django', 'FastAPI', 'Python', 'TypeScript', 'HTML', 'CSS', 'REST APIs', 'PostgreSQL', 'MySQL'],
    problem: 'A business can have a strong idea and still be held back by disconnected systems, brittle code and interfaces that are hard to extend.',
    approach: ['Clarify the user journey and business rules.', 'Model the application and data before overbuilding the UI.', 'Ship a thin, usable slice and validate the architecture around it.', 'Harden performance, accessibility, error handling and deployment paths.'],
    faqs: [
      { q: 'Can you work on an existing application?', a: 'Yes. Existing applications can be approached through focused architecture reviews, targeted rebuilds or incremental engineering work.' },
      { q: 'Do you build only front ends?', a: 'No. The service is designed around complete systems, including interfaces, APIs, business logic, databases and deployment.' },
    ],
  },
  {
    slug: 'ai-intelligent-systems',
    number: '02',
    title: 'AI & Intelligent Systems',
    shortTitle: 'Artificial Intelligence',
    eyebrow: 'AI ENGINEERING',
    value: 'Turn AI capabilities into working systems.',
    description: 'LLM integrations, NLP systems, retrieval-augmented generation, document intelligence, assistants and agent workflows designed around useful business tasks.',
    capabilities: ['LLM integration', 'AI assistants', 'RAG systems', 'NLP', 'Document intelligence', 'AI agents', 'Intelligent workflows', 'Model integration', 'Inference APIs'],
    deliverables: ['Prompt and evaluation layer', 'Retrieval architecture', 'Model integration', 'Inference API', 'Workflow orchestration', 'Operational documentation'],
    technologies: ['Python', 'PyTorch', 'Transformers', 'Hugging Face', 'LLMs', 'RAG', 'Vector databases', 'FastAPI', 'LangChain', 'LangGraph'],
    problem: 'AI experiments often stop at a demo because the real work—data access, evaluation, workflow integration and reliable failure handling—was never designed.',
    approach: ['Start from the task and failure modes, not the model.', 'Design data retrieval and context boundaries.', 'Create a measurable evaluation loop before scaling the workflow.', 'Integrate AI into a system with human and deterministic controls where appropriate.'],
    faqs: [
      { q: 'Do you build custom foundation models?', a: 'The service focuses on integrating, adapting and operationalizing existing models and AI components rather than claiming custom foundation-model training.' },
      { q: 'Can AI be added to an existing product?', a: 'Yes. An existing workflow can be assessed for AI opportunities and a focused integration can be designed without rebuilding the entire product.' },
    ],
  },
  {
    slug: 'data-science',
    number: '03',
    title: 'Data Science & Analytics',
    shortTitle: 'Data Science',
    eyebrow: 'DATA & DECISION SYSTEMS',
    value: 'Make messy data more useful for decisions, prediction and operations.',
    description: 'Exploratory analysis, machine learning, anomaly detection, forecasting, dashboards and reporting for data that needs to move from raw records to actionable output.',
    capabilities: ['Exploratory data analysis', 'Predictive modelling', 'Machine learning', 'Classification', 'Regression', 'Anomaly detection', 'Forecasting', 'Dashboards', 'Reporting'],
    deliverables: ['Data profiling', 'Feature engineering plan', 'Model pipeline', 'Evaluation report', 'Dashboard specification', 'Deployment handover'],
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'LightGBM', 'CatBoost', 'Matplotlib', 'SQL'],
    problem: 'Data work becomes expensive when every analysis is a one-off notebook with unclear assumptions, inconsistent definitions and no path to operational use.',
    approach: ['Define the decision and target metric.', 'Profile data quality and leakage risks.', 'Compare simple baselines before increasing model complexity.', 'Package the useful output into repeatable analysis or operational systems.'],
    faqs: [
      { q: 'Do you provide business intelligence dashboards?', a: 'Yes. Dashboards and reporting are included when they are the right delivery mechanism for the decision or workflow.' },
      { q: 'Can a model be deployed after the analysis?', a: 'Yes. Deployment requirements can be designed as part of the engagement rather than treated as a separate afterthought.' },
    ],
  },
  {
    slug: 'backend-data',
    number: '04',
    title: 'Backend & Data Engineering',
    shortTitle: 'Backend & Data',
    eyebrow: 'SYSTEMS & DATA PLATFORMS',
    value: 'Design the APIs and data layer the rest of the product depends on.',
    description: 'Backend architecture, APIs, database design, data modelling, pipelines, authentication and integrations for systems that need clear boundaries and reliable data flow.',
    capabilities: ['Backend architecture', 'REST APIs', 'Database architecture', 'PostgreSQL', 'MySQL', 'Data modelling', 'ETL / pipelines', 'Integrations', 'Authentication'],
    deliverables: ['API contracts', 'Data model', 'Service architecture', 'Pipeline definitions', 'Integration layer', 'Operational runbook'],
    technologies: ['Python', 'Django', 'FastAPI', 'PostgreSQL', 'MySQL', 'SQL', 'REST', 'Docker'],
    problem: 'Interfaces and data become a bottleneck when the underlying contracts are unclear, tightly coupled or difficult to observe.',
    approach: ['Map system boundaries and ownership.', 'Design schemas around real access patterns.', 'Define stable API contracts and validation rules.', 'Instrument the critical paths and document operational behaviour.'],
    faqs: [
      { q: 'Which databases can you work with?', a: 'The current service direction includes PostgreSQL and MySQL, with data modelling selected around the system requirements.' },
      { q: 'Can you design integrations with third-party APIs?', a: 'Yes. Integrations are treated as explicit system boundaries with validation, error handling and predictable retries where appropriate.' },
    ],
  },
  {
    slug: 'cloud-devops',
    number: '05',
    title: 'Cloud & DevOps',
    shortTitle: 'Cloud & DevOps',
    eyebrow: 'INFRASTRUCTURE',
    value: 'Give software a deployment path that is repeatable, observable and easier to operate.',
    description: 'Cloud architecture, AWS deployment, Docker, CI/CD, environment management, monitoring and scaling guidance for modern application stacks.',
    capabilities: ['Cloud architecture', 'AWS', 'Infrastructure', 'Deployment', 'Docker', 'CI/CD', 'Environment management', 'Monitoring', 'Scaling'],
    deliverables: ['Deployment architecture', 'Container setup', 'CI/CD workflow', 'Environment matrix', 'Monitoring plan', 'Operational documentation'],
    technologies: ['AWS', 'Docker', 'CI/CD', 'Linux', 'Git', 'GitHub', 'Cloud monitoring'],
    problem: 'A product is not finished when it runs on one machine. Deployment repeatability, secrets, environments and observability determine how safely it can evolve.',
    approach: ['Define environments and release boundaries.', 'Containerize only where it adds operational value.', 'Automate repeatable build and deploy steps.', 'Add lightweight observability around critical application paths.'],
    faqs: [
      { q: 'Do you require a specific cloud provider?', a: 'AWS is part of the current service capability, but the exact architecture should follow the system constraints and existing environment.' },
      { q: 'Can you improve an existing deployment?', a: 'Yes. A deployment can be reviewed for repeatability, environment separation, reliability and operational clarity.' },
    ],
  },
  {
    slug: 'automation-integrations',
    number: '06',
    title: 'Automation & Integrations',
    shortTitle: 'Automation',
    eyebrow: 'WORKFLOW ENGINEERING',
    value: 'Remove repetitive handoffs by connecting systems around a clean workflow.',
    description: 'Workflow automation, third-party API integrations, CRM connections and AI-powered process automation for repeatable business tasks.',
    capabilities: ['Workflow automation', 'Third-party APIs', 'CRM integrations', 'Business process automation', 'AI-powered workflow automation'],
    deliverables: ['Workflow map', 'Integration contracts', 'Automation service', 'Exception paths', 'Operational logs', 'Handover documentation'],
    technologies: ['REST APIs', 'Python', 'FastAPI', 'Webhooks', 'LLMs', 'Databases'],
    problem: 'Manual operational work often survives because the systems involved were never connected or because exceptions were ignored in the original design.',
    approach: ['Map the current workflow and the true bottlenecks.', 'Separate deterministic automation from AI-assisted decisions.', 'Design explicit exception and recovery paths.', 'Track outcomes so automation can be improved without guesswork.'],
    faqs: [
      { q: 'Can you integrate SaaS tools we already use?', a: 'Yes, where those tools expose suitable APIs, webhooks or integration mechanisms.' },
      { q: 'Do you automate every step?', a: 'No. The goal is to automate repeatable work while keeping meaningful human decisions visible and controllable.' },
    ],
  },
  {
    slug: 'technology-consulting',
    number: '07',
    title: 'Technology Consulting',
    shortTitle: 'Technology Consulting',
    eyebrow: 'TECHNOLOGY STRATEGY',
    value: 'Bring structure to complex technical choices before expensive implementation begins.',
    description: 'Architecture reviews, AI opportunity discovery, modernization plans, technical roadmaps and product engineering guidance for teams that need a clearer path forward.',
    capabilities: ['Architecture reviews', 'Technology strategy', 'AI opportunity discovery', 'System modernization', 'Technical roadmaps', 'Product engineering guidance'],
    deliverables: ['Current-state assessment', 'Architecture diagram', 'Options and trade-offs', 'Roadmap', 'Risk register', 'Implementation plan'],
    technologies: ['Architecture', 'Python', 'APIs', 'Data', 'Cloud', 'AI/ML'],
    problem: 'Technical decisions accumulate quickly, and it can become difficult to separate what is important now from what is simply interesting.',
    approach: ['Clarify business constraints and success criteria.', 'Map the current system and major dependencies.', 'Compare a small set of viable options with explicit trade-offs.', 'Translate the decision into an actionable implementation sequence.'],
    faqs: [
      { q: 'Can consulting start before a build?', a: 'Yes. A focused review can be used to clarify scope, architecture or technology choices before development begins.' },
      { q: 'Do consulting engagements require a large discovery project?', a: 'No. The scope can be narrow when the technical question is already well-defined.' },
    ],
  },
];

export const serviceSlugs = services.map((service) => service.slug);
