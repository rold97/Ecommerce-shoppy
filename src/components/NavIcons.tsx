"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ProfileModal from "./Modals/ProfileModal";
import CartModal from "./Modals/CartModal";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const route = useRouter();

  const isLoggedIn = false;

  const handleProfile = () => {
    if (!isLoggedIn) {
      route.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt="profile icon"
        width={22}
        height={22}
        className="cursor-pointer "
        onClick={handleProfile}
      />
      {isProfileOpen && <ProfileModal />}

      <Image
        src="/notification.png"
        alt="notification icon"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div className="cursor-pointer relative">
        <Image
          src="/cart.png"
          alt="cart icon"
          width={22}
          height={22}
          onClick={() => setIsCartOpen((prev) => !prev)}
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-lightRed rounded-full flex items-center justify-center text-sm text-white">
          2
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;
