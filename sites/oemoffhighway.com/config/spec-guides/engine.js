module.exports = {
  title: 'Engine Spec Guide',
  teaser: 'Find hundreds of gas and diesel engine systems from all of the major engine manufacturers in horsepower ranging from 1 hp to over 5,000 hp.',
  description: 'The <strong><em>OEM Off-Highway Engine Spec Guide</em></strong> is the industry’s first online, interactive component specing tool custom-built for engineers and product development team members to find exactly which engine they need for integration into the next generation of equipment.',
  bullets: [
    'Entering specific search criteria (company name, Tier certification, etc.)',
    'Sorting the information by any column to order the information the way you need it',
  ],
  image: {
    src: 'https://img.oemoffhighway.com/files/base/acbm/ooh/image/static/engine.png',
  },
  downloadLink: '/22911859',
  sheetSrc: 'https://content-sheets.googleapis.com/v4/spreadsheets/10EKomL-SVMZ4imnCaoO86t48T7ngVaopWXie04AveUo/values/Engine-2021',
  measures: {
    metric: { label: 'Metric' },
    standard: { label: 'Standard' },
  },
  initialMeasureKey: 'standard',
  columns: {
    hp: {
      measure: 'standard',
      range: ['hp-low', 'hp-high'],
      type: 'number',
    },
    kw: {
      label: 'kW',
      measure: 'metric',
      range: ['kw-low', 'kw-high'],
      type: 'number',
    },
    disp: {
      label: 'Disp. (L)',
      range: ['disp-low', 'disp-high'],
      type: 'number',
    },
    torque: {
      label: 'Torque (lb.-ft.)',
      measure: 'standard',
      range: ['torque-low', 'torque-high'],
      type: 'number',
    },
    torquenm: {
      label: 'Torque (Nm)',
      measure: 'metric',
      range: ['torque-lownm', 'torque-highnm'],
      type: 'number',
    },
    fuel: {
      label: 'Fuel',
    },
    tierregcompliant: {
      label: 'Emissions Certifications',
    },
    aftertreatment: {
      label: 'Aftertreatment',
    },
    // Dimension group here.
    ldimensionsin: {
      label: 'L (in.)',
      measure: 'standard',
      type: 'number',
    },
    wdimensionsin: {
      label: 'W (in.)',
      measure: 'standard',
      type: 'number',
    },
    hdimensionsin: {
      label: 'H (in.)',
      measure: 'standard',
      type: 'number',
    },
    ldimensionsmm: {
      label: 'L (mm)',
      measure: 'metric',
      type: 'number',
    },
    wdimensionsmm: {
      label: 'W (mm)',
      measure: 'metric',
      type: 'number',
    },
    hdimensionsmm: {
      label: 'H (mm)',
      measure: 'metric',
      type: 'number',
    },
    weightdrylb: {
      label: 'Dry Weight (lb.)',
      measure: 'standard',
      type: 'number',
    },
    weightdrykg: {
      label: 'Dry Weight (kg.)',
      measure: 'metric',
      type: 'number',
    },
    model: {
      label: 'Model',
    },
    familyseries: {
      label: 'Family / Series',
    },
    company: {
      label: 'Company',
    },
    link: {
      label: 'Link',
      hidden: true,
    },
    featured: {
      label: 'Featured',
      hidden: true,
    },
  },
};
