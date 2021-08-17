module.exports = {
  title: 'Motor Spec Guide',
  teaser: 'Over 500 fluid power motors ranging from fixed gear to bent axis are waiting to be sorted through to find the exact motor to fit your equipment design requirements.',
  description: 'The <strong><em>OEM Off-Highway Motor Spec Guide</em></strong> is the industry’s first online, interactive component specing tool custom-built for engineers and product development team members to find exactly which motor they need for integration into the next generation of equipment.',
  bullets: [
    'Entering specific search criteria (Company Name, Pressure, Speed, etc.)',
    'Sorting the information by any column to order the information the way you need it',
  ],
  image: {
    src: 'https://img.oemoffhighway.com/files/base/acbm/ooh/image/static/motor.png',
  },
  downloadLink: '/20839229',
  sheetSrc: 'https://content-sheets.googleapis.com/v4/spreadsheets/10EKomL-SVMZ4imnCaoO86t48T7ngVaopWXie04AveUo/values/Motor-2016',
  measures: {
    metric: { label: 'Metric' },
    standard: { label: 'Standard' },
  },
  initialMeasureKey: 'metric',
  columns: {
    openloop: {
      label: 'Open Loop',
    },
    closedloop: {
      label: 'Closed Loop',
    },
    unit: {
      label: 'Unit',
    },
    type: {
      label: 'Type',
    },
    in3rev: {
      label: 'Disp. (in3/rev)',
      measure: 'standard',
      range: ['in3rev-low', 'in3rev-high'],
      type: 'number',
    },
    cm3rev: {
      label: 'Disp. (cm3/rev)',
      measure: 'metric',
      range: ['cm3rev-low', 'cm3rev-high'],
      type: 'number',
    },
    'nominal-bar': {
      label: 'Nominal Press (bar)',
      measure: 'metric',
      range: ['nominal-lowbar', 'nominal-highbar'],
      type: 'number',
    },
    'peak-bar': {
      label: 'Peak Press (bar)',
      measure: 'metric',
      range: ['peak-lowbar', 'peak-highbar'],
      type: 'number',
    },
    'nominal-psi': {
      label: 'Nominal Press (psi)',
      measure: 'standard',
      range: ['nominal-lowpsi', 'nominal-highpsi'],
      type: 'number',
    },
    'peak-psi': {
      label: 'Peak Press (psi)',
      measure: 'standard',
      range: ['peak-lowpsi', 'peak-highpsi'],
      type: 'number',
    },
    continuous: {
      label: 'Cont. Speed (RPM)',
      range: ['continuous-low', 'continuous-high'],
      type: 'number',
    },
    max: {
      label: 'Max Speed (RPM)',
      range: ['max-low', 'max-high'],
      type: 'number',
    },
    'n-m': {
      label: 'Output Torque (N-m)',
      measure: 'metric',
      range: ['n-mlow', 'n-mhigh'],
      type: 'number',
    },
    'lb-in': {
      label: 'Output Torque (lb.-in.)',
      measure: 'standard',
      range: ['lb-inlow', 'lb-inhigh'],
      type: 'number',
    },
    sae: {
      label: 'Front Mounting (SAE)',
    },
    saecode: {
      label: 'Shaft SAE Code',
    },
    in: {
      label: 'Output Shaft (in)',
      measure: 'standard',
    },
    mm: {
      label: 'Output Shaft (mm)',
      measure: 'metric',
    },
    productseries: {
      label: 'Product / Series',
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
