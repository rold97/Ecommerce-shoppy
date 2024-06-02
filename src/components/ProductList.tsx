import { wixClientServer } from "@/lib/wixClientServer";
import ProductItem from "./ProductItem";
import { products } from "@wix/stores";
import Link from "next/link";
import Image from "next/image";
import DOMPurify from "isomorphic-dompurify";

type ProductListT = {
  categoryId: string;
  limit?: number;
};

const ProductList = async ({ categoryId, limit }: ProductListT) => {
  const wixClient = await wixClientServer();
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || 20)
    .find();

  console.log(res);

  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product) => (
        <Link
          href={`/${product.slug}`}
          className="mt-12 w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.price?.price}</span>
          </div>
          {product.description && (
            <p
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(product.description || ""),
              }}
            ></p>
          )}

          <button className="rounded-2xl ring-1 ring-lightRed py-2 px-4 text-xs text-lightRed hover:bg-lightRed hover:text-white w-max transition-all duration-300">
            Add to Cart
          </button>
        </Link>
      ))}

      {/* <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem /> */}
    </div>
  );
};

export default ProductList;
