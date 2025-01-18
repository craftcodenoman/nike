import Link from "next/link";
import Image from "next/image";
import { FiPhone } from "react-icons/fi";
import { RiMessage2Line } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="w-full  shadow-sm lg[95%] max-w-[1440px] h-full  ">
      <div className="max-w-7xl mx-auto px-4 h-16 flex  justify-between  items-center mt-20 ">
        {/* Left side - Nike Logo */}
        <div className="flex items-center">
          <Link href="/">
            <div className="relative w-16 h-8 cursor-pointer ml-10">
              <Image
                src="/nike logo.png"
                alt="Nike Logo"
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Right side - Icons and Phone */}
        <div className="flex items-center space-x-6">
          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-2">
            <FiPhone className="w-5 h-5" />
            <span className="text-sm font-medium">000 800 100 9538</span>
          </div>

          {/* Message Icon */}
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <RiMessage2Line className="w-6 h-6" />
          </button>

          {/* Shopping Cart */}
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <BsCart3 className="w-6 h-6" />
            {/* Cart Item Count Badge */}
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <h1 className="text-2xl font-bold mb-6">
          How would you like to get your order?
        </h1>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Form */}
          <div className="space-y-8">
            {/* KYC Notice */}
            <div className=" p-4 rounded">
              <p className="text-sm text-gray-400 mb-2">
                Customs regulation for India require a copy of the recipients
                KYC The address on the KYC needs to match the shipping address
                Our courier will contact you via SMS/email to obtain a copy of
                your KYC. The KYC will be stored securely and used solely for
                the purpose of clearing customs including sharing it with
                customs officials for all orders and returns If your KYC does
                not match your shipping address, please click the link for more
                information.
                <Link href="#" className="text-black underline ml-1">
                  Learn More
                </Link>
              </p>
            </div>

            {/* Delivery Form */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">
                Enter your name and address:
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                />
              </div>

              <input
                type="text"
                placeholder="Address Line 1"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
              />
              <p className="text-sm text-gray-500">
                We do not ship to P.O. boxes
              </p>

              <input
                type="text"
                placeholder="Address Line 2"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
              />
              <input
                type="text"
                placeholder="Address Line 3"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                />
                <input
                  type="text"
                  placeholder="Locality"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black">
                  <option value="">State/Territory</option>
                  {/* Add state options */}
                </select>
                <select className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black">
                  <option value="">Country</option>
                  {/* Add country options */}
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-sm">
                    Save this address to my profile
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-sm">
                    Make this my preferred address
                  </span>
                </label>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">
                  Whats your contact information
                </h2>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                />
                <p className="text-sm text-gray-500">
                  A confirmation email will be sent after checkout.
                </p>

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                />

                <p className=" -gray-500">
                  A carrier might contact you to confirm delivery.
                </p>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">
                    Whats your contact information
                  </h2>
                  <input
                    type="text"
                    placeholder="PAN"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                  />
                  <p className="text-sm text-gray-500">
                    Enter your PAN to enable payment with UPI, Net Banking or
                    local card methods
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm">
                      Save PAN details to Nike Profile
                    </span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="text-sm">
                      I have read and consent to eShopWorld processing my
                      information in accordance with the
                      <u>
                        <b> Privacy Statement</b>
                      </u>{" "}
                      and
                      <u>
                        <b> Cookie Policy</b>
                      </u>
                      . eShopWorld is a trusted Nike partner.
                    </span>
                  </label>
                </div>
              </div>

              <button className="w-full bg-black text-white py-4 rounded font-bold hover:bg-gray-800">
                Continue
              </button>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">DELIVERY</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Shipping"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                  />
                  <input
                    type="text"
                    placeholder="Billing"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                  />
                  <input
                    type="text"
                    placeholder="Payment"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-black"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className=" p-6 rounded-lg shadow-sm ">
            <h2 className="text-xl font-semibold mb-6 text-center">
              Order Summary
            </h2>

            {/* Price Summary */}
            <div className="space-y-4 border-t pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹ 20,890.00</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery/Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>₹ 20,890.00</span>
              </div>
              <p className="text-sm text-black">
                (The total reflects the price of your order, including all
                duties and taxes)
              </p>

              <p className="font-bold text-2xl ">
                Arrives Mon, 27 Mar - Wed, 12 Apr
              </p>
            </div>

            {/* Product Cards */}
            <div className="mt-6 space-y-4">
              {/* First Product */}
              <div className="flex items-start space-x-4 p-4  rounded-lg hover:shadow-md transition-shadow duration-200">
                <div className="  rounded-md  ">
                  <Image
                    src="/shoes-6.png"
                    alt="Nike Dri-FIT Running Top"
                    width={208}
                    height={208}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                <div className="flex-grow">
                  <h3 className=" leading-tight font-bold">
                    Nike Dri-FIT ADV TechKnit Ultra
                    <br />
                    Mens Short-Sleeve Running Top
                  </h3>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex space-x-4 text-sm text-gray-500">
                      <p>Size L</p>
                      <p>Qty 1</p>
                    </div>
                    <p className="font-medium">₹ 3,895.00</p>
                  </div>
                </div>
              </div>

              {/* Second Product */}
              <div className="flex items-start space-x-4 p-4  rounded-lg hover:shadow-md transition-shadow duration-200">
                <div className="rounded:md ">
                  <Image
                    src="/shoes-7.png"
                    alt="Nike Air Max 97 SE"
                    width={208}
                    height={208}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                <div className="flex-grow font-bold">
                  <h3 className="  font-bold ">
                    Nike Air Max 97 SE
                    {/* <br /> */}
                    Mens Shoes
                  </h3>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex space-x-4 text-sm text text-gray-500 ">
                      <p>Size UK 8</p>
                      <p>Qty 1</p>
                    </div>
                    <p className="font-medium">₹ 16,995.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}

      <div className="w-full lg:w-[%] max-w-[1600px] mx-auto bg-black text-white mb-18">
        <div className="container mx-auto px-8 py-10 w-full">
          <div className="flex flex-row  justify-between ">
            {/* Left Side */}
            {/* <div className="mb-4 md:mb-0 flex justify-between ">
              <p className="text-sm mb-2">India</p>
              <p className="text-sm text-gray-400 ">
                © 2023 NIKE, Inc. All Rights Reserved
              </p>
              <div className="flex flex-row gap-4 mt-2 flex -justify-center">
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-white  gap-4 flex -justify-center"
                >
                  Terms of Use
                </a>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Terms of Sale
                </a>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
              </div>
            </div> */}

            {/* Right Side - Payment Logos */}
            <div className="flex flex-rows gap-6 justify-center items-center">
              <Image
                src="/payment-1.png"
                alt="Visa"
                width={40}
                height={25}
                className="h-auto w-auto"
              />
              <Image
                src="/payment-2.png"
                alt="Mastercard"
                width={40}
                height={25}
                className="h-auto w-auto"
              />
              <Image
                src="/payment-3.png"
                alt="American Express"
                width={40}
                height={25}
                className="h-auto w-auto"
              />
              <Image
                src="/payment-10.png"
                alt="Discover"
                width={40}
                height={25}
                className="h-auto w-auto"
              />

              <Image
                src="/payment-5.png"
                alt="JCB"
                width={40}
                height={25}
                className="h-auto w-auto"
              />
              <Image
                src="/payment-6.png"
                alt="Union Pay"
                width={40}
                height={25}
                className="h-auto w-auto"
              />
              <Image
                src="/payment-7.png"
                alt="Maestro"
                width={40}
                height={25}
                className="h-auto w-auto"
              />
              <Image
                src="/payment-8.png"
                alt="Paytm"
                width={40}
                height={25}
                className="h-auto w-auto"
              />
              <Image
                src="/payment-9.png"
                alt="UPI"
                width={40}
                height={25}
                className="h-auto w-auto"
              />
              <Image
                src="/payment-10.png"
                alt="Apple Pay"
                width={40}
                height={25}
                className="h-auto w-auto"
              />
              <Image
                src="/payment-11.png"
                alt="Apple Pay"
                width={40}
                height={25}
                className="h-auto w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;