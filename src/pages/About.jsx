import React from 'react'
import room1 from "../assets/rooms/room-01.jpg"

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">About </h1>
                    <p className="font-normal text-base leading-6 text-gray-600 ">"Welcome to Hotel_Booking, your premier destination for seamless hotel reservations and memorable stays."

Discover the ease and convenience of booking your next hotel stay with Hotel_Booking, where every journey begins.

At Hotel_Booking, we're dedicated to simplifying your travel planning with a curated selection of hotels tailored to your preferences.

Our mission at Hotel_Booking is to connect travelers with the perfect accommodations, ensuring every stay is exceptional.</p>
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="w-full h-full" src={room1} alt="A group of People" />
                </div>
            </div>

            
        </div>
  )
}

export default About
