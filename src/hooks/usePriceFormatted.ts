interface Props {
  price: number
}

export function usePriceFormatted({ price }: Props) {
  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)
}