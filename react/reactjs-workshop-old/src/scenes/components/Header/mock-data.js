// Mock filter data when using demo

const teamOptions = [
  { label: 'Achillies', value: 'team@achillies' },
  { label: 'Aphrodite', value: 'team@aphrodite' },
  { label: 'Apollo', value: 'team@apollo' },
  { label: 'Account Management', value: 'team@account-management' },
  { label: 'Artemis', value: 'team@artemis' },
  { label: 'Bizops', value: 'team@bizops' },
  { label: 'Bolt', value: 'team@bolt' },
];

const sourceOptions = [
  { label: 'Internal', value: 'source@internal' },
  { label: 'Inbound', value: 'source@inbound' },
  { label: 'Dialler', value: 'source@dialler' },
];

const functionOptions = [
  { label: 'Renewals', value: 'source@renewals' },
  { label: 'Sales', value: 'source@sales' },
  { label: 'Tc Sales', value: 'source@tc-sales' },
];

const selectOptions = [
  { label: 'Teams', options: teamOptions },
  { label: 'Source', options: sourceOptions },
  { label: 'Functions', options: functionOptions },
];

export default selectOptions;
