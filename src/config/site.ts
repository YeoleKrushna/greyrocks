export const siteConfig = {
  companyName: 'GreyRocks',
  wordmark: 'GREYROCKS',
  domain: 'https://greyrocks.in',
  description: 'Technology engineering for software, AI, data, cloud and automation.',
  headquarters: {
    label: 'Headquarters',
    city: 'Pune',
    region: 'Maharashtra',
    country: 'India',
  },
  officeLocations: [
    { label: 'Headquarters', city: 'Pune', region: 'Maharashtra', country: 'India' },
    { label: 'Office', city: 'Bengaluru', region: 'Karnataka', country: 'India' },
  ],
  contactEmail: 'support@greyrocks.in',
  socialLinks: {
    linkedin: '',
    github: '',
    instagram: '',
    youtube: '',
  },
  contactFormEndpoint: import.meta.env.PUBLIC_CONTACT_FORM_ENDPOINT ?? '',
  ogImage: '/og/greyrocks-og.png',
};

export const hasConfiguredContactEmail = Boolean(siteConfig.contactEmail);
export const hasConfiguredFormEndpoint = Boolean(siteConfig.contactFormEndpoint);
