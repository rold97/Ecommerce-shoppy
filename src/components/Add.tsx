"use client";
import { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  //   TEMPORARY
  const stock = 4;

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4>Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 py-2 px-4 rounded-3xl items-center justify-between w-32 ring-1 ring-black/10">
            <button
              className="cursor-pointer text-xl border-r border-black/70 pr-4"
              onClick={() => handleQuantity("d")}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl border-l border-black/70 pl-4"
              onClick={() => handleQuantity("i")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">4 items</span> left!
            <br /> {"Don't"} miss it
          </div>
        </div>
        <button className="w-36 text-sm rounded-3xl ring-1 ring-lightRed text-lightRed py-2 px-4 hover:bg-lightRed hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:text-white disabled:ring-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
