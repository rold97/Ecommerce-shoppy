import Image from "next/image";
import Link from "next/link";

const ProductItem = () => {
  return (
    <Link
      href="/test"
      className="mt-12 w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
    >
      <div className="relative w-full h-80">
        <Image
          src="https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
        />
        <Image
          src="https://images.pexels.com/photos/242149/pexels-photo-242149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Product Name</span>
        <span className="font-semibold">$49</span>
      </div>
      <p className="text-sm text-gray-500">Description</p>
      <button className="rounded-2xl ring-1 ring-lightRed py-2 px-4 text-xs text-lightRed hover:bg-lightRed hover:text-white w-max transition-all duration-300">
        Add to Cart
      </button>
    </Link>
  );
};

export default ProductItem;
