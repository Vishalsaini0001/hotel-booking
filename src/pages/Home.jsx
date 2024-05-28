import React from "react";
import home1 from "../assets/images/header-home1.jpg";
import home2 from "../assets/images/home 2.jpeg";
import sign from "../assets/images/signture2.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import room1 from "../assets/images/room1.jpg";
import room2 from "../assets/images/room2.jpg";
import room3 from "../assets/images/room3.jpeg";
import room4 from "../assets/images/room4.jpeg";
import room5 from "../assets/images/room5.jpeg";
import { PiFlowerLotus } from "react-icons/pi";
import { ImSpoonKnife } from "react-icons/im";
import { BsSuitcaseLg } from "react-icons/bs";
import { LiaSwimmerSolid } from "react-icons/lia";
import spa1 from "../assets/images/spa1.jpeg";
import spa2 from "../assets/images/spa2.jpeg";
import spa3 from "../assets/images/spa3.jpeg";
import place1 from "../assets/images/place1.jpg";
import place2 from "../assets/images/place2.jpeg";
import place3 from "../assets/images/place3.jpeg";
import place4 from "../assets/images/place4.jpeg";
import feed1 from "../assets/images/feed1.jpeg";
import feed2 from "../assets/images/feed2.jpeg";
import feed3 from "../assets/images/feed3.jpeg";

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 90 ) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [count]);
  const [anotherCount, setAnotherCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (anotherCount < 150) {
        setAnotherCount((prevCount) => prevCount + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [anotherCount]);
  const [yetAnotherCount, setYetAnotherCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (yetAnotherCount < 80) {
        setYetAnotherCount((prevCount) => prevCount + 1);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [yetAnotherCount]);
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());

  return (
    <>
      <div className="flex justify-around  flex-col sm:flex-row">
        <div className="text-center">
          <p className="text-sky-600 text-xl sm:mt-40 mt-0 animate-bounce">
            Weclome home
          </p>
          <p className="sm:text-6xl text-4xl  sm:mt-6 mt-2 font-semibold ">
            Our world is your <br /> playground.
          </p>
          <p className="text-slate-500 text-md sm:text-lg sm:m-14 m-8 animate-pulse">
            Make yourself at home in our sophisticated guest rooms,
            <br /> take in the incredible views and enjoy fresh air from our
            <br />
            beautiful sea city.
          </p>
        </div>
        <div className="hidden absolute  bg-white rounded-lg shadow-md  lg:w-[900px] mx-10 my-10 flex flex-col sm:flex-col md:flex-row lg:flex-row gap-4 p-8 md:h-[120px] lg:h-[120px] md:mx-6 md:my-6  ">
          <div>
            <div className="text-slate-500">Check in</div>
            <DatePicker
              className="border-r border-gray-300 p-2 w-full text-black  md:h-[45px] lg:h-[45px] "
              placeholderText="DD-MM-YYYY ^"
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              onChange={(e) => setCheckIn(e)}
            />
          </div>

          <div>
            <div className="text-slate-500">Check in</div>
            <DatePicker
              className="border-r border-gray-300 p-2 w-full  md:h-[45px] lg:h-[45px]"
              placeholderText="DD-MM-YYYY ^"
              dateFormat="dd/MM/yyyy"
              onChange={(e) => setCheckOut(e)}
            />
          </div>
          <div>
            <div className="text-slate-500">Guest</div>
            <div>
              <p className="mt-2 text-slate-400">4 Persons </p>
            </div>
          </div>
        </div>
        <div className="p-2 sm:p-0">
          <img src={home1} alt="header" />
        </div>
      </div>
      <div className="flex justify-around item-center flex-wrap m-5 sm:mt-32">
        <div className="sm:w-80 w-72  ">
          <p className="flex justify-center sm:text-3xl  p-2">{count}+</p>
          <p className="flex justify-center sm:text-3xl ">VARIOUS SERVICES</p>
        </div>
        <div className="sm:w-80 w-72 ">
          <p className="flex justify-center sm:text-3xl p-2">{anotherCount}+</p>
          <p className="flex justify-center sm:text-3xl">DIFFERENT ROOMS</p>
        </div>
        <div className="sm:w-80 w-72">
          <p className="flex justify-center sm:text-3xl p-2">
            {yetAnotherCount}+
          </p>
          <p className="flex justify-center sm:text-3xl">OUR EXPERIENCE</p>
        </div>
      </div>

      <div className="flex justify-center flex-col sm:flex-row sm:mt-32 bg-[#f9f9f9] p-5 ">
        <div className="p-2 sm:p-0 ">
          <img src={home2} alt="home2" />
        </div>
        <div className="">
          <p className="text-4xl text-center font-bold mt-10">
            Beach Hotel More <br /> than a stay
          </p>
          <p className="text-center  text-slate-500 mt-10">
            We have a lot of effort to bring more quality time to you <br /> and
            the people you love. You will have a chance to enjoy <br />{" "}
            meaningful moments together and that’s reason why <br /> we’re here.
          </p>
          <div className="flex justify-end mt-5 p-2">
            <img src={sign} alt="sign" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-around  p-2 lg:p-10 md:p-32">
          <div className="text-4xl text-slate-700 ">OUR FAVORITE ROOMS</div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 p-2 sm:gap-5 sm:p-32 gap-1">
          <img
            class="object-cover h-full col-span-1 md:col-span-2 row-span-2 rounded-2xl"
            src={room1}
            alt="Modern Room"
          />
          <img
            class="object-cover w-full h-full col-span-1 md:col-span-1 rounded-2xl"
            src={room2}
            alt="Luxury Room"
          />
          <img
            class="object-cover w-full h-full col-span-1 md:col-span-1 rounded-2xl"
            src={room3}
            alt="Premium Room"
          />
          <img
            class="object-cover w-full h-full col-span-1 md:col-span-1 rounded-2xl "
            src={room4}
            alt="Single Room"
          />
          <img
            class="object-cover w-full h-full col-span-1 md:col-span-1 rounded-2xl"
            src={room5}
            alt="Single Room"
          />
        </div>
      </div>

      <div className="bg-[#f9f9f9] mt-20">
        <div className="flex justify-around  p-20">
          <div className="text-4xl text-slate-700 ">Our Services</div>
        </div>

        <div className="flex gap-2 justify-around flex-wrap">
          <div className="hover:shadow-lg shadow transition p-5 rounded sm:w-80 w-72 ">
            <p className="text-slate-800 text-xl  flex justify-center gap-4 p-5 ">
              <PiFlowerLotus className="text-green-500 text-4xl " /> SPA &
              WELLNESS
            </p>
            <p className="text-slate-500 text-center">Open Daily</p>
          </div>
          <div className="hover:shadow-lg shadow transition p-5 rounded sm:w-80 w-72 ">
            <p className="text-slate-800 text-xl  flex justify-center gap-4 p-5 ">
              <ImSpoonKnife className="text-red-400 text-4xl " /> TOP RESTAURANT
            </p>
            <p className="text-slate-500 text-center">Breakfast & Dinner</p>
          </div>

          <div className="hover:shadow-lg shadow  transition p-5 rounded sm:w-80 w-72 ">
            <p className="text-slate-800 text-xl  flex justify-center gap-4 p-5 ">
              <BsSuitcaseLg className="text-slate-500 text-4xl " /> BEST SUITES
            </p>
            <p className="text-slate-500 text-center">Cool View</p>
          </div>
          <div className="hover:shadow-lg shadow transition p-5 rounded sm:w-80 w-72  ">
            <p className="text-slate-800 text-xl  flex justify-center gap-4 p-5 ">
              <LiaSwimmerSolid className="text-sky-500 text-4xl " /> SWIMMING
              POOL
            </p>
            <p className="text-slate-500 text-center">Open Daily</p>
          </div>
        </div>

        <div className="flex justify-center gap-8 p-2 flex-wrap lg:flex-nowrap mt-20 pb-16">
          <div>
            <img className="" src={spa1} alt="" />
          </div>
          <div className="flex flex-col gap-8">
            <img src={spa2} alt="" />
            <img src={spa3} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-32 mb-20">
        <div className="text-center pb-20">
          <p className="text-4xl text-slate-700 "> PLACES NEARBY</p>
        </div>
        <div class="container mx-auto sm:p-0 p-2">
          <div class="grid grid-cols-2 gap-4">
            <div class="flex justify-center items-center">
              <img src={place1} alt="" class="max-w-full h-auto" />
            </div>
            <div class="flex justify-center items-center">
              <img src={place2} alt="" class="max-w-full h-auto rounded-lg" />
            </div>

            <div class="flex justify-center items-center col-span-2 md:col-span-1">
              <img src={place3} alt="" class="max-w-full h-auto" />
            </div>
            <div class="flex justify-center items-center col-span-2 md:col-span-1">
              <img src={place4} alt="" class="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f9f9f9]">
        <div className="text-center text-4xl text-slate-700 pt-20 pb-16">
          OUR GUESTS LOVE US
        </div>
        <div class="flex mx-auto justify-center gap-3 flex-wrap pb-16 ">
          <figure class="flex flex-col items-center justify-center p-6 text-center bg-white shadow-2xl hover:shadow-lg rounded-lg  md:rounded-lg md:border ">
            <blockquote class="w-xl mx-auto mb-4 text-gray-200 lg:mb-8 ">
              <p class="text-lg font-normal text-gray-600 ">
                {" "}
                "Every year, we come back to FT hotel <br />
                for our holiday. It was <br />
                extremely interesting and enjoyable <br /> ! We are happy with
                our <br /> stay in this hotel.".
              </p>
            </blockquote>
            <figcaption class="flex items-center justify-center ">
              <img class="rounded-full w-10 h-10" src={feed1} alt="profile" />
              <div class="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
                <div>Bonnie Green</div>
                <div class="text-sm text-gray-500 ">American</div>
              </div>
            </figcaption>
          </figure>
          <figure class="flex flex-col items-center justify-center p-6 text-center bg-white shadow-2xl hover:shadow-lg rounded-lg  md:rounded-lg md:border ">
            <blockquote class="w-xl mx-auto mb-4 text-gray-200 lg:mb-8 ">
              <p class="text-lg font-normal text-gray-600 ">
                {" "}
                "Every year, we come back to FT hotel <br /> for our holiday. It
                was <br />
                extremely interesting and enjoyable <br /> ! We are happy with
                our <br /> stay in this hotel.".
              </p>
            </blockquote>
            <figcaption class="flex items-center justify-center ">
              <img class="rounded-full w-10 h-10" src={feed2} alt="profile" />
              <div class="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
                <div>Peek Thakul</div>
                <div class="text-sm text-gray-500 ">France</div>
              </div>
            </figcaption>
          </figure>
          <figure class="flex flex-col items-center justify-center p-6 text-center bg-white shadow-2xl hover:shadow-lg rounded-lg  md:rounded-lg md:border ">
            <blockquote class="w-xl mx-auto mb-4 text-gray-200 lg:mb-8 ">
              <p class="text-lg font-normal text-gray-600 ">
                {" "}
                "Every year, we come back to FT hotel <br /> for our holiday. It
                was <br />
                extremely interesting and enjoyable <br /> ! We are happy with
                our <br /> stay in this hotel.".
              </p>
            </blockquote>
            <figcaption class="flex items-center justify-center ">
              <img class="rounded-full w-10 h-10" src={feed3} alt="profile" />
              <div class="space-y-0.5 font-medium  text-left rtl:text-right ms-3">
                <div>Ralph Edwards</div>
                <div class="text-sm text-gray-500 ">American</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Home;
