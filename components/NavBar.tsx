import Link from "next/link";
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="mx-auto flex justify-between items-center py-4 px-6 sm:px-16 max-w-[1440px]">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Auto-plaza logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};

export default NavBar;
