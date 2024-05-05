import { Product } from "@prisma/client";

export const calculateProductTotalPrice = (product: Product): number => {
  const price = Number(product.price);
  const discountPercentage = product.discountPercentage;

  if (discountPercentage === 0) {
    return price;
  }

  const discount = (price * discountPercentage) / 100;
  const totalPrice = price - discount;

  console.log(
    `O preço total do ${product.name} é ${formatCurrency(totalPrice)}`,
  );

  return totalPrice;
};

export const formatCurrency = (value: number): string => {
  return `R$${Intl.NumberFormat("pt-BR", {
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value)}`;
};
