"use client";

import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/1350197/pexels-photo-1350197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/1452701/pexels-photo-1452701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/1556796/pexels-photo-1556796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          loading="lazy"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer hover:scale-110 transition-scale duration-200"
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=""
              loading="lazy"
              fill
              sizes="30vw"
              className="object-cover rounded-md  "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
