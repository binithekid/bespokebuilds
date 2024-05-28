import { FaRegEye } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";

const AboutMidSection = () => {
  return (
    <div className="bg-gradient-to-br from-white via-gray-50 bg-teal-50 w-full relative">
      <div className="md:py-[7rem] py-10 px-4 md:px-14 inset-0 items-center gap-8 flex-col md:flex-row flex">
        <div className="md:w-[40%] w-full md:mr-10 flex flex-col">
          <h1 className="font-display font-bold text-2xl md:text-3xl tracking-normal text-gray-800">
            Why Choose RM Pestokill?
          </h1>
          <ul className="md:mt-6 mt-3 text-gray-800 flex-col flex gap-2 list-disc">
            <li className="ml-5">
              <span className="font-semibold">Expertise & Efficiency:</span> Our
              team boasts expertise in diverse pest control methods,
              guaranteeing efficient solutions for varied pest issues.
            </li>
            <li className="ml-5">
              <span className="font-semibold">Cutting-Edge Technology:</span> We
              employ innovative heat treatment techniques, ensuring swift and
              lasting results, particularly for bedbug infestations.
            </li>
            <li className="ml-5">
              <span className="font-semibold">Tailored Solutions:</span> From
              residential to commercial spaces, our tailored approaches cater to
              diverse needs, ensuring a pest-free environment.
            </li>
            <li className="ml-5">
              <span className="font-semibold">Reliable Service:</span>{" "}
              Prioritising your comfort and safety, we provide hassle-free,
              reliable pest eradication services across London and Sussex.
            </li>
          </ul>
        </div>
        <div className="md:w-[60%] w-full">
          <div className="flex flex-col w-full gap-4">
            <div className="w-full">
              <div className="bg-white shadow rounded p-8 gap-4 md:gap-8 flex items-center justify-center flex-col md:flex-row">
                <div className="p-3 flex items-center justify-center bg-blue-900 rounded-full">
                  <FaRegEye className="text-3xl text-white" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <h2 className="font-display font-bold text-center md:text-left text-2xl tracking-normal text-gray-800">
                    Our Vision
                  </h2>
                  <p className="text-center md:text-base text-sm md:text-left text-gray-800">
                    Striving to be the leading pest control authority in London
                    and surrounding areas, committed to delivering unparalleled
                    service, satisfaction, and peace of mind to our valued
                    clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-white shadow rounded p-8 gap-4 md:gap-8 flex items-center justify-center flex-col md:flex-row">
                <div className="p-3 flex items-center justify-center bg-blue-900 rounded-full">
                  <FaRegLightbulb className="text-3xl text-white" />
                </div>{" "}
                <div className="flex flex-col gap-2 w-full">
                  <h2 className="font-display text-center md:text-left font-bold text-2xl tracking-normal text-gray-800">
                    Our Mission
                  </h2>
                  <p className="text-center md:text-base text-sm md:text-left text-gray-800">
                    To deliver exceptional pest control solutions, utilising
                    expertise and cutting-edge techniques, ensuring a pest-free
                    environment for our clients promptly and reliably.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-white shadow rounded p-8 gap-4 md:gap-8 flex items-center justify-center flex-col md:flex-row">
                <div className="p-3 flex items-center justify-center bg-blue-900 rounded-full">
                  <FaRegHandshake className="text-3xl text-white" />
                </div>{" "}
                <div className="flex flex-col gap-2 w-full">
                  <h2 className="font-display text-center md:text-left font-bold text-2xl tracking-normal text-gray-800">
                    Our Value
                  </h2>
                  <p className="text-center md:text-base text-sm md:text-left text-gray-800">
                    Dedication to expertise, innovation, reliability, and
                    customer satisfaction drives us as we aim to provide
                    efficient, effective, and hassle-free pest control services
                    to all our clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMidSection;
