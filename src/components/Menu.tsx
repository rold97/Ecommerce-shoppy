"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const menuLinks = [
    { link: "/", name: "Home" },
    { link: "/", name: "Shop" },
    { link: "/", name: "Deals" },
    { link: "/", name: "About" },
    { link: "/", name: "Contact" },
    { link: "/", name: "Logout" },
    { link: "/", name: "Cart(1)" },
  ];

  return (
    <div className="">
      <Image
        src="/menu.png"
        alt="menu icon"
        width={26}
        height={26}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute bg-black text-white left-0 top-16 w-full h-[calc(100vh-64px)] flex flex-col items-center justify-center gap-8 text-xl z-20">
          {menuLinks.map((link, i) => (
            <Link key={i} href={link.link}>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
