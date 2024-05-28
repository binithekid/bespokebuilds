import Image from "next/image";
import HeroImage from "../../public/heroright.png";
import { FaCheckCircle } from "react-icons/fa";
import Whatsapp from "../../public/WhatsApp_Logo.svg";
import Link from "next/link";
import HeroForm from "./HeroForm";

const Hero = () => {
  const handleCall = () => {
    const phoneNumber = "tel:+442086793330"; // Replace with the desired phone number
    window.location.href = phoneNumber;
  };

  return (
    <div className="w-full px-4 md:px-14 flex-col pb-4 md:pb-0 flex-wrap md:flex-row bg-gradient-to-br from-white via-gray-50 bg-blue-200 flex">
      <div className="md:w-1/2 w-full md:py-0 py-20 gap-2 justify-center flex flex-col">
        <p className="md:text-2xl text-xl text-gray-600">Welcome To</p>
        <div className="flex flex-row items-center">
          {/* <Image src={Logo} width={70} alt="Hero" /> */}
          <p className="md:text-4xl text-gray-800 text-3xl font-bold">
            BESPOKE <span className="font-normal">BUILDS</span>
          </p>
        </div>
        <p className="md:text-xl w-4/5 text-gray-600 text-lg">
          Installation and repair services for HVAC, boilers, electrical and
          water hygiene, for the South East and London.
        </p>
        <div className="flex pt-4 gap-2 flex-col">
          <p className="flex flex-row text-gray-800 md:text-base text-sm gap-2 items-center">
            <FaCheckCircle className="text-blue-900 text-xl" />
            Air Conditioning Services
          </p>
          <p className="flex flex-row text-gray-800 gap-2  md:text-base text-sm items-center">
            <FaCheckCircle className="text-blue-900 text-xl" />
            Refrigeration Services
          </p>
          <p className="flex flex-row text-gray-800 gap-2  md:text-base text-sm items-center">
            <FaCheckCircle className="text-blue-900 text-xl" />
            Water Hygiene
          </p>
          <p className="flex flex-row gap-2 text-gray-800 md:text-base text-sm items-center">
            <FaCheckCircle className="text-blue-900 text-xl" />
            Heating Services
          </p>
          <p className="flex flex-row gap-2 text-gray-800 md:text-base text-sm items-center">
            <FaCheckCircle className="text-blue-900 text-xl" />
            Electrical Services
          </p>
          <p className="flex flex-row gap-2 text-gray-800 md:text-base text-sm items-center">
            <FaCheckCircle className="text-blue-900 text-xl" />
            Local Exhaust Ventilation
          </p>{" "}
          <p className="flex flex-row gap-2 text-gray-800 md:text-base text-sm items-center">
            <FaCheckCircle className="text-blue-900 text-xl" />
            Catering Equipment
          </p>
        </div>
        <div className="flex flex-row pt-6 gap-4">
          {/* <Link href="/contact">
            <button className="border hover:opacity-70 transition-all text-blue-900 md:text-base text-sm py-3 px-3 md:px-3 rounded bg-white border-blue-900 font-semibold">
              Get a quote
            </button>
          </Link> */}
          <button
            onClick={handleCall}
            className="hover:opacity-70 transition-all md:text-base text-sm py-3 px-3 md:px-3 rounded text-white bg-blue-900 font-semibold"
          >
            0753 5957 179
          </button>
          {/* <button>
            <Image
              src={Whatsapp}
              alt="Hello"
              width={40}
              className="ml-1 hover:opacity-70 transition-all"
            />
          </button> */}
        </div>
      </div>
      <div className="w-1/2 hidden md:flex py-20 flex-col justify-between">
        <HeroForm />
      </div>
    </div>
  );
};

export default Hero;
