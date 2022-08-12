export const formatCurrency = (price) =>
  new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD'
  }).format(price);