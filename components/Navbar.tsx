import React from "react";
import Link from "next/link";
import Image from "next/image";

import { LuHeart } from "react-icons/lu";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { ModeToggle } from "./theme-button";

function Navbar() {
  return (
    <nav className="w-full lg:w[95%] max-w[1440px] mx-auto shadow-sm fixed top-0 left-0 bg-opacity-30 backdrop-blur border-b z-30">
      <div className="w-full h-10 flex justify-end gap-2 items-center">
        <div className="flex items-center">
          <Link href="/" className="flex  space-x-6 ml-8 ">
            <Image
              src="/air max logo.png"
              alt="AirMax Logo"
              width={24}
              height={24}
              className="cursor-pointer ml-10"
            />
          </Link>
        </div>
        <div className="flex justify-center mr-5 gap-2">
          <Link
            href="/"
            className="text-black-700  hover:text-gray-900  transition-colors duration-300"
          >
            Home
          </Link>

          <span className="mx-2 text-black-400">|</span>

          <Link
            href="/Product"
            className="text-black-700  hover:text-gray-900  transition-colors duration-300"
          >
            Find a Store
          </Link>

          <span className="mx-2 text-black-400">|</span>

          <Link
            href="/Help"
            className="text-black-700 hover:text-gray-900 transition-colors duration-300"
          >
            Help
          </Link>
          <span className="mx-2 text-black-400">|</span>
          <Link
            href="/JoinUs"
            className="text-black-700 hover:text-gray-900 transition-colors duration-300"
          >
            Join Us
          </Link>
          <span className="mx-2 text-black-400">|</span>
          <Link
            href="/SignIn"
            className="text-black-700 hover:text-gray-900 transition-colors duration-300"
          >
            Sign In
          </Link>
        </div>

        <ModeToggle />
      </div>

      {/* Second Part */}

      <div className="w-full lg:w[95%] max-w[1440px] mx-auto   ">
        <div className=" w-full flex justify-between bg-blue-200 rounded shadow-sm h-10">
          <div className="flex items-center space-x-6 ml-8 ">
            <Link href="/">
              <Image
                src="/nike logo.png"
                alt="Nike Logo"
                width={60}
                height={24}
                className="cursor-pointer ML-50"
              />
            </Link>
          </div>

          <div className="flex items-center space-x-6 text-black">
            {/* <Link href="/new" className="hover:text-gray-600">
              New & Featured
            </Link>
            <Link href="/men" className="hover:text-gray-600">
              Men
            </Link>
            <Link href="/women" className="hover:text-gray-600">
              Women
            </Link>
            <Link href="/kids" className="hover:text-gray-600">
              Kids
            </Link>
            <Link href="/sale" className="hover:text-gray-600">
              Sale
            </Link>
            <Link href="/snkrs" className="hover:text-gray-600">
              SNKRS
            </Link> */}
            {/* </div> */}

            <div className="flex items-center space-x-2 ">
              <div className="relative ">
                <IoSearch className="absolute left-2 top-2 text-black" />
                {/* Positioned icon absolutely */}
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-6 pr-4 py-1 mr-10 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                />

                <button className=" hover:text-gray-600 text-black mr-5 ">
                  <LuHeart size={20} />
                </button>
                <button className="hover:text-gray-600 text-black-500 mr-5">
                  <RiShoppingBag4Line size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
