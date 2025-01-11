import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HashLink } from "react-router-hash-link";
// import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup function to reset the overflow style when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="bg-cblue h-[60px] font-inter">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-4">
          {/* Logo */}
          <div className="text-white text-xl font-bold">
            <p className=" md:text-3xl text-2xl text-cgreen font-robo-mono">
              EcoVolt
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8 items-center text-gray-300 text-base font-bold">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <HashLink smooth to={"/#services"}>
              {/* <a href="#">Services</a> */}
              <p className="hover:text-gray-300">Services</p>
            </HashLink>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
            <w3m-button />
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none"
          >
            <GiHamburgerMenu className=" text-2xl" />
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="lg:hidden w-full h-dvh font-semibold bg-black/50 backdrop-blur-md text-white pb-28 absolute z-50 left-0 top-[60px] flex flex-col justify-center items-center ">
            <a
              href="#"
              className="block w-full text-center px-4 py-4 hover:bg-blue-500"
            >
              Home
            </a>
            <a
              href="#"
              className="block w-full text-center px-4 py-4 hover:bg-blue-500"
            >
              About
            </a>
            <a
              href="#"
              className="block w-full text-center px-4 py-4 hover:bg-blue-500"
            >
              Services
            </a>
            <a
              href="#"
              className="block w-full text-center px-4 py-4 mb-4 hover:bg-blue-500"
            >
              Contact
            </a>
            {/* <button className="font-inter bg-cgreen px-6 py-2 mt-4 rounded-xl text-white transition">
              Connect
            </button> */}
            <w3m-button />
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
