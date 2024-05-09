import React, { useState } from "react";
import roombanner from '../assets/rooms/room.jpg'
import room1 from '../assets/rooms/room-01.jpg'
import room2 from '../assets/rooms/room-02.jpg'
import room3 from '../assets/rooms/room-03.jpg'
import room4 from '../assets/rooms/room-04.jpg'
import room5 from '../assets/rooms/room-05.jpg'
import room6 from '../assets/rooms/room-06.jpg'
import DatePicker from "react-datepicker";
import { MdChildCare } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineBedroomParent } from "react-icons/md";

const Room = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [checkIn,setCheckIn]=useState(new Date());
  const [checkOut,setCheckOut]=useState(new Date());

  const handleAdultDecrease = () => {
    if (adultCount > 1) {
      setAdultCount(adultCount - 1);
    }
  };

  const handleAdultIncrease = () => {
    setAdultCount(adultCount + 1);
  };
  const handleChildrenDecrease = () => {
    if (childrenCount > 0) {
      setChildrenCount(childrenCount - 1);
    }
  };

  const handleChildrenIncrease = () => {
    setChildrenCount(childrenCount + 1);
  };
  return (
    <div>
      <div
        className=" relative w-full bg-no-repeat h-[234px] bg-center  contrast-125  md:h-[234px] md:bg-cover lg:h-[234px] lg:bg-cover "
        style={{ backgroundImage: `url(${roombanner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 ">
          <h1 className="text-center text-white tracking-wide font-normal text-5xl  pt-20 font-barlow-condensed ">
            ROOMS
          </h1>
          <div className="absolute bg-white rounded-lg shadow-md sm:w-96 md:w-[768px] lg:w-[1100px] mx-10 my-10 flex flex-col sm:flex-col md:flex-row lg:flex-row gap-4 p-8 md:h-[120px] lg:h-[120px] md:mx-6 md:my-6 ">
            <DatePicker
              className="border-2 border-gray-300 p-2 w-full text-black rounded-md md:h-[45px] lg:h-[45px] "
              placeholderText="Check in"
              dateFormat="dd/MM/yyyy"
              isClearable
              selected={checkIn}
              minDate={new Date()}
              onChange={(e)=>setCheckIn(e)}
            />

            <DatePicker
              className="border-2 border-gray-300 p-2 w-full rounded-md md:h-[45px] lg:h-[45px]"
              placeholderText="Check out"
              dateFormat="dd/MM/yyyy"
              isClearable
              selected={checkOut}
              onChange={(e)=>setCheckOut(e)}
            />

            <div className="flex items-center justify-between w-full sm:w-48 md:w-64 lg:w-64 border-2 md:h-[45px] lg:h-[45px] border-gray-300 rounded-md px-3 ">
              <span className="text-gray-400">Adult</span>
              <button
                className="text-gray-500 focus:outline-none"
                onClick={handleAdultDecrease}
              >
                -
              </button>
              <span className="text-gray-700">{adultCount}</span>
              <button
                className="text-gray-500 focus:outline-none"
                onClick={handleAdultIncrease}
              >
                +
              </button>
            </div>

            <div className="flex items-center justify-between  sm:w-48 md:w-64 lg:w-64 border-2 border-gray-300 rounded-md px-3 md:h-[45px] lg:h-[45px] ">
              <span className="text-gray-400">Children</span>
              <button
                className="text-gray-500 focus:outline-none"
                onClick={handleChildrenDecrease}
              >
                -
              </button>
              <span className="text-gray-700">{childrenCount}</span>
              <button
                className="text-gray-500 focus:outline-none"
                onClick={handleChildrenIncrease}
              >
                +
              </button>
            </div>

            <button
              type="submit"
              className="bg-[#0f97aa] text-white px-4 py-2 rounded-md whitespace-nowrap md:h-[45px] lg:h-[45px] "
            >
              Check Availability
            </button>
          </div>
        </div>
      </div>

      <div className="mt-64 p-7 sm:mt-52 sm:p-10 md:mt-40 lg:mt-10 ">
        <h1 className="text-4xl font-barlow-condensed font-semibold">
          DISCOVER OUR ROOMS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3   p-2 sm:p-8 gap-8 ">
          <div className="rounded-md shadow-md">
            <img src={room1} alt="VIP Room" />
            <div className="flex justify-between p-3">
              <h2 className="text-2xl font-barlow-condensed font-semibold">
                VIP Room
              </h2>
              <span className="border-2 border-[#009db5] p-1 rounded-sm text-xs font-medium text-[#009db5]">
                $300/night
              </span>
            </div>
            <div className="flex gap-2 p-2 flex-wrap sm:flex-nowrap ">
              <span className="flex align-middle gap-1  text-[#009db5] whitespace-nowrap rounded-sm text-sm bg-slate-100 p-2">
                <MdChildCare fontSize={"18px"} />3 Children
              </span>
              <span className="flex align-middle gap-1 whitespace-nowrap text-sm  text-[#009db5] rounded-sm bg-slate-100 p-2">
                <IoIosPerson fontSize={"18px"} className="text-[#009db5]" />5
                Adult
              </span>
              <span className="flex align-middle gap-1  text-[#009db5] text-sm rounded-sm bg-slate-100  whitespace-nowrap p-2">
                <MdOutlineBedroomParent
                  fontSize={"22px"}
                  className="text-[#009db5]"
                />
                250 sqft
              </span>
            </div>
          </div>
          <div className="rounded-md shadow-md">
            <img src={room2} alt='Love Room'/>
            <div className="flex justify-between p-3">
              <h2 className="text-2xl font-barlow-condensed font-semibold">
                Love Room
              </h2>
              <span className="border-2 border-[#009db5] p-1 rounded-sm text-xs font-medium text-[#009db5]">
                $100/night
              </span>
            </div>
            <div className="flex gap-2 p-2 flex-wrap sm:flex-nowrap ">
              <span className="flex align-middle gap-1 text-[#009db5] whitespace-nowrap rounded-sm text-sm bg-slate-100 p-2">
                <MdChildCare fontSize={"18px"} />1 Children
              </span>
              <span className="flex align-middle gap-1 whitespace-nowrap text-sm  text-[#009db5] rounded-sm bg-slate-100 p-2">
                <IoIosPerson fontSize={"18px"} className="text-[#009db5]" />2
                Adult
              </span>
              <span className="flex align-middle gap-1  text-[#009db5] text-sm rounded-sm bg-slate-100  whitespace-nowrap p-2">
                <MdOutlineBedroomParent
                  fontSize={"22px"}
                  className="text-[#009db5]"
                />
                30 sqft
              </span>
            </div>
          </div>
          <div className="rounded-md shadow-md">
            <img src={room3} alt="Asia Room"/>
            <div className="flex justify-between p-3 ">
              <h2 className="text-2xl font-barlow-condensed font-semibold whitespace-nowrap">
                Asia Room
              </h2>
              <span className="border-2 border-[#009db5] p-1 rounded-sm text-xs font-medium text-[#009db5]">
                $150/night
              </span>
            </div>
            <div className="flex gap-2 p-2 flex-wrap sm:flex-nowrap">
              <span className="flex align-middle gap-1 text-[#009db5] whitespace-nowrap rounded-sm text-sm bg-slate-100 p-2">
                <MdChildCare fontSize={"18px"} />2 Children
              </span>
              <span className="flex align-middle gap-1 whitespace-nowrap text-sm  text-[#009db5] rounded-sm bg-slate-100 p-2">
                <IoIosPerson fontSize={"18px"} className="text-[#009db5]" />2
                Adult
              </span>
              <span className="flex align-middle gap-1  text-[#009db5] text-sm rounded-sm bg-slate-100  whitespace-nowrap p-2">
                <MdOutlineBedroomParent
                  fontSize={"22px"}
                  className="text-[#009db5]"
                />
                120 sqft
              </span>
            </div>
          </div>
          <div className="rounded-md shadow-md" >
            <img src={room4} alt='Vintage Room'/>
            <div className="flex justify-between p-3">
              <h2 className="text-2xl font-barlow-condensed font-semibold">
                Vintage Room
              </h2>
              <span className="border-2 border-[#009db5] p-1 rounded-sm text-xs font-medium text-[#009db5]">
                $100/night
              </span>
            </div>
            <div className="flex gap-2 p-2 flex-wrap sm:flex-nowrap">
              <span className="flex align-middle gap-1 text-[#009db5] whitespace-nowrap rounded-sm text-sm bg-slate-100 p-2">
                <MdChildCare fontSize={"18px"} />1 Children
              </span>
              <span className="flex align-middle gap-1 whitespace-nowrap text-sm  text-[#009db5] rounded-sm bg-slate-100 p-2">
                <IoIosPerson fontSize={"18px"} className="text-[#009db5]" />2
                Adult
              </span>
              <span className="flex align-middle gap-1  text-[#009db5] text-sm rounded-sm bg-slate-100  whitespace-nowrap p-2">
                <MdOutlineBedroomParent
                  fontSize={"22px"}
                  className="text-[#009db5]"
                />
                120 sqft
              </span>
            </div>
          </div>
          <div className="rounded-md shadow-md">
            <img src={room5} alt="Delexu Room"/>
            <div className="flex justify-between p-3">
              <h2 className="text-2xl font-barlow-condensed font-semibold">
                Deluxe Room
              </h2>
              <span className="border-2 border-[#009db5] p-1 rounded-sm text-xs font-medium text-[#009db5]">
                $120/night
              </span>
            </div>
            <div className="flex gap-2 p-2 flex-wrap sm:flex-nowrap">
              <span className="flex align-middle gap-1 text-[#009db5] whitespace-nowrap rounded-sm text-sm bg-slate-100 p-2">
                <MdChildCare fontSize={"18px"} />2 Children
              </span>
              <span className="flex align-middle gap-1 whitespace-nowrap text-sm  text-[#009db5] rounded-sm bg-slate-100 p-2">
                <IoIosPerson fontSize={"18px"} className="text-[#009db5]" />2
                Adult
              </span>
              <span className="flex align-middle gap-1  text-[#009db5] text-sm rounded-sm bg-slate-100  whitespace-nowrap p-2">
                <MdOutlineBedroomParent
                  fontSize={"22px"}
                  className="text-[#009db5]"
                />
                120 sqft
              </span>
            </div>
          </div>
          <div className="rounded-md shadow-md">
            <img src={room6} alt="Family Room"/>
            <div className="flex justify-between p-3">
              <h2 className="text-2xl font-barlow-condensed font-semibold">
                Family Room
              </h2>
              <span className="border-2 border-[#009db5] p-1 rounded-sm text-xs font-medium text-[#009db5]">
                $200/night
              </span>
            </div>
            <div className="flex gap-2 p-2 flex-wrap sm:flex-nowrap">
              <span className="flex align-middle gap-1 text-[#009db5] whitespace-nowrap rounded-sm text-sm bg-slate-100 p-2">
                <MdChildCare fontSize={"18px"} />2 Children
              </span>
              <span className="flex align-middle gap-1 whitespace-nowrap text-sm  text-[#009db5] rounded-sm bg-slate-100 p-2">
                <IoIosPerson fontSize={"18px"} className="text-[#009db5]" />3
                Adult
              </span>
              <span className="flex align-middle gap-1  text-[#009db5] text-sm rounded-sm bg-slate-100  whitespace-nowrap p-2">
                <MdOutlineBedroomParent
                  fontSize={"22px"}
                  className="text-[#009db5]"
                />
                150 sqft
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8 justify-center mb-5">
        <button className="bg-[#0f97aa] text-white py-2 px-5 rounded-md">Prev</button>
        <button className="bg-[#0f97aa] text-white py-2 px-5 rounded-md">Next</button>
      </div>
    </div>
  );
};

export default Room;
