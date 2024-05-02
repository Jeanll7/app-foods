import { Product } from "@prisma/client";

export const calculateProductTotalPrice = (product: Product): number => {
  const price = Number(product.price);
  const discountPercentage = product.discountPercentage || 0;

  const discount = price * (discountPercentage / 100);

  return price - discount;
};

export const formatCurrency = (value: number): string => {
  return `R$${Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value)}`;
};
