import { FaTwitter } from "react-icons/fa6";
import logo from '../assets/logo/logo_footer.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
const Footer = () => {
 

  const links = [
    [
      { label: "USEFULL", key: "header-1" },
      { label: "About us", key: "item-1-1" },
      { label: "Rooms", key: "item-1-2" },
      { label: "Services", key: "item-1-3" },
      
    ],
    [
      { label: "LINKS", key: "header-2" },
      { label: "Contact", key: "item-2-1" },
      { label: "Blog", key: "item-2-2" },
     
    ],
  ];

  return ( 
  
    <div className=" flex items-end justify-center  font-poppins">
      
      <div className="py-16 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 bg-[#063c43]	 text-white w-full p-4 relative ">
        <div className="  ">
          <div className="footer-img flex items-center">
            <img
              src={logo}
              alt=""
              className="w-16 h-auto"
            />

                     
          </div>
          
        
        </div>
        <div className="mx-2 grid w-full py-5 sm:py-0 grid-cols-2 ">
          {links.map((col, index) => {
            return (
              <ul className={`col col-${index + 1}`} key={`col-${index}`}>
                {col.map((link, index) => {
                  return (
                    <li
                      key={`link-${col}-${index}`}
                      className={`text-white cursor-pointer p-3 ${
                        link.key === "header-1" || link.key === "header-2"
                          ? "text-2xl text-white"
                          : ""
                      }`}
                    >
                      {link.label}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="footer-form flex flex-col  ">
          <label className="text-lg font-semibold text-white">
            Stay up to date
          </label>
          <input
            type="email"
            placeholder="Subscribe to our email"
            className="mt-2 w-full border-none rounded-lg py-3 px-6"
          />
          <div className="flex text-white text-3xl gap-5 items-center pt-5">
          
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <AiOutlineYoutube />

          </div>
        </div>
        
      </div>
      
     
    </div>
    
  );
};

export default Footer;