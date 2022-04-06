export const currencyMask = value => {
  if (value.charAt(0) == '0') return '';
  return value
    .split('.')
    .join('')
    .split('')
    .reverse()
    .map((val, idx) => (idx !== 0 && idx % 3 === 0 ? val + '.' : val))
    .reverse()
    .join('');
};
