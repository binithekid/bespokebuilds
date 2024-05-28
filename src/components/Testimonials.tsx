import Logo from "../../public/checkatradelogo.png";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

const Testimonials = () => {
  return (
    <div className="w-full flex px-4 md:px-14 py-20 flex-col bg-gradient-to-br from-white via-slate-50 bg-teal-50">
      <div className="w-full items-center hidden md:flex flex-row justify-center">
        <h1 className="font-display font-bold text-2xl tracking-normal sm:text-4xl text-gray-800">
          Our Testimonials with
        </h1>
        <Image
          src={Logo}
          alt="Checkatrade"
          className="w-[16rem] -ml-2 object-cover hover:opacity-70 transition-all cursor-pointer"
        />
      </div>
      <div className="w-full items-center md:hidden flex flex-col justify-center">
        <h1 className="font-display font-bold text-2xl tracking-normal text-gray-800">
          Our Testimonials with
        </h1>
        <Image
          src={Logo}
          alt="Checkatrade"
          className="w-[16rem] -ml-2 object-cover hover:opacity-70 transition-all cursor-pointer"
        />
      </div>
      <div className="py-10 flex flex-col md:flex-row gap-3">
        <div className="md:w-1/3 w-full flex flex-col justify-between bg-white shadow rounded p-8">
          <div>
            <FaQuoteLeft className="text-blue-800 my-2" />
            <p className="text-sm text-gray-600">
              Our recent dealings with Bespoke Builds has been a breeze, this
              company are easy to deal with, very accommodating and
              professional. The Engineer who visited the site was knowledgeable
              friendly and professional, he even took the time to explain
              thoroughly any issues and how to deal with them.
            </p>
          </div>

          <div className="w-full mt-8 flex items-center justify-between">
            <p className="font-semibold">Robert Maxwell</p>
            <div className="flex  mt-2 flex-row gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        </div>
        <div className="md:w-1/3 w-full flex flex-col justify-between bg-white shadow rounded p-8">
          <div>
            <FaQuoteLeft className="text-blue-800 my-2" />
            <p className="text-sm text-gray-600">
              Very thorough test of our water services and the engineer was very
              helpful and informative. Would recommend this company for your
              water testing. I always value but never take for granted courtesy,
              being on time, being tidy, accurate estimates that are kept to.
              Thanks Lee and team!
            </p>
          </div>

          <div className="w-full mt-8 flex items-center justify-between">
            <p className="font-semibold">Maria Robinson</p>
            <div className="flex mt-2 flex-row gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        </div>
        <div className="md:w-1/3 w-full flex flex-col justify-between shadow bg-white rounded p-8">
          <div>
            <FaQuoteLeft className="text-blue-800 my-2" />
            <p className="text-sm text-gray-600">
              More Fantastic experience working with Lee at Bespoke Builds. I
              always value but never take for granted courtesy, being on time,
              being tidy, accurate estimates that are kept to. Thanks Lee and
              team - very happy with our new swimming pool boiler. Particularly
              in this hot weather!
            </p>
          </div>

          <div className="w-full mt-4 flex items-center justify-between">
            <p className="font-semibold">Kristina Bellis</p>
            <div className="flex flex-row gap-1">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
