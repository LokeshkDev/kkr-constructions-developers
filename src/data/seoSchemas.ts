/**
 * Centralized Schema.org Structured Data Definitions for KKR Construction & Developers
 */

export const BASE_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['ConstructionBusiness', 'LocalBusiness', 'GeneralContractor'],
  '@id': 'https://kkrconstruction.com/#organization',
  'name': 'KKR Construction & Developers',
  'alternateName': ['KKR Construction', 'KKR Developers', 'KKR Constructions Thiruvallur'],
  'url': 'https://kkrconstruction.com/',
  'logo': {
    '@type': 'ImageObject',
    'url': 'https://kkrconstruction.com/logo.png',
    'width': 512,
    'height': 512
  },
  'image': 'https://kkrconstruction.com/about-kkr-construction-developers.png',
  'description': 'KKR Construction & Developers provides civil engineering, residential construction, commercial buildings, interior engineering, and specialized Mivan aluminum formwork technology across Thiruvallur, Chennai, and northern Tamil Nadu.',
  'telephone': ['+918072183386', '+917550331045', '+919894868457', '+918098987756'],
  'email': 'kkrconstructiondevelopers@gmail.com',
  'priceRange': '₹₹₹',
  'paymentAccepted': 'Cash, Cheque, Bank Transfer, RTGS, NEFT',
  'currenciesAccepted': 'INR',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Plot No:37, Sai Garden',
    'addressLocality': 'Thiruvallur',
    'addressRegion': 'Tamil Nadu',
    'postalCode': '631203',
    'addressCountry': 'IN'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 13.1432,
    'longitude': 79.9083
  },
  'openingHoursSpecification': [
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'opens': '09:00',
      'closes': '19:30'
    },
    {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': ['Sunday'],
      'opens': '09:30',
      'closes': '14:00'
    }
  ],
  'areaServed': [
    { '@type': 'City', 'name': 'Thiruvallur' },
    { '@type': 'City', 'name': 'Chennai' },
    { '@type': 'City', 'name': 'Avadi' },
    { '@type': 'City', 'name': 'Poonamallee' },
    { '@type': 'City', 'name': 'Ambattur' },
    { '@type': 'City', 'name': 'Sriperumbudur' },
    { '@type': 'City', 'name': 'Kanchipuram' },
    { '@type': 'City', 'name': 'Tiruttani' },
    { '@type': 'City', 'name': 'Chengalpattu' },
    { '@type': 'AdministrativeArea', 'name': 'Tamil Nadu' }
  ],
  'slogan': 'ENGINEERING | CONSTRUCTION | CONCRETE SOLUTIONS',
  'founder': [
    {
      '@type': 'Person',
      'name': 'Mr. Mohan Ram',
      'jobTitle': 'Founder & Construction Director'
    },
    {
      '@type': 'Person',
      'name': 'Mr. Thangavel',
      'jobTitle': 'Managing Partner & Senior Civil Engineer (13+ Yrs Exp)'
    },
    {
      '@type': 'Person',
      'name': 'Mr. Pradeep',
      'jobTitle': 'Managing Partner & Civil Engineering Professional'
    }
  ],
  'knowsAbout': [
    'Mivan Aluminum Formwork Construction',
    'Monolithic Concrete Pouring',
    'Residential Turnkey Villa Construction',
    'Commercial Office & Institutional Buildings',
    'RCC Raft Foundations & Structural Engineering',
    'Bank Strongroom & Vault Construction'
  ]
};

export const HOME_PAGE_SCHEMAS = [
  BASE_BUSINESS_SCHEMA,
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://kkrconstruction.com/#website',
    'url': 'https://kkrconstruction.com/',
    'name': 'KKR Construction & Developers',
    'description': 'Premier Civil Engineering, Construction & Mivan Formwork Developers in Thiruvallur & Chennai',
    'publisher': {
      '@id': 'https://kkrconstruction.com/#organization'
    },
    'inLanguage': 'en-US'
  }
];

