export const { format: formatPrice } = new Intl.NumberFormat('en-gb', {
  style: 'currency',
  currency: 'GBP',
});
