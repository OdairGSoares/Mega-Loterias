import { format, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDate(dateStr: string): string {
  const date = parse(dateStr, 'dd/MM/yyyy', new Date());
  return format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
}

export function formatCurrency(value: string | number): string {
  const numericValue = typeof value === 'string'
    ? parseFloat(value.replace(/[^\d,]/g, '').replace(',', '.'))
    : value;

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(numericValue);
}