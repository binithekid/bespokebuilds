import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/bespoketransparent.png";
import { useEffect, useState, useRef } from "react";
import Sidebar from "./Sidebar";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";

const MobileNavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const ref: React.MutableRefObject<null | HTMLDivElement> = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowSidebar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showSidebar]);

  return (
    <>
      <div className="md:hidden flex shadow z-50 w-full bg-gradient-to-r from-blue-900 border-b border-gray-400 to-blue-500 items-center justify-center flex-col">
        <div className="pt-2 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full flex py-2 items-center justify-between"
          >
            <Link href="/">
              <div className="flex flex-row gap-2 items-center">
                <Image src={Logo} alt="Logo" width={100} />
              </div>
            </Link>
            {/* <div ref={ref}>
              <button
                onClick={() => setShowSidebar(true)}
                className="text-black"
              >
                <RxHamburgerMenu className="text-2xl" />
              </button>
            </div> */}
          </motion.div>
        </div>
      </div>
      {/* <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} /> */}
    </>
  );
};

export default MobileNavBar;