export const ABOUT_PAGE_SCHEMAS = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://kkrconstruction.com/about#webpage',
    'url': 'https://kkrconstruction.com/about',
    'name': 'About KKR Construction & Developers - Engineering Heritage & Leadership',
    'isPartOf': {
      '@id': 'https://kkrconstruction.com/#website'
    },
    'about': {
      '@id': 'https://kkrconstruction.com/#organization'
    },
    'description': 'Discover the engineering heritage, leadership team, and foundational principles behind KKR Construction & Developers, founded by Mr. Mohan Ram and managed by senior civil engineers Mr. Thangavel and Mr. Pradeep.'
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://kkrconstruction.com/#organization',
    'name': 'KKR Construction & Developers',
    'member': [
      {
        '@type': 'Person',
        'name': 'Mr. Mohan Ram',
        'jobTitle': 'Founder',
        'description': 'Over 8 years of hands-on technical and project management experience in the construction industry.'
      },
      {
        '@type': 'Person',
        'name': 'Mr. Thangavel',
        'jobTitle': 'Managing Partner - Civil Engineering Professional',
        'image': 'https://kkrconstruction.com/team/thangavelu.jpeg',
        'description': '13 years of civil engineering professional expertise managing structural precision and Mivan projects.'
      },
      {
        '@type': 'Person',
        'name': 'Mr. Pradeep',
        'jobTitle': 'Managing Partner - Civil Engineering Professional',
        'image': 'https://kkrconstruction.com/team/pradeep.jpeg',
        'description': '8 years of experience overseeing site operations, RCC staging, and structural durability.'
      },
      {
        '@type': 'Person',
        'name': 'Mr. Mathavan',
        'jobTitle': 'Civil Engineering Professional',
        'image': 'https://kkrconstruction.com/team/mathavan.jpeg',
        'description': '5 years of hands-on expertise in structural site execution, quality inspection, and project coordination.'
      },
      {
        '@type': 'Person',
        'name': 'Mr. Karthik',
        'jobTitle': 'Business Executive Management',
        'image': 'https://kkrconstruction.com/team/karthik.jpeg',
        'description': '8 years of experience in client coordination, blueprint estimations, and operational efficiency.'
      }
    ]
  }
];

export const SERVICES_PAGE_SCHEMAS = [
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://kkrconstruction.com/services#webpage',
    'url': 'https://kkrconstruction.com/services',
    'name': 'Construction & Civil Engineering Services - KKR Construction',
    'description': 'Explore end-to-end residential building, commercial complexes, interior civil engineering, and concrete structural works offered by KKR Construction & Developers.',
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Residential Construction',
          'url': 'https://kkrconstruction.com/services/residential-construction'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Commercial Construction',
          'url': 'https://kkrconstruction.com/services/commercial-construction'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Interior Design & Engineering',
          'url': 'https://kkrconstruction.com/services/interior-design-engineering'
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': 'Concrete & Structural Works',
          'url': 'https://kkrconstruction.com/services/concrete-structural-works'
        }
      ]
    }
  }
];

export const SERVICE_RESIDENTIAL_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Residential Construction & Turnkey Villa Building',
  'serviceType': 'Residential Construction',
  'description': 'Custom individual houses, duplex villas, multi-unit apartments, and turnkey homes engineered with IS 456 compliant reinforced concrete and Fe550 steel.',
  'provider': {
    '@id': 'https://kkrconstruction.com/#organization'
  },
  'areaServed': ['Thiruvallur', 'Chennai', 'Avadi', 'Poonamallee', 'Ambattur', 'Sriperumbudur', 'Kanchipuram'],
  'offers': {
    '@type': 'Offer',
    'availability': 'https://schema.org/InStock',
    'price': '0',
    'priceCurrency': 'INR',
    'description': 'Free On-Site Inspection & Architectural Cost Estimation'
  }
};

export const SERVICE_COMMERCIAL_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Commercial Construction & Banking Strongrooms',
  'serviceType': 'Commercial Construction',
  'description': 'Multi-story commercial complexes, institutional facilities, corporate offices, and heavy-security bank vaults/strongrooms built to strict civil engineering codes.',
  'provider': {
    '@id': 'https://kkrconstruction.com/#organization'
  },
  'areaServed': ['Thiruvallur', 'Chennai', 'Sriperumbudur', 'Kanchipuram', 'Tamil Nadu'],
  'offers': {
    '@type': 'Offer',
    'availability': 'https://schema.org/InStock',
    'price': '0',
    'priceCurrency': 'INR',
    'description': 'Commercial Blueprint Evaluation & Turnkey Quote'
  }
};

