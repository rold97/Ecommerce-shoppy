import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <p className="text-2xl tracking-wide font-medium">SHOPPY</p>
          </Link>
          <p>
            2352 Winding Way, Cental Plaza, Willowbrook, CA 90210, United States
          </p>
          <span className="font-semobold">hello@shoppy.com</span>
          <span className="font-semobold">+ 1 234 567 890</span>
          <div className="flex gap-6">
            <Image
              src="/facebook.png"
              alt="facebook icon"
              width={16}
              height={16}
            />
            <Image
              src="/instagram.png"
              alt="instagram icon"
              width={16}
              height={16}
            />
            <Image
              src="/youtube.png"
              alt="youtube icon"
              width={16}
              height={16}
            />
            <Image
              src="/pinterest.png"
              alt="pinterest icon"
              width={16}
              height={16}
            />
            <Image
              src="/x.png"
              alt="x className='' icon"
              width={16}
              height={16}
            />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between ">
            <h1 className="uppercase font-medium text-lg">company</h1>
            <div className="flex flex-col gap-6 ">
              <Link href="">About us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between ">
            <h1 className="uppercase font-medium text-lg">shop</h1>
            <div className="flex flex-col gap-6 ">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between ">
            <h1 className="uppercase font-medium text-lg">help</h1>
            <div className="flex flex-col gap-6 ">
              <Link href="">Customer Service</Link>
              <Link href="">My account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Cards</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg uppercase">subscribe</h1>
          <p>
            Be the first to get the latest new about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email adress"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lightRed text-white uppercase">
              join
            </button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image
              src="/discover.png"
              alt="discover icon"
              width={40}
              height={20}
            />
            <Image src="/skrill.png" alt="skrill icon" width={40} height={20} />
            <Image src="/paypal.png" alt="paypal icon" width={40} height={20} />
            <Image
              src="/mastercard.png"
              alt="mastercard icon"
              width={40}
              height={20}
            />
            <Image src="/visa.png" alt="visa icon" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div>&#169; All rights reserved | 2024 | SHOPPY</div>
        <div className="flex flex-col gap-x-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">United States | English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
