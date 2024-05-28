import Image from "next/image";
import Link from "next/link";
import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll ">
      <div className="flex gap-4 md:gap-8">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  );
};

export default CategoryList;
