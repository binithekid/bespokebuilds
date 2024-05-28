import { FaHouseChimney } from "react-icons/fa6";
import { IoBusiness } from "react-icons/io5";
import { MdPestControl } from "react-icons/md";
import { GiSmokeBomb } from "react-icons/gi";

const ServicesSection = () => {
  return (
    <div className="HeroHeight w-full relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to left, rgba(240, 253, 250, 0), #1e3a8a), url(/herosection.jpeg)",
        }}
      />
      <div className="absolute md:px-14 px-4 md:py-0 py-6 inset-0 justify-center items-center flex-col md:flex-row flex">
        <div className="md:w-[40%] md:pb-10 w-full items-center md:mr-10 flex flex-col">
          <h1 className="text-white tracking-wide font-light md:text-xl">
            WHAT CAN WE DO
          </h1>
          <h1 className="text-white mt-2 text-center text-2xl md:text-4xl font-bold">
            HERE ARE A LIST OF SERVICES THAT WE OFFER
          </h1>
        </div>
        <div className="md:w-[60%] py-10 md:py-20 w-full">
          <div className="flex md:flex-row flex-col w-full gap-4">
            <div className="md:w-1/2 flex w-full">
              <div className="bg-white shadow rounded p-8 gap-3 flex items-center justify-center flex-col">
                <GiSmokeBomb className="text-4xl text-blue-900" />
                <p className="text-xl text-gray-800 font-semibold">
                  Steam Treatment
                </p>
                <p className="md:text-base text-gray-600 text-sm text-center">
                  At RM Pestokill, harnessing steam&apos;s power to eradicate
                  pests, Ensuring a thorough extermination, leaving no unwelcome
                  guests.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-white shadow rounded p-8 gap-3 flex items-center justify-center flex-col">
                <MdPestControl className="text-4xl text-blue-900" />
                <p className="text-xl text-gray-800 font-semibold">
                  Pest Control
                </p>
                <p className="md:text-base text-gray-600 text-sm text-center">
                  RM Pestokill&apos;s Expertise, a shield against Pest
                  infestation&apos;s, Comprehensive Pest Control London
                  Solutions, securing a pest-free life.
                </p>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row mt-4 flex-col w-full gap-4">
            <div className="md:w-1/2 flex w-full">
              <div className="bg-white shadow rounded p-8 gap-3 flex items-center justify-center flex-col">
                <FaHouseChimney className="text-4xl text-blue-900" />{" "}
                <p className="text-xl text-gray-800 font-semibold">
                  Residential Services
                </p>
                <p className="md:text-base text-gray-600  text-sm text-center">
                  Residential Pest Control Services consists of treating your
                  home both inside and outside if required to shield your home
                  against its exclusive pest invaders.
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex w-full">
              <div className="bg-white shadow rounded p-8 gap-3 flex items-center justify-center flex-col">
                <IoBusiness className="text-4xl text-blue-900" />{" "}
                <p className="text-xl text-gray-800 font-semibold">
                  Commercial Services
                </p>
                <p className="md:text-base text-gray-600  text-sm text-center">
                  Commercial Pest Control Services consists of treating your
                  business or other premesis both inside and outside if required
                  to shield your business against pest invaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
