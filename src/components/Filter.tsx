import React from "react";

const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-3xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Type</option>
          <option value="physical">Physycal</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <select
          name="size"
          id=""
          className="py-2 px-4 rounded-3xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Size</option>

          <option value="">Size</option>
        </select>
        <select
          name="color"
          id=""
          className="py-2 px-4 rounded-3xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Color</option>

          <option value="color">Color</option>
        </select>
        <select
          name="category"
          id=""
          className="py-2 px-4 rounded-3xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Category</option>

          <option value="category">Category</option>
        </select>
        <select
          name="filters"
          id=""
          className="py-2 px-4 rounded-3xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>All filters</option>
        </select>
      </div>
      <div className="">
        <select
          name="py-2 px-4 rounded-3xl text-xs font-medium bg-white ring-1 ring-gray-400"
          id=""
        >
          <option>Sort By</option>
          <option value="">Price (low to hight)</option>
          <option value="">Price (hight to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
