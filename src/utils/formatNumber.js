export function formatNumber(number) {
  if (number >= 1000000) {
      const formattedNumber = (number / 1000000).toFixed(1);
      return formattedNumber.endsWith('.0') ? (formattedNumber.slice(0, -2) + ' mil') : formattedNumber + ' mil';
  } else if (number >= 1000) {
      const formattedNumber = (number / 1000).toFixed(1);
      return formattedNumber.endsWith('.0') ? (formattedNumber.slice(0, -2) + 'k') : formattedNumber + 'k';
  } else {
      return number;
  }
}
