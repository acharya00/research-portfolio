export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dilli Ram Acharya',
    givenName: 'Dilli Ram',
    familyName: 'Acharya',
    jobTitle: 'M.Eng. Researcher · Agricultural & Biosystems Engineer',
    url: 'https://dilliramacharya.com',
    email: 'mailto:dilliacharya63@gmail.com',
    affiliation: {
      '@type': 'CollegeOrUniversity',
      name: 'Nanjing Agricultural University',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nanjing',
        addressRegion: 'Jiangsu',
        addressCountry: 'CN',
      },
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Institute of Engineering, Purwanchal Campus, Tribhuvan University',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dharan',
        addressCountry: 'NP',
      },
    },
    knowsAbout: [
      'Biomass valorization',
      'Biochar engineering',
      'Electrochemical sensing',
      'Environmental monitoring',
      'Density Functional Theory',
      'Machine learning',
      'Agricultural mechanization',
    ],
    sameAs: [
      'https://www.linkedin.com/in/dilli-ram-acharya',
      'https://www.researchgate.net/profile/Dilli-Acharya',
      'https://scholar.google.com/citations?user=je6n7bYAAAAJ&hl=en',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
