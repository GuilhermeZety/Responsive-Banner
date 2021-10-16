//função para formatar números para Real
export const { format: formatPrice } = new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  