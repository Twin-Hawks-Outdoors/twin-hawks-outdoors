import { productExcerptZ, type ProductDoc } from "types/product";
import ProductCard from "./ProductCard";
import { z } from "zod";

export const modifiedProductExcerptZ = productExcerptZ
  .omit({ defaultProductVariant: true, variants: true })
  .extend({
    defaultProductVariant: z.object({
      isAvailable: z.boolean(),
      price: z.number(),
    }),
    variants: z
      .array(z.object({ _key: z.string().nullish() }).nullish())
      .nullish(),
  });

const productsArrayZ = z.array(modifiedProductExcerptZ);

type ProductExcerptArray = z.infer<typeof productsArrayZ>;

export function ProductList({ products }: { products: ProductExcerptArray }) {
  return (
    <div className="grid gap-8 @md:grid-cols-2 @3xl:grid-cols-3 mx-auto">
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
