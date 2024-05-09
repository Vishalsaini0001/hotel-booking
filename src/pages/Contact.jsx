
import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa6";


const Contact = () => {
  return (
    <>
    <div className='xl:flex xl:flex-row lg:flex lg:flex-row mt-32 '> 
      {/* card */}
    <div className=" flex flex-col justify-center  text-gray-700 bg-cyan-600 shadow-md bg-clip-border rounded-xl m-2 w-[95%] lg:w-96 md:w-[50%] md:ml-52 lg:m-5">
          <h1 className="text-white text-3xl font-semibold mt-5 ml-6  ">
            FT. HOTEL
          </h1>
          <p className="text-white ml-6 mt-1">Contact information</p>
          <div className="mt-14 ml-6">
            <ul className="text-white ">
              <li className="mb-3 inline-">  
                <MdEmail /> Hotel.np@gamil.com
              </li>relative
              <li className="mb-3">
                <FaPhoneVolume /> 
                +8478178011
              </li>
              <li>
                <AiFillHome />
                478 Evergreen Rd.Rosevilla,CA 98823
              </li>
            </ul>
          </div>
          <div className="mb-2">
            <ul className="flex justify-evenly  mt-12  sm:h-10 lg:mt-6">
              <li className="text-white text-2xl hover:scale-125 transition	">
                <RiFacebookFill />
              </li>
              <li className="text-white  text-2xl hover:scale-125 transition">
                <FaTwitter />
              </li>
              <li className="text-white  text-2xl hover:scale-125 transition">
                <GrInstagram />
              </li>
              <li className="text-white  text-2xl hover:scale-125 transition">
                <FaYoutube />{" "}
              </li>
            </ul>
          </div>
        </div>
        {/* form */}
        <div className="py-2 px-4 mx-auto max-w-screen-md"> 
            <h2 className="font-bold text-2xl text-neutral-600"> 
                Leave your Message 
            </h2> 
            <p className="text-sm mt-2 font-medium text-stone-400"> 
               Contact us today using this form and we will reach you asap
            </p> 
            <form action="#"> 
                <div className="flex flex-row"> 
                    <div className="w-1/2 pr-2 "> 
                        <label htmlFor="firstName" 
                               className="block my-2 text-left  
                                          text-sm font-medium text-gray-900"> 
                            First Name 
                        </label> 
                        <input type="text" 
                               className="shadow-sm bg-gray-50 border 
                                          border-gray-300 text-gray-900  
                                          text-sm rounded-lg block w-full p-2.5 xl:w-96" 
                               placeholder="Enter First Name"
                               required/> 
                    </div> 
                    <div className="w-1/2 pl-2"> 
                        <label htmlFor="firstName" 
                               className="block my-2 text-left text-sm  
                                          font-medium text-gray-900 xl:ml-5"> 
                            Last Name 
                        </label> 
                        <input type="text" 
                               className="shadow-sm bg-gray-50 border  
                                          border-gray-300 text-gray-900  
                                          text-sm rounded-lg block w-full p-2.5 xl:w-96 xl:ml-5"
                               placeholder="Enter Last Name"/> 
                    </div> 
                </div> 
                <div className="flex flex-row"> 
                    <div className="w-1/2 pr-2 "> 
                        <label htmlFor="firstName" 
                               className="block my-2 text-left  
                                          text-sm font-medium text-gray-900"> 
                            Your Email
                        </label> 
                        <input type="text" 
                               className="shadow-sm bg-gray-50 border 
                                          border-gray-300 text-gray-900  
                                          text-sm rounded-lg block w-full p-2.5 xl:w-96 " 
                               placeholder="Enter your email"
                               required/> 
                    </div> 
                    <div className="w-1/2 pl-2"> 
                        <label htmlFor="firstName" 
                               className="block my-2 text-left text-sm  
                                          font-medium text-gray-900 xl:ml-5"> 
                            Your Phone-no.
                        </label> 
                        <input type="text" 
                               className="shadow-sm bg-gray-50 border  
                                          border-gray-300 text-gray-900  
                                          text-sm rounded-lg block w-full p-2.5 xl:w-96 xl:ml-5"
                               placeholder="Enter your pohone number"/> 
                    </div> 
                </div> 
                <div > 
                    <label htmlFor="message" 
                           className="block my-2 text-left  
                                      text-sm font-medium text-gray-900 "> 
                        Your message 
                    </label> 
                    <textarea rows="6" 
                              className="block p-2.5 w-full text-sm  
                                         text-gray-900 bg-gray-50 rounded-lg  
                                         shadow-sm border border-gray-300 xl:w-[780px]" 
                              placeholder="Write your message..."/> 
                </div> 
                <button type="submit" 
                        className="mt-2 p-2  text-white   
                                   rounded-lg border-green-600  
                                   bg-cyan-600 w-[100%] hover:bg-cyan-800 xl:w-[780px] "> 
                    Send message 
                </button> 
            </form> 
        </div> 
        </div>
    <div>
   

      
    </div>
    <div className='mt-20'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.7055461305604!2d76.83906957503727!3d30
        .726677285926307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef0799d5c1c3%3A0xbe2c79bd70a0973!
        2sKreativan%20Technologies!5e0!3m2!1sen!2sin!4v1710326811204!5m2!1sen!2sin'
          className='border:0 h-[600px]  w-full '
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
       
    </>
  );
}


export default Contact