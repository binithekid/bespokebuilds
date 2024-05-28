import { MdEmail } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { TbFireExtinguisher } from "react-icons/tb";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const MidSection = () => {
  return (
    <div className="w-full items-center justify-center bg-white flex py-20 px-4 md:px-14 flex-col">
      <div className="w-full flex items-center justify-center">
        <p className="font-display text-center font-bold text-2xl tracking-normal sm:text-3xl text-gray-800">
          Your Trusted Partner in Building Facilities Solutions
        </p>
      </div>

      <div className="w-full justify-center flex pt-6 gap-8 md:gap-4 flex-col md:flex-row">
        <div className="md:w-1/4 w-full flex items-center flex-col gap-3 pt-8">
          <div className="p-[0.8rem] flex items-center w-max justify-center rounded-full bg-blue-900">
            <LuClipboardList className="text-white text-3xl" />
          </div>
          <p className="text-2xl text-center text-gray-800 font-medium">
            {" "}
            Air Conditioning A Problem?​
          </p>
          <p className="px-6 text-center text-sm text-gray-600">
            Keep your cool with our heating and cooling solutions for office and
            commercial buildings​
          </p>
        </div>
        <div className="md:w-1/4 w-full flex items-center flex-col gap-3 pt-8">
          <div className="p-[0.8rem] flex items-center w-max justify-center rounded-full bg-red-800">
            <TbFireExtinguisher className="text-white text-3xl" />
          </div>
          <p className="text-2xl text-gray-800 font-medium text-center">
            Don't Sweat On A Faulty Boiler
          </p>
          <p className="px-6 text-center text-sm text-gray-600">
            We'll help keep you and your staff cosy (or cool) with our expert
            boiler & heating installation and maintenance
          </p>
        </div>
        <div className="md:w-1/4 w-full flex items-center flex-col gap-3 pt-8">
          <div className="p-[1rem] flex items-center w-max justify-center rounded-full bg-blue-900">
            <FaMagnifyingGlass className="text-white text-2xl" />
          </div>
          <p className="text-2xl text-gray-800 font-medium">Plumbing Issue?</p>
          <p className="px-6 text-center text-sm text-gray-600">
            We support our commercial industrial clients with all their plumbing
            needs from large installation to servicing
          </p>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
