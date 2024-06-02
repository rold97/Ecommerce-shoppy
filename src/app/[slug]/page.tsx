import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import React from "react";

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          tempora, ullam excepturi non quasi eligendi nulla, voluptas vel veniam
          ipsa, error assumenda est doloribus. Temporibus nesciunt totam
          assumenda deleniti obcaecati!
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex gap-4 items-center">
          <h3 className="text-xl text-gray-500 line-through">$49</h3>
          <h2 className="text-2xl font-medium">$39</h2>
        </div>
        <div className="h-[2px] bg-gray-100" />
        <CustomizeProducts />
        <Add />
        <div className="h-[2px] bg-gray-100" />
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam
            laboriosam molestiae rem similique quam fugiat, quasi alias, harum a
            quo debitis quod quos cumque ipsam consectetur adipisci quas
            repudiandae?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam
            laboriosam molestiae rem similique quam fugiat, quasi alias, harum a
            quo debitis quod quos cumque ipsam consectetur adipisci quas
            repudiandae?
          </p>
        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo veniam
            laboriosam molestiae rem similique quam fugiat, quasi alias, harum a
            quo debitis quod quos cumque ipsam consectetur adipisci quas
            repudiandae?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
