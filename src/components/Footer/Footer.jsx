import React from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaRegCopyright,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="/assets/logo-footer.png"
                className="h-[200px] mr-3 w-[200px]"
                alt="FlowBite Logo"
                width={150}
                height={150}
              />
              {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span> */}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                I
				nformations
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 text-primary">
		  © 2023 All rights reserved, Powred By DUNDILL
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
		  <a className="bg-yellow-400 rounded-full p-2">
            <FaFacebookF size={20} color="white" />
          </a>
		  <a className="bg-yellow-400 rounded-full p-2">
            <FaTwitter size={20} color="white" />
          </a>
          <a className="bg-yellow-400 rounded-full p-2">
            <FaInstagram size={20} color="white" />
          </a>
          <a className="bg-yellow-400 rounded-full p-2">
            <FaYoutube size={20} color="white" />
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <>
      <footer className="footer px-10 bg-black ">
        <div>
          <img
            className="w-54"
            src="/assets/logo-footer.png"
            alt="Picture of the author"
            width={300}
            height={150}
          />
        </div>
        <nav className="py-10 w-64">
          <header className="footer-title text-white text-lg">
            Information
          </header>
          <a className="link link-hover text-white text-lg">FAQ</a>
          <a className="link link-hover text-white text-lg">Blog</a>
          <a className="link link-hover text-white text-lg">Support</a>
        </nav>
        <nav className="py-10 w-64">
          <header className="footer-title text-white text-lg">Company</header>
          <a className="link link-hover text-white text-lg">About us</a>
          <a className="link link-hover text-white text-lg">Careers</a>
          <a className="link link-hover text-white text-lg">Contact us</a>
        </nav>

        <form className="justify-end  bg-yellow-400/20 h-full p-10">
          <header className="footer-title text-white font-bold">
            Subscribe
          </header>
          <fieldset className="form-control w-full">
            
            <div className="relative">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered w-full pr-16 bg-white text-black"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none bg-yellow-400 border-yellow-400 hover:bg-yellow-500 hover:border-yellow-500 ">
                <FaArrowRight />
              </button>
              <p className="py-6 w-3/4 text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Placeat doloribus saepe accusantium id perferendis adipisci nisi
                quidem nihil hic esse, neque modi, cumque, deserunt a. Commodi,
                ipsa dolore. Necessitatibus, voluptates?
              </p>
            </div>
          </fieldset>
        </form>
      </footer>
      <div className="footer items-center p-4 text-neutral-content px-16 bg-black border-t border-yellow-400">
        <aside className="items-center grid-flow-col text-yellow-400 text-xl">
          <FaRegCopyright />
          <p>2023 All right reserved, Powered By DUNDIL</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a className="bg-yellow-400 rounded-full p-2">
            <FaFacebookF size={20} color="white" />
          </a>
          <a className="bg-yellow-400 rounded-full p-2">
            <FaTwitter size={20} color="white" />
          </a>
          <a className="bg-yellow-400 rounded-full p-2">
            <FaInstagram size={20} color="white" />
          </a>
          <a className="bg-yellow-400 rounded-full p-2">
            <FaYoutube size={20} color="white" />
          </a>
        </nav>
      </div>
    </> */
}
