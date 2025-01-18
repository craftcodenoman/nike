
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegHeart, FaTrash } from "react-icons/fa";

function Cart() {
  return (
    <div className="w-full lg:w-[95%] max-w-[1440px] mx-auto py-6 px-6 mt-20 ">
      {/* Free Delivery Banner */}
      <div className=" mb-8 ">
        <h1 className="text-2xl text-black">Free Delivery</h1>
        <p className="mt-2">
          Applies to orders of ₹ 14,000.00 or more.{" "}
          <span className="font-bold underline cursor-pointer">
            View details
          </span>
        </p>
      </div>

      {/* Bag Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Products Column */}
        <div className="flex-grow">
          <h1 className="font-bold text-2xl mb-6">BAG</h1>

          {/* Product Cards */}
          <div className="space-y-8 ">
            {/* Product Card 1 */}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3">
                <Image
                  src="/shoes-22.png"
                  alt="Nike Shoes"
                  width={441}
                  height={441}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="flex flex-col flex-grow">
                <Link href="/">
                  <div className="mb-6">
                    <h2 className="font-bold text-xl mb-2">
                      Nike Dri-FIT ADV TechKnit Ultra
                    </h2>
                    <h3 className="text-lg mb-2">MRP: ₹ 3,895.00</h3>
                    <p className="text-gray-700">
                      Mens Short-speed Running Top
                      <br />
                      Mens Shoes
                      <br />
                      1- Colour
                    </p>
                  </div>
                </Link>

                <div className="flex space-x-4 mt-auto">
                  <button className="p-2 hover:text-gray-600 transition-colors">
                    <FaRegHeart className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:text-red-600 transition-colors">
                    <FaTrash className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/3">
                <Image
                  src="/shoes-29.png"
                  alt="Nike Shoes"
                  width={441}
                  height={441}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>

              <div className="flex flex-col flex-grow">
                <Link href="/">
                  <div className="mb-6">
                    <h2 className="font-bold text-xl mb-2">
                      Nike Dri-FIT ADV TechKnit Ultra
                    </h2>
                    <h3 className="text-lg mb-2">MRP: ₹ 3,895.00</h3>
                    <p className="text-gray-400">
                      Mens Short-Sleeve Running Top
                      <br />
                      Ashen Slate/Cobalt Bliss
                      <br />
                      Size-L Quantity-1
                    </p>
                  </div>
                </Link>

                <div className="flex space-x-4 mt-auto">
                  <button className="p-2 hover:text-gray-600 transition-colors">
                    <FaRegHeart className="w-5 h-5" />
                  </button>
                  <button className="p-2 hover:text-red-600 transition-colors">
                    <FaTrash className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      

        {/* Summary Column */}
        <div className="lg:w-[400px] shrink-0">
          <div className=" p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-8">Summary</h2>

            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-lg">Subtotal</span>
                <span className="font-medium text-lg">₹ 20,890.00</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-lg">
                  Estimated Delivery & Handling
                </span>
                <span className="text-green-600 font-medium">Free</span>
              </div>

              <div className="border-t border-gray-200 pt-4"></div>

              <div className="flex justify-between items-center">
                <span className="font-bold text-xl">Total</span>
                <span className="font-bold text-xl">₹ 20,890.00</span>
              </div>

              {/* <button className="w-full bg-black text-white py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all duration-300 mt-6">
                Member Checkout
              </button> */}
              <div className="relative flex text-white items-center mt-8 ml-8 mb-10">
                {" "}
                <button className="absolute left-14 hover:gray-700 flex items-center space-x-2 font-bold">
                  <Link href="AboutUs" className="">
                    Members Checkout
                  </Link>
                </button>
                <input
                  type="text"
                  placeholder=" "
                  className="pl-14 pr-4 py-5 rounded-full bg-black focus:outline-none focus:ring-2 focus:ring-gray-200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

