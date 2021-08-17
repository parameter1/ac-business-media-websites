module.exports = {
  title: 'Pump Spec Guide',
  teaser: 'Search through over 500 fluid power pump products to find the unit that suits your application, from gear pumps to axial piston pumps.',
  description: 'The <strong><em>OEM Off-Highway Pump Spec Guide</em></strong> is the industry’s first online, interactive component specing tool custom-built for engineers and product development team members to find exactly which pump they need for integration into the next generation of equipment.',
  bullets: [
    'Entering specific search criteria (Company Name, Pressure, Speed, etc.)',
    'Sorting the information by any column to order the information the way you need it',
  ],
  image: {
    src: 'https://img.oemoffhighway.com/files/base/acbm/ooh/image/static/pump.png',
  },
  downloadLink: '/20839221',
  sheetSrc: 'https://content-sheets.googleapis.com/v4/spreadsheets/10EKomL-SVMZ4imnCaoO86t48T7ngVaopWXie04AveUo/values/Pump-2016',
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
    hp: {
      label: 'Max Input (hp)',
      measure: 'standard',
      range: ['hp-low', 'hp-high'],
      type: 'number',
    },
    kw: {
      label: 'Max Input (kW)',
      measure: 'metric',
      range: ['kw-low', 'kw-high'],
      type: 'number',
    },
    lpm: {
      label: 'Thoe. Flow at Rated Speed (lpm)',
      measure: 'metric',
      range: ['lpm-low', 'lpm-high'],
      type: 'number',
    },
    gpm: {
      label: 'Thoe. Flow at Rated Speed (gpm)',
      measure: 'standard',
      range: ['gpm-low', 'gpm-high'],
      type: 'number',
    },
    productseries: {
      label: 'Product / Series',
    },
    company: {
      label: 'Company',
    },
  },
};
