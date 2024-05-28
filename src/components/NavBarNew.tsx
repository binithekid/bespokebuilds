import { useState } from "react";
import Logo from "../../public/bespoketransparent.png";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

const NavBarNew = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 border-b border-gray-400 to-blue-500 shadow-lg w-full px-14 hidden md:flex items-center justify-between">
      <Link href="/">
        <div className="hover:opacity-60 transition-all flex -ml-1 flex-row items-center gap-2">
          <Image src={Logo} width={100} alt="Logo" />
          {/* <p className="font-bold">
            RM <span className="font-normal">PESTOKILL</span>
          </p> */}
        </div>
      </Link>
      <nav>
        <div className="flex uppercase text-white font-medium text-sm flex-row gap-10">
          <Link href="/">
            <p className="cursor-pointer transition-all hover:text-blue-600">
              Home
            </p>
          </Link>

          <Link href="/services">
            <button className="cursor-pointer flex flex-row items-center gap-1 uppercase transition-all hover:text-blue-600">
              TESTIMONIALS
            </button>
          </Link>

          <Link href="/about">
            <p className="cursor-pointer transition-all hover:text-blue-600">
              FAQs
            </p>
          </Link>

          {/* <Link href="/contact">
            <p className="cursor-pointer transition-all hover:text-blue-600">
              Contact
            </p>
          </Link> */}
        </div>
      </nav>
    </header>
  );
};

export default NavBarNew;
