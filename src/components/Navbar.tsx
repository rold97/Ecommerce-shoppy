import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  const links = [
    { link: "/", title: "Homepage" },
    { link: "/", title: "Shop" },
    { link: "/", title: "Deals" },
    { link: "/", title: "About" },
    { link: "/", title: "Contact" },
  ];

  return (
    <div className="h-16 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <p className="text-2xl tracking-wide font-medium">SHOPPY</p>
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCREENS */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex gap-2 items-center">
            <Image src="/logo.png" alt="logo" width={24} height={24} />
            <p className="text-2xl tracking-wide font-medium">SHOPPY</p>
          </Link>
          {/* LINKS */}
          <div className="hidden xl:flex gap-4">
            {links.map((link, i) => (
              <Link key={i} href={link.link}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
