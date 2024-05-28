import React from "react";
import img from "../assets/blog/img-1.jpeg";
import { IoCalendarOutline } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa6";
import imgg from "../assets/blog/img-2.jpeg"
import img2 from "../assets/blog/img-3.jpeg"


const Blog = () => {
  return (
    <>

   
      <div className="  sm:m-20 m-5 flex-col ">
        <div>
          <div>
            <img src={img} alt="img" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mt-6">Visiting Beach resort</h1>
          </div>
          <div className="">
            <ul className="flex gap-5 mt-3 text-stone-500">
              <li>
                <IoCalendarOutline className="text-cyan-600 text-xl" />{" "}
                02/03/2022
              </li>
              <li>
                <RiAdminLine className="text-cyan-600 text-xl" />
                admin
              </li>
              <li>
                <FaRegCommentDots className="text-cyan-600 text-xl" />
                Comment Off
              </li>
            </ul>
          </div>

          <div className="">
            <p className="mt-6 text-stone-500 sm:text-base text-sm ">
              I joined Coinbase about two months ago to establish and lead a new
              tech hub for Coinbase in India. In this blog post,
              <br /> I wanted to share a bit about our plans and ambitions in
              India
            </p>
          </div>
          <div>
          <button className="bg-cyan-700 text-lg text-white font-semibold w-40 p-3 mt-5 rounded hover:border hover:border-cyan-700 hover:bg-white hover:text-cyan-700 ">
              READ NOW
            </button>
          </div>
        </div>
        <div className="mt-10">
          <div>
        <img className={`rounded`} src={imgg} alt="img" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mt-6">Visiting Beach resort</h1>
          </div>
          <div>
            <ul className="flex gap-5 mt-3 text-stone-500">
              <li>
                <IoCalendarOutline className="text-cyan-600 text-xl" />{" "}
                02/03/2022
              </li>
              <li>
                <RiAdminLine className="text-cyan-600 text-xl" />
                admin
              </li>
              <li>
                <FaRegCommentDots className="text-cyan-600 text-xl" />
                Comment off
              </li>
            </ul>
          </div>
          <div>
            <p className="mt-6 text-stone-500 sm:text-base text-sm">
              I joined Coinbase about two months ago to establish and lead a new
              tech hub for Coinbase in India. In this blog post,
              <br /> I wanted to share a bit about our plans and ambitions in
              India
            </p>
          </div>
          <div>
            <button className="bg-cyan-700 text-lg text-white font-semibold w-40 p-3 mt-5 rounded hover:border hover:border-cyan-700 hover:bg-white hover:text-cyan-700 ">
              READ NOW
            </button>
          </div>
        </div>
        <div className="mt-10">
          <div className="rounded-xl">
            <img className={`rounded  w-[100%] lg:w-[100%] xl:w-[65%] md:w-[100%] 2xl:w-[35%]`} src={img2} alt="img" />
          </div>
          <div>
            <h1 className="text-3xl font-bold mt-6">Visiting Beach resort</h1>
          </div>
          <div>
            <ul className="flex gap-5 mt-3 text-stone-500">
              <li>
                <IoCalendarOutline className="text-cyan-600 text-xl" />
                02/03/2022
              </li>
              <li>
                <RiAdminLine className="text-cyan-600 text-xl" />
                admin
              </li>
              <li>
                <FaRegCommentDots className="text-cyan-600 text-xl" />
                Comment off
              </li>
            </ul>
          </div>
          <div>
            <p className="mt-6 text-stone-500 sm:text-base text-sm">
              I joined Coinbase about two months ago to establish and lead a new
              tech hub for Coinbase in India. In this blog post,
              <br /> I wanted to share a bit about our plans and ambitions in
              India
            </p>
          </div>
          <div>
            <button className="bg-cyan-700 text-lg text-white font-semibold w-40 p-3 mt-5 rounded hover:border hover:border-cyan-700 hover:bg-white hover:text-cyan-700 ">
              READ NOW
            </button>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Blog;