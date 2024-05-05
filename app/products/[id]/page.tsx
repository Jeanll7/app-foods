import {
  calculateProductTotalPrice,
  formatCurrency,
} from "@/app/_helpers/price";
import { db } from "@/app/_lib/prisma";
import Image from "next/image";
import { notFound } from "next/navigation";
import ProductImage from "./_components/product-image";
import { ArrowDownIcon } from "lucide-react";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
  const product = await db.product.findUnique({
    where: {
      id,
    },
    include: {
      restaurant: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <div>
      {/* IMAGE  */}
      <ProductImage product={product} />

      {/* TITULO E PREÇO  */}
      <div className="p-5">
        {/* RESTAURANTE  */}
        <div className="flex items-center gap-1.5">
          <div className="relative h-6 w-6">
            <Image
              src={product.restaurant.imageUrl}
              alt={product.restaurant.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <span className="text-xs text-muted-foreground">
            {product.restaurant.name}
          </span>
        </div>

        {/* NOME DO PRODUTO  */}
        <h1 className="mb-2 mt-0.5 text-xl font-semibold">{product.name}</h1>

        {/* PREÇO DO PRODUTO E QUANTIDADE */}
        <div className="flex justify-between">
          {/* PREÇO COM DESCONTO */}
          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="text-xl font-semibold">
                {formatCurrency(calculateProductTotalPrice(product))}
              </h2>
              {product.discountPercentage || (
                <div className="relative flex items-center gap-0.5 rounded-full bg-primary px-2 py-0.5  text-white">
                  <ArrowDownIcon size={12} />
                  <span className="text-xs font-semibold">
                    {product.discountPercentage}%
                  </span>
                </div>
              )}
              {/* {product.discountPercentage > 0 && (
                <DiscountBadge product={product} />       
              )} */}
            </div>

            {/* PREÇO ORIGINAL */}
            <span className="text-sm text-muted-foreground">
              De: {formatCurrency(Number(product.price))}
            </span>
          </div>

          {/* QUANTIDADE */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
