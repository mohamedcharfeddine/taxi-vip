import { SiGooglepodcasts } from "react-icons/si";
import { BsCalendar3 } from "react-icons/bs";
import { FaRoute } from "react-icons/fa";
import { MdAdsClick, MdGroups2 } from "react-icons/md";
import { BiUserCircle, BiPhoneCall } from "react-icons/bi";
import React from "react";

const Booking = () => {
  return (
    <>
      <section className="flex flex-col justify-center my-16 ">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex justify-center items-center gap-4">
            <SiGooglepodcasts size={32} />
            <span className="text-2xl font-bold">Boek uw taxi</span>
          </div>
          <span className="text-xl font-bold text-primary">Online</span>
        </div>
        <div className="flex justify-center items-center gap-28 text-justify mt-14 flex-col xl:flex-row">
          <form className="xl:w-2/5 mx-12 xl:-ml-10 font-medium text-base/loose text-secondary">
            <div className="grid md:grid-cols-2 md:gap-4">
              <div className="relative z-0 w-full mb-6 group">
                <div class="relative">
                  <input
                    type="text"
                    name="your-name"
                    id="your-name"
                    class="block font-normal py-3 px-3 w-full text-sm text-gray-900 bg-primary rounded-lg border-0 border-b-2 border-gray-300 appearance-none peer"
                    placeholder="Your Name"
                    required
                  />
                  <label
                    for="your-name"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Your Name
                  </label>
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <BiUserCircle size={24} color="Black" />
                  </div>
                </div>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <div class="relative">
                  <input
                    type="text"
                    name="allez_retour"
                    id="allez_retour"
                    class="block font-normal py-3 px-3 w-full text-sm text-gray-900 bg-primary rounded-lg border-0 border-b-2 border-gray-300 appearance-none peer"
                    placeholder="Allez/Retour"
                    required
                  />
                  <label
                    for="allez_retour"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Allez/Retour
                  </label>
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <MdAdsClick size={24} color="Black" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-4">
              <div className="relative z-0 w-full mb-6 group">
                <div class="relative">
                  <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    class="block font-normal py-3 px-3 w-full text-sm text-gray-900 bg-primary rounded-lg border-0 border-b-2 border-gray-300 appearance-none peer"
                    placeholder="Phone Number"
                    required
                  />
                  <label
                    for="phone_number"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Phone Number
                  </label>
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <BiPhoneCall size={24} color="Black" />
                  </div>
                </div>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <div class="relative">
                  <input
                    type="text"
                    name="passengers_number"
                    id="passengers_number"
                    class="block font-normal py-3 px-3 w-full text-sm text-gray-900 bg-primary rounded-lg border-0 border-b-2 border-gray-300 appearance-none peer"
                    placeholder="Passengers Number"
                    required
                  />
                  <label
                    for="passengers_number"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Passengers Number
                  </label>
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <MdGroups2 size={24} color="Black" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-4">
              <div className="relative z-0 w-full mb-6 group">
                <div class="relative">
                  <input
                    type="text"
                    name="start-destination"
                    id="start-destination"
                    class="block font-normal py-3 px-3 w-full text-sm text-gray-900 bg-primary rounded-lg border-0 border-b-2 border-gray-300 appearance-none peer"
                    placeholder="Start Destination"
                    required
                  />
                  <label
                    for="start-destination"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Start Destination
                  </label>
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <FaRoute size={24} color="Black" />
                  </div>
                </div>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <div class="relative">
                  <input
                    type="text"
                    name="end-destination"
                    id="end-destination"
                    class="block font-normal py-3 px-3 w-full text-sm text-gray-900 bg-primary rounded-lg border-0 border-b-2 border-gray-300 appearance-none peer"
                    placeholder="End Destination"
                    required
                  />
                  <label
                    for="end-destination"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    End Destination
                  </label>
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <FaRoute size={24} color="Black" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-4">
              <div className="relative z-0 w-full mb-6 group">
                <div class="relative">
                  <input
                    type="text"
                    name="select-date"
                    id="select-date"
                    class="block font-normal py-3 px-3 w-full text-sm text-gray-900 bg-primary rounded-lg border-0 border-b-2 border-gray-300 appearance-none peer"
                    placeholder="Select Date"
                    required
                  />
                  <label
                    for="select-date"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Select Date
                  </label>
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <BsCalendar3 size={24} color="Black" />
                  </div>
                </div>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <div class="relative">
                  <input
                    type="text"
                    name="select-time"
                    id="select-time"
                    class="block font-normal py-3 px-3 w-full text-sm text-gray-900 bg-primary rounded-lg border-0 border-b-2 border-gray-300 appearance-none peer"
                    placeholder="Select Time"
                    required
                  />
                  <label
                    for="select-time"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Select Time
                  </label>
                  <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <BsCalendar3 size={24} color="Black" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-1 md:gap-4">
              <div className="relative z-0 w-full mb-6 group">
                <div class="relative">
                  <input
                    type="text"
                    name="add-message"
                    id="add-message"
                    class="block font-normal py-3 px-3 w-full text-sm text-gray-900 bg-primary rounded-lg border-0 border-b-2 border-gray-300 appearance-none peer"
                    placeholder="Add a message"
                    required
                  />
                  <label
                    for="add-message"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                  >
                    Add a message
                  </label>
                  {/* <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <BsCalendar3 size={24} color="Black" />
                  </div> */}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="text-white bg-dark focus:ring-4 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Boek nu
            </button>
          </form>

          <div className="relative flex xl:h-[500px] xl:w-[500px] w-[250px] h-[250px] rounded-full bg-primary/50 justify-end before:absolute">
            <img
              className="z-10 xl:mr-6 -mt-5 mr-5 mb-5 "
              src="/assets/girl.png"
              width={500}
              height={500}
              type="image"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
