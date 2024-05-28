import Link from "next/link";
import React, { FC } from "react";

const ProfileModal = () => {
  return (
    <div className="absolute p-4 rounded-xl top-12 left-0 text-sm bg-white shadow-[0_3px_10px_rgb(0,0,0,.2)] z-20">
      <Link href="/">Profile</Link>
      <div className="mt-2 cursor-pointer">Logout</div>
    </div>
  );
};

export default ProfileModal;
