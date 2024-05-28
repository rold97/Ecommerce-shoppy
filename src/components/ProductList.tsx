import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default ProductList;
