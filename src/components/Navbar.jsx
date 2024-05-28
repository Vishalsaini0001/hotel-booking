import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import  logo from "../assets/logo/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <header className="w-full h-24  grid grid-cols-[10rem,1fr,2fr,1fr,10rem] lg:border-b  items-center sticky top-0 bg-white opacity-90 z-50	">
      <div className="lg:col-start-2 lg:col-end-3 lg:grid lg:content-center lg:text-2xl grid content-center text-2xl justify-items-center ">
      <NavLink to="/">
          <img className="" src={logo} alt="" />
        </NavLink>
        
      </div>

      <nav className="lg:col-start-3 lg:col-end-4 lg:h-24 lg:flex lg:justify-around lg:items-center hidden text-slate-400  ">
        <NavLink className={`hover:scale-110 hover:text-black`} to="/" end>
          Home
        </NavLink>
        <NavLink className={`hover:scale-110 hover:text-black `} to="About">
          About Us
        </NavLink>
        <NavLink className={`hover:scale-110 hover:text-black`} to="Room">
          Room
        </NavLink>
        <NavLink className={`hover:scale-110 hover:text-black`} to="blog">
          Blog
        </NavLink>
        
        
        <NavLink className={`hover:scale-110 hover:text-black`} to="Gallery">
          Gallery
        </NavLink>
        <NavLink className={`hover:scale-110 hover:text-black`} to="Contact">
          Contact
        </NavLink>
      </nav>

      <div className="lg:col-start-4 lg:col-end-5 lg:flex lg:justify-end  lg:items-center lg:gap-3 lg:text-xl hidden md:col-start-3 md:col-end-4 md:flex md:justify-center  md:items-center md:gap-3">
        <NavLink className={`border p-2 rounded text-indigo-900 hover:border-indigo-900 shadow-lg `} to="/">
          <IoCartOutline />
        </NavLink>
        <NavLink to="/">
          <button className="border p-2 text-sm rounded font-medium bg-slate-50 shadow-lg hover:border-black">
            Login
          </button>
        </NavLink>
      </div>

      <menu className="col-start-5 col-end-6 grid content-center text-2xl justify-items-center lg:hidden ">
        <GiHamburgerMenu onClick={toggleDropdown} />
        {/* import Hamburger from 'hamburger-react'
     <Hamburger rounded /> */}
      </menu>
      <div className="relative col-start-4 col-end-5 grid justify-center xl:col-start-5 xl:col-end-6 z-10  ">
        {isOpen && (
          <div className="absolute text-slate-400  bg-white rounded-md shadow-lg">
            <NavLink
              to="/"
              className="block px-8 py-2 m-5  hover:text-black "
              onClick={closeDropdown}
            >
              Home
            </NavLink>
            <NavLink
              to="About"
              className="block px-8 py-2 m-5  hover:text-black "
              onClick={closeDropdown}
            >
              About
            </NavLink>
            <NavLink
              to="Room"
              className="block px-8 py-2 m-5  hover:text-black "
              onClick={closeDropdown}
            >
              Room
            </NavLink>
           
            <NavLink
              to="Blog"
              className="block px-8 py-2 m-5  hover:text-black "
              onClick={closeDropdown}
            >
              Blogs
            </NavLink>
            <NavLink
              to="Contact"
              className="block px-8 py-2 m-5  hover:text-black "
              onClick={closeDropdown}
            >
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;

