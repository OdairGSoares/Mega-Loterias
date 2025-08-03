export function formatCurrency(value: string | number): string {
  try {
    const numericValue = typeof value === 'string'
      ? parseFloat(value.replace(/[^\d,]/g, '').replace(',', '.'))
      : value;

    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(numericValue);
  } catch {
    return 'R$ 0,00';
  }
}