export const SERVICE_INTERIOR_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Interior Design & Civil Engineering Space Planning',
  'serviceType': 'Interior Design & Civil Engineering',
  'description': 'Precision laser false ceilings, concealed electrical/plumbing chases, moisture-proof gypsum partitions, and custom architectural woodwork managed by civil engineers.',
  'provider': {
    '@id': 'https://kkrconstruction.com/#organization'
  },
  'areaServed': ['Thiruvallur', 'Chennai', 'Avadi', 'Poonamallee', 'Kanchipuram'],
  'offers': {
    '@type': 'Offer',
    'availability': 'https://schema.org/InStock',
    'price': '0',
    'priceCurrency': 'INR',
    'description': 'Free 3D Layout & Spatial Feasibility Assessment'
  }
};

export const SERVICE_CONCRETE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  'name': 'Concrete & Structural Works (Raft Foundation & Shuttering)',
  'serviceType': 'Concrete & Structural Engineering',
  'description': 'High-strength M20, M25, M30 vibration-compacted concrete pouring, Fe550 rebar cages, raft foundation mats, beam shuttering staging, and culvert bridge construction.',
  'provider': {
    '@id': 'https://kkrconstruction.com/#organization'
  },
  'areaServed': ['Thiruvallur', 'Chennai', 'Kanchipuram', 'Chengalpattu', 'Tamil Nadu'],
  'offers': {
    '@type': 'Offer',
    'availability': 'https://schema.org/InStock',
    'price': '0',
    'priceCurrency': 'INR',
    'description': 'Structural Rebar & Concrete Cube Strength Consultation'
  }
};

export const MIVAN_PAGE_SCHEMAS = [
  {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': 'https://kkrconstruction.com/mivan-technology#article',
    'headline': 'Mivan Aluminum Formwork Construction Technology: Faster, Stronger, Monolithic Concrete',
    'description': 'Comprehensive engineering guide on aluminum formwork technology, achieving 7-10 day floor cycles, seamless monolithic shear walls, zero plastering, and superior seismic resilience.',
    'image': 'https://kkrconstruction.com/images/mivan/mivan-technology-beam-concreate-kkr-constructions-and-developers.png',
    'author': {
      '@id': 'https://kkrconstruction.com/#organization'
    },
    'publisher': {
      '@id': 'https://kkrconstruction.com/#organization'
    }
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What is Mivan Construction Technology?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Mivan technology is an advanced aluminum formwork construction system where walls and floor slabs are cast simultaneously in high-grade monolithic concrete, eliminating traditional bricklaying and heavy cement plastering.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How fast is Mivan construction compared to conventional brickwork?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Mivan formwork achieves a complete floor cycle in just 7 to 10 days, making the overall building execution 30% to 40% faster than conventional brick and mortar masonry.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does Mivan construction prevent water seepage and wall cracks?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. Because the entire wall and slab structure is cast as a continuous monolithic concrete box, there are zero joint lines, virtually eliminating water dampness, hairline mortar cracks, and seepage.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How does Mivan technology increase usable carpet area?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Mivan shear walls are typically 100mm to 160mm thick compared to traditional 230mm (9-inch) brick walls, increasing the internal usable carpet area by 4% to 6% on the same plot footprint.'
        }
      }
    ]
  }
];

export const PROJECTS_PAGE_SCHEMAS = [
  {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': 'https://kkrconstruction.com/project-gallery#gallery',
    'name': 'KKR Construction Project Gallery & Site Execution Portfolio',
    'description': 'High-resolution site execution photographs of Mivan aluminum formwork, raft foundations, residential duplex villas, commercial complexes, and concrete structural works.',
    'url': 'https://kkrconstruction.com/project-gallery',
    'creator': {
      '@id': 'https://kkrconstruction.com/#organization'
    }
  }
];

export const CONTACT_PAGE_SCHEMAS = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': 'https://kkrconstruction.com/contact#webpage',
    'url': 'https://kkrconstruction.com/contact',
    'name': 'Contact KKR Construction & Developers - Office Headquarters Thiruvallur',
    'description': 'Get in touch with KKR Construction & Developers for free project quotations, site inspections, and structural engineering consultations in Thiruvallur and Chennai.',
    'mainEntity': BASE_BUSINESS_SCHEMA
  }
];

