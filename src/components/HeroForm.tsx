import React, { useState } from "react";
// import { useForm, ValidationError } from "@formspree/react";

const HeroForm = () => {
  // const [state, handleSubmit] = useForm("xzblnglk");

  return (
    <div className="relative z-10 flex mt-10 md:mt-0 items-center justify-center">
      <form
        method="POST"
        // onSubmit={handleSubmit}
        className="relative bg-gray-50 w-full py-7 shadow px-4 md:px-6 rounded"
      >
        {/* <p className="md:text-3xl text-xl font-semibold text-white py-2 md:py-4 text-center mb-6 rounded-sm bg-red-700 uppercase">
          Get a Quote
        </p> */}
        <div className="flex flex-col">
          <p className="text-gray-900 text-[13px] md:text-sm">
            What type of assistance do you need?
          </p>
          <select
            id="worktype"
            name="worktype"
            required
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          >
            <option value="">Choose an option</option>
            <option value="emergency">Air Conditioning Services</option>
            <option value="repair">Refrigeration Services</option>
            <option value="boiler/central heating">Water Hygiene</option>
            <option value="plumbing">Heating Services</option>
            <option value="bathroom installation">Electrical Services</option>
            <option value="guttering">Local Exhaust Ventilation</option>
            <option value="drainage">Catering Equipment</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">
            When would you like the service?
          </p>
          <select
            id="assistance"
            name="assistance"
            required
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          >
            <option value="">Choose an option</option>
            <option value="urgently">Urgently</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="this week">This Week</option>
            <option value="next week">Next Week</option>
          </select>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">Name</p>
          <input
            id="name"
            type="name"
            name="name"
            // value={name}
            required
            // onChange={(event) => setName(event.target.value)}
            placeholder="John Smith"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">Email</p>
          <input
            // value={email}
            // onChange={(event) => setEmail(event.target.value)}
            id="email"
            type="email"
            name="email"
            required
            placeholder="Johnsmith@email.com"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">Phone Number</p>
          <input
            id="tel"
            name="phone number"
            type="tel"
            // value={phoneNumber}
            // onChange={(event) => setPhoneNumber(event.target.value)}
            // pattern="[0-9]{11}"
            required
            placeholder="07595 123 3456"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">Address</p>
          <input
            id="address"
            name="address"
            // value={phoneNumber}
            // onChange={(event) => setPhoneNumber(event.target.value)}
            // pattern="[0-9]{11}"
            required
            placeholder="1 Buckingham Palace Road"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">Postcode</p>
          <input
            id="postcode"
            name="postcode"
            // value={phoneNumber}
            // onChange={(event) => setPhoneNumber(event.target.value)}
            // pattern="[0-9]{11}"
            required
            placeholder="W11 7HA"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>

        <div className="flex flex-col mt-4">
          <p className="text-gray-900 text-[13px] md:text-sm">
            Your message here
          </p>
          <textarea
            required
            // value={message}
            // onChange={(event) => setMessage(event.target.value)}
            id="message"
            name="message"
            // name="email"
            rows={5}
            placeholder="Tell us about your plumbing issue in as much detail as possible"
            className="border rounded shadow-sm border-gray-200 py-[4px] md:mt-1 text-[13px] md:text-sm px-2 w-full"
          />
        </div>
        <button className="mt-6 w-full bg-blue-900 py-3 text-white font-semibold rounded text-sm md:text-base hover:opacity-80 transition-all">
          SEND MESSAGE
        </button>
        {/* {state.succeeded ? (
          <p className="mt-4 text-xs text-gray-700 font-light w-full text-center">
            Thank you, Our team will call you shortly to comfirm your booking
          </p>
        ) : (
          <p className="mt-4 text-sm text-gray-700 font-light w-full text-center">
            🔒 Your information is 100% secure
          </p>
        )} */}
      </form>
    </div>
  );
};

export default HeroForm;
