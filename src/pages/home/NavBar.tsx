// import { useState } from "react";

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   return (
//     <>

//       <nav className="bg-cblue p-4 font-inter">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           {/* Logo */}
//           <div className="text-white text-xl font-bold">
//             <a href="#">Brand</a>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-4 items-center">
//             <a href="#" className="text-white hover:text-gray-300">
//               Home
//             </a>
//             <a href="#" className="text-white hover:text-gray-300">
//               About
//             </a>
//             <a href="#" className="text-white hover:text-gray-300">
//               Services
//             </a>
//             <a href="#" className="text-white hover:text-gray-300">
//               Contact
//             </a>
//             <button className="text-white border p-2 ">Connect</button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={toggleMenu}
//             className="md:hidden text-white focus:outline-none"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden w-full h-dvh bg-black/50 backdrop-blur-md text-white py-4 mt-2 absolute z-50 left-0 top-12 flex flex-col justify-center items-center">
//             <a
//               href="#"
//               className="block w-full text-center px-4 py-4 hover:bg-blue-500"
//             >
//               Home
//             </a>
//             <a
//               href="#"
//               className="block w-full text-center px-4 py-4 hover:bg-blue-500"
//             >
//               About
//             </a>
//             <a
//               href="#"
//               className="block w-full text-center px-4 py-4 hover:bg-blue-500"
//             >
//               Services
//             </a>
//             <a
//               href="#"
//               className="block w-full text-center px-4 py-4 hover:bg-blue-500"
//             >
//               Contact
//             </a>
//             <button className="font-inter bg-green-400 px-6 py-2 rounded-xl text-white transition">Connect</button>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default NavBar;
import { useState, useEffect } from "react";

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
      <nav className="bg-cblue h-[80px] font-inter">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-4">
          {/* Logo */}
          <div className="text-white text-xl font-bold">
            <p className=" md:text-3xl text-2xl text-cgreen font-robo-mono">
              EcoVolt
            </p>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-gray-300 text-base font-bold">
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
            {/* <button className="font-inter bg-green-400 px-6 py-2 rounded-xl text-white transition ">
              Connect
            </button> */}
            <w3m-button />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden w-full h-dvh bg-black/50 backdrop-blur-md text-white pb-28 absolute z-50 left-0 top-[80px] flex flex-col justify-center items-center ">
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
              className="block w-full text-center px-4 py-4 hover:bg-blue-500"
            >
              Contact
            </a>
            <button className="font-inter bg-green-400 px-6 py-2 rounded-xl text-white transition">
              Connect
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
