import { formatCurrencyString } from "use-shopping-cart";

import Button from "./Button";
import UniversalLink from "./UniversalLink";
import groq from "groq";
import { ImageQuery, MainImage } from "./MainImage";
import { Icon } from "./ui/Icon";
import type { z } from "zod";
import type { modifiedProductExcerptZ } from "./ProductList";

export const ProductCardQuery = groq`
	_type == "product" => {
		_type,
		_id,
		_key,
		title,
		blurb,
		"slug": slug.current,
		mainImage {
			${ImageQuery}
		},
		defaultProductVariant {
			_key,
			isAvailable,
			price
		},
		variants[] {
			_key
		},
		categories[]->{
			_id,
			_type,
			title,
			"slug": slug.current,
		},
		tags
	}
`;

function ProductCard({ product }: { product: z.infer<typeof modifiedProductExcerptZ> }) {
  const { defaultProductVariant } = product;
  return (
    <div className="bg-cream-50 rounded-md overflow-hidden shadow-md hover:shadow-lg transition-all duration-150">
      <UniversalLink to={product?.slug ||"/shop/"}>
        {!defaultProductVariant?.isAvailable && <div>Sold Out</div>}
        <div className="grid">
          {product.mainImage ? (
            <MainImage
              className="w-full aspect-1 object-cover row-start-1 col-start-1 z-0"
              image={product?.mainImage || ""}
              alt={product?.mainImage?.asset?.altText || product?.title || ""}
            />
          ) : (
            <div className="aspect-1 w-full bg-teal-50 grid place-items-center row-start-1 col-start-1 z-0">
              <span className="flex items-center gap-2">
                <Icon name="camera-off" />
                No Image
              </span>
            </div>
          )}
          <h4 className="px-2 text-center m-0 pb-4 pt-8 text-white row-start-1 col-start-1 z-10 self-end bg-gradient-to-t from-rust-900   to-transparent">
            {product?.title}
          </h4>
        </div>
      </UniversalLink>
      <div className="p-4 text-center">
        <p className="mb-2">
          {formatCurrencyString({
            value: product?.defaultProductVariant?.price || 0,
            currency: "USD",
          })}
        </p>
        {product?.variants && product.variants.length > 0 ? (
          <Button
            to={product?.slug ?? "" }
            bgColor="red"
            className="button-sm mt-0"
          >
            Select Options
          </Button>
        ) : (
          <Button
            to={product?.slug || "/shop/"}
            className="button-sm mt-0"
            bgColor="transparent"
          >
            See Details
          </Button>
        )}
      </div>{" "}
    </div>
  );
}

export default ProductCard;
