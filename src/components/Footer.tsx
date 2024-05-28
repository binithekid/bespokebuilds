import React from "react";
import Image from "next/image";
import { FiTwitter, FiMail } from "react-icons/fi";
import Link from "next/link";
import Logo from "../../public/rmlogo.png";

const Footer = () => {
  return (
    <div className="flex justify-center border-t bg-gradient-to-br from-white via-gray-50 bg-slate-200 items-center flex-col">
      <Link href="/">
        <div className="flex pt-8 flex-row items-center gap-2">
          <h1 className="font-display font-bold text-xl">
            BESPOKE <span className="font-normal">BUILDS</span>
          </h1>
        </div>
      </Link>
      <div className="py-2 md:text-md text-sm flex flex-row gap-8">
        <Link href="/about">
          <p className="text-gray-600 font-uncut tracking-tight">About</p>
        </Link>
        <Link href="/contact">
          <p className="text-gray-600 font-uncut tracking-tight">Contact</p>
        </Link>
        <Link href="/services">
          <p className="text-gray-600 font-uncut tracking-tight">Services</p>
        </Link>
      </div>
      <div className="py-1 flex flex-row gap-8">
        <Link href="">
          <FiTwitter className="text-gray-500 text-md md:text-xl" />
        </Link>
        <Link href="mailto:aimhireai@gmail.com">
          <FiMail className="text-gray-500 text-md md:text-xl" />
        </Link>
      </div>
      <div className="py-2 flex flex-row gap-8 mb-4">
        <p className="text-xs text-gray-600 font-uncut tracking-tight">
          © 2024 Bespoke Builds. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
