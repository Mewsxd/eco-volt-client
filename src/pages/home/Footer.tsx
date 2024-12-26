import { BsTwitterX } from "react-icons/bs";
import { TiSocialYoutube } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <footer className="shadow-lg font-inter text-gray-400 ">
        <div className="max-w-screen-xl mx-auto px-4 py-8 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {/* Logo Section */}
            <div className="col-span-2 md:col-span-1">
              <h2 className="text-cgreen text-xl md:text-3xl font-semibold font-robo-mono">
                EcoVolt
              </h2>
            </div>
            <div className="hidden md:block"></div>
            {/* Resources Section */}
            <div>
              <h3 className="text-gray-600 text-sm font-semibold mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Buy Now
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div>
              <h3 className="text-gray-600 text-sm font-semibold mb-4">
                Follow Us
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Github
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Discord
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="text-gray-600 text-sm font-semibold mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mt-8"></div>

          {/* Bottom Section */}
          <div className="mt-4 flex flex-col md:flex-row items-center justify-between">
            <span className="text-sm text-gray-400">
              © 2024 EcoVolt™. All Rights Reserved.
            </span>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <TiSocialYoutube className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <BsTwitterX className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
{
  /* <TiSocialYoutube className="text-2xl" />
<BsTwitterX className="text-2xl" />
          <p>Copyright © EcoVolt | All rights reserved.</p> */
}
