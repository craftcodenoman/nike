import React from "react";
import Link from "next/link";
import Image from "next/image";

function Product() {
  return (
    <div>
      <div className="w-full lg:w-[95%] max-w-[1440px] mx-auto py-8">
        <div className="container w-full mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">New (500)</h1>
          </div>

          {/* Right side - Filters and Sort */}
          <div className="flex items-center space-x-6">
            {/* Hide Filters button */}
            <button className="flex items-center space-x-2   px-4 py-2 ">
              <span>Hide Filters</span>

              <Link href="/">
                <Image
                  src="/Vector.png"
                  alt="Nike Shoes"
                  width={24}
                  height={24}
                  className="cursor-pointer w-full"
                  priority
                />
              </Link>
            </button>

            {/* Sort By dropdown */}
            <div className="flex items-center space-x-2">
              <span>Sort By</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Slidebar */}
        <div className="w-full flex flex-rows mt-10 ">
          <div className="w-64  shadow-lg p-4 ">
            {/* Categories Section */}
            <div className="mb-6">
              <h2 className="font-bold text-lg mb-3">Categories</h2>
              <ul className="space-y-2">
                {[
                  { href: "/categories/shoes", label: "Shoes" },
                  { href: "/categories/sports-bras", label: "Sports Bras" },
                  { href: "/categories/tops", label: "Tops & T-Shirts" },
                  {
                    href: "/categories/hoodies",
                    label: "Hoodies & Sweatshirts",
                  },
                  { href: "/categories/jackets", label: "Jackets" },
                  { href: "/categories/trousers", label: "Trousers & Tights" },
                  { href: "/categories/shorts", label: "Shorts" },
                  { href: "/categories/tracksuits", label: "Tracksuits" },
                  {
                    href: "/categories/jumpsuits",
                    label: "Jumpsuits & Rompers",
                  },
                  { href: "/categories/skirts", label: "Skirts & Dresses" },
                  { href: "/categories/socks", label: "Socks" },
                  {
                    href: "/categories/accessories",
                    label: "Accessories & Equipment",
                  },
                ].map((item) => (
                  <li key={item.href} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <Link href={item.href} className="hover:text-blue-600">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gender Section */}
            <div className="mb-6">
              <h2 className="font-bold text-lg mb-3">Gender</h2>
              <ul className="space-y-2">
                {[
                  { href: "/gender/men", label: "Men" },
                  { href: "/gender/women", label: "Women" },
                  { href: "/gender/unisex", label: "Unisex" },
                ].map((item) => (
                  <li key={item.href} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <Link href={item.href} className="hover:text-blue-600">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kids Section */}
            <div className="mb-6">
              <h2 className="font-bold text-lg mb-3">Kids</h2>
              <ul className="space-y-2">
                {[
                  { href: "/kids/boys", label: "Boys" },
                  { href: "/kids/girls", label: "Girls" },
                ].map((item) => (
                  <li key={item.href} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <Link href={item.href} className="hover:text-blue-600">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range Section */}
            <div>
              <h2 className="font-bold text-lg mb-3">Shop By Price</h2>
              <ul className="space-y-2">
                {[
                  { href: "/price/under-2500", label: "Under ₹ 2,500.00" },
                  {
                    href: "/price/2501-7500",
                    label: "₹ 2,501.00 - ₹ 7,500.00",
                  },
                ].map((item) => (
                  <li key={item.href} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600  rounded focus:ring-blue-500"
                    />
                    <Link href={item.href} className="hover:text-blue-600">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Shoes Pictures */}
          <div className="w-full   ">
            <div className=" container mx-auto px-4 flex flex-rows mt-5 gap-5">
              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-9.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold mt-4">Nike Air Force 1 React</h2>
                    <p className="text-gray-400">
                      Mens Shoes <br />
                      1- Colour
                    </p>
                    <h2 className="font-black flex  mt-4">MRP : ₹ 13 295.00</h2>
                  </div>
                </Link>
              </div>

              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-10.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">
                      Promo Exclusion
                    </h2>
                    <h2 className="font-bold mt-4">Air Jordan 1 Elevate Low</h2>
                    <p className="text-gray-400">
                      Womens Shoes <br />
                      1- Colour
                    </p>
                    <h2 className="font-black flex  mt-4">MRP : ₹ 11 895.00</h2>
                  </div>
                </Link>
              </div>

              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/nike-5.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full "
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold mt-4">Nike Standard Issue</h2>
                    <p className="text-gray-400">
                      Womens Basketball Jersey <br />
                      1- Colour
                    </p>
                    <h2 className=" font-black flex  mt-4">MRP : ₹ 2 895.00</h2>
                  </div>
                </Link>
              </div>
            </div>

            {/* Start -1 */}

            <div className="container mx-auto px-4 flex flex-rows mt-5 gap-5">
              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-13.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">
                      Promo Exclusion
                    </h2>
                    <h2 className="font-bold mt-4">Nike Dunk Low Retro SE</h2>
                    <p className="text-gray-400">
                      Mens Shoes <br />
                      1- Colour
                    </p>
                    <h2 className=" font-black flex  mt-4">MRP : ₹ 9 695.00</h2>
                  </div>
                </Link>
              </div>

              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-7.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">
                      Sustainable Materials
                    </h2>
                    <h2 className="font-bold mt-4">Nike Dri-FIT UV Hyverse</h2>
                    <p className="text-gray-400">
                      Mens Short Sleeve Graphic Fitness Top
                      <br />
                      1- Colour
                    </p>
                    <h2 className="font-black flex  mt-4">MRP : ₹ 2 495.00</h2>
                  </div>
                </Link>
              </div>

              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-15.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="justify-between flex flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold mt-4">Nike Court Vision Low</h2>
                    <p className="text-gray-400">
                      Mens Shoes
                      <br />
                      1- Colour
                    </p>
                    <h2 className="font-black flex  mt-4">MRP : ₹ 5 695.00</h2>
                  </div>
                </Link>
              </div>
            </div>

            {/* Start -2 */}

            <div className="container mx-auto px-4 flex flex-rows mt-5  gap-5">
              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-29.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold mt-4">Nike Dri-FIT Ready</h2>
                    <p className="text-gray-400">
                      Mens Short Sleeve Fitness Top <br />
                      3- Colour
                    </p>
                    <h2 className="font-black flex  mt-4">MRP : ₹ 2 495.00</h2>
                  </div>
                </Link>
              </div>

              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-32.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4"> Just In</h2>
                    <h2 className="font-bold  mt-4">
                      Nike One Leak Protection: Period
                    </h2>
                    <p className="text-gray-400">
                      ` Womens Mid-Rise 18cm (approx.) Biker Shorts `<br />
                      2- Colour
                    </p>
                    <h2 className=" font-black flex  mt-4">MRP : ₹ 3 395.00</h2>
                  </div>
                </Link>
              </div>

              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-18.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold mt-4">Nike Air Force 1 LV8 3</h2>
                    <p className="text-gray-400">
                      Older Kids Shoe <br />
                      1- Colour
                    </p>
                    <h2 className="font-black flex  mt-4">MRP : ₹ 7 495.00</h2>
                  </div>
                </Link>
              </div>
            </div>

            <div className="container w-full px-4 flex flex-rows mt-5 gap-5">
              <div className="product-card ">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-6.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold  mt-4">
                      ` Nike Air Force 1 Mid 07`
                    </h2>
                    <p className="text-gray-400">
                      Mens Shoes <br />
                      1- Colour
                    </p>
                    <h2 className=" font-black flex  mt-4">
                      MRP : ₹ 10 795.00
                    </h2>
                  </div>
                </Link>
              </div>

              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-7.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold mt-4">
                      Nike Court Vision Low Next Nature
                    </h2>
                    <p className="text-gray-400">
                      Mens Shoes <br />
                      1- Colour
                    </p>
                    <h2 className="font-black flex  mt-4">MRP : ₹ 4 995.00</h2>
                  </div>
                </Link>
              </div>

              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-8.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold mt-4">
                      Nike Air Force 1 PLT.AF.ORM
                    </h2>
                    <p className="text-gray-400">
                      Womens Shoes <br />
                      1- Colour
                    </p>
                    <h2 className="font-black flex  mt-4">MRP : ₹ 8 695.00</h2>
                  </div>
                </Link>
              </div>
            </div>

            {/* Start -3 */}

            <div className="container mx-auto px-4 flex flex-rows mt-5 gap-5">
              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-19.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold mt-4">Nike Blazer Low Platform</h2>
                    <p className="text-gray-400">
                      Womens Shoes <br />
                      1- Colour
                    </p>
                    <h2 className="font-black flex  mt-4">MRP : ₹ 8 195.00</h2>
                  </div>
                </Link>
              </div>

              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-20.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold mt-4">Nike Air Force 1 07</h2>
                    <p className="text-gray-400">
                      Womens Shoes <br />
                      2- Colour
                    </p>
                    <h2 className=" font-black flex  mt-4">MRP : ₹ 8 195.00</h2>
                  </div>
                </Link>
              </div>

              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-35.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between  flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold mt-4">Nike Pro Dri-FIT</h2>
                    <p className="text-gray-400">
                      Mens Tight-Fit Sleeveless Top <br />
                      1- Colour
                    </p>
                    <h2 className=" font-black flex  mt-4">MRP : ₹ 1 495.00</h2>
                  </div>
                </Link>
              </div>
            </div>

            {/* Start -4 */}

            <div className="container mx-auto px-4 flex flex-rows mt-5 gap-5">
              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-22.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold mt-4">Nike Dunk Low Retro</h2>
                    <p className="text-gray-400">
                      Mens Shoes <br />
                      1- Colour
                    </p>
                    <h2 className="font-black flex  mt-4">MRP : ₹ 8 695.00</h2>
                  </div>
                </Link>
              </div>

              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-23.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4"> Just In</h2>
                    <h2 className="font-bold mt-4">Nike Air Max SC</h2>
                    <p className="text-gray-400">
                      Womens Shoes <br />
                      2- Colour
                    </p>
                    <h2 className="font-black flex  mt-4">MRP : ₹ 5 995.00</h2>
                  </div>
                </Link>
              </div>

              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-27.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold mt-4">Nike Dri-FIT UV Miler</h2>
                    <p className="text-gray-400">
                      Mens Short-Sleeve Running Top <br />
                      1- Colour
                    </p>
                    <h2 className=" font-black flex  mt-4">MRP : ₹ 1 695.00</h2>
                  </div>
                </Link>
              </div>
            </div>

            {/* Start -5 */}

            <div className="container mx-auto px-4 flex flex-rows mt-5 gap-5">
              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-25.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold mt-4">Nike Air Max SYSTM</h2>
                    <p className="text-gray-400">
                      Older Kids Shoes <br />
                      1- Colour
                    </p>
                    <h2 className="font-black flex  mt-4">MRP : ₹ 6 495.00</h2>
                  </div>
                </Link>
              </div>

              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-36.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4"> Just In</h2>
                    <h2 className="font-bold  mt-4">Nike Alate All U</h2>
                    <p className="text-gray-400">
                      Womens Light-Support Lightly Lined <br /> U-Neck Printed
                      Sports Bra <br />
                      1- Colour
                    </p>
                    <h2 className="font-black flex  mt-4">MRP : ₹ 2 195.00</h2>
                  </div>
                </Link>
              </div>

              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-27.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold mt-4">Nike Court Legacy Lift</h2>
                    <p className="text-gray-400">
                      Womens Shoes <br />
                      2- Colour
                    </p>
                    <h2 className=" font-black flex  mt-4">MRP : ₹ 7 495.00</h2>
                  </div>
                </Link>
              </div>
            </div>

            {/* Start -6 */}

            <div className="container mx-auto px-4 flex flex-rows mt-5 gap-5">
              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-6.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold  mt-4">Nike Swoosh</h2>
                    <p className="text-gray-400">
                      Womens Medium-support Padded Sports Bra Tank <br />
                      1- Colour
                    </p>
                    <h2 className=" font-black flex  mt-4">MRP : ₹ 3 095.00</h2>
                  </div>
                </Link>
              </div>

              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-29.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4"> Just In</h2>
                    <h2 className="font-bold mt-4">
                      Just In Nike SB Zoom Janoski OG+
                    </h2>
                    <p className="text-gray-400">
                      Shoes <br />
                      1- Colour
                    </p>
                    <h2 className=" font-black flex  mt-4">MRP : ₹ 8 595.00</h2>
                  </div>
                </Link>
              </div>

              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-25.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold mt-4">
                      Nike Dri-FIT Run Division Rise 365
                    </h2>
                    <p className="text-gray-400">
                      Mens Running Tank <br />
                      2- Colour
                    </p>
                    <h2 className="font-black flex  mt-4">MRP : ₹ 3 495.00</h2>
                  </div>
                </Link>
              </div>
            </div>

            {/* Start -7 */}

            <div className="container mx-auto px-4 flex flex-rows mt-5 gap-5">
              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/nike-3.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold mt-4">Nike Dri-FIT Challenger</h2>
                    <p className="text-gray-400">
                      Mens 18cm approx 2-in-1 Versatile Shorts <br />
                      1- Colour
                    </p>
                    <h2 className="font-black flex  mt-4">MRP : ₹ 2 495.00</h2>
                  </div>
                </Link>
              </div>

              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-32.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold mt-4">Jordan Series ES</h2>
                    <p className="text-gray-400">
                      Mens Shoes
                      <br />
                      2- Colour
                    </p>
                    <h2 className=" font-black flex  mt-4">MRP : ₹ 7 495.00</h2>
                  </div>
                </Link>
              </div>

              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-25.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full bg-white"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold mt-4">Nike Outdoor Play</h2>
                    <p className="text-gray-400">
                      Older Kids Oversized Woven Jacket <br />
                      1- Colour
                    </p>
                    <h2 className=" font-black flex  mt-4">MRP : ₹ 3 895.00</h2>
                  </div>
                </Link>
              </div>
            </div>

            {/* Start -8 */}

            <div className="container mx-auto px-4 flex flex-rows mt-5 gap-5">
              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-15.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold mt-4">Nike Sportswear Trend</h2>
                    <p className="text-gray-400">
                      Older Kids Girls High-waisted Woven Shorts <br />
                      1- Colour
                    </p>
                    <h2 className=" font-black flex  mt-4">MRP : ₹ 2 495.00</h2>
                  </div>
                </Link>
              </div>

              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-35.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4"> Just In</h2>
                    <h2 className="font-bold mt-4">Nike SB Force 58</h2>
                    <p className="text-gray-400">
                      Skate Shoe
                      <br />
                      1- Colour
                    </p>
                    <h2 className=" font-black flex  mt-4">MRP : ₹ 5 995.00</h2>
                  </div>
                </Link>
              </div>

              <div className="product-card">
                <Link href="/ProductDetails">
                  <Image
                    src="/shoes-36.png"
                    alt="Nike Shoes"
                    width={348}
                    height={348}
                    className="cursor-pointer w-full bg-[#F5F5F5]"
                    priority
                  />
                  <div className="flex justify-between flex-col">
                    <h2 className="font-bold text-red-500 mt-4">Just In</h2>
                    <h2 className="font-bold mt-4">Nike Blazer Low 77 Jumbo</h2>
                    <p className="text-gray-400">
                      Womens Shoes <br />
                      1- Colour
                    </p>
                    <h2 className="font-black   mt-4">MRP : ₹ 8 595.00</h2>
                  </div>
                </Link>
              </div>
            </div>

            {/* buttons */}

            <div className="mt-20">
              <h1 className="font-bold text-2xl flex justify-start ">
                Related Categories
              </h1>
              <div className="  space-y-4 w-1092 h-174 p-9 shadow-lg rounded-fulllg  ">
                <button className="text-left  px-4 py-2 hover:bg-gray-200 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2">
                  Best Selling Product
                </button>
                <button className="text-left px-4 py-2 hover:bg-gray-200 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2">
                  Best Shoes
                </button>

                <button className="text-left px-4 py-2 hover:bg-gray-200 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2">
                  New Basketball Shoes
                </button>

                <button className="text-left px-4 py-2 hover:bg-gray-200 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2">
                  New Football Shoes
                </button>

                <button className="text-left px-4 py-2 hover:bg-gray-200 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2">
                  New Mens Shoes
                </button>

                <button className="text-left px-4 py-2 hover:bg-gray-200 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2">
                  New Running Shoes
                </button>

                <button className="text-left px-4 py-2 hover:bg-gray-200 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2">
                  Best Mens Shoes
                </button>

                <button className="text-left px-4 py-2 hover:bg-gray-200 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2">
                  New Jordan Shoes
                </button>

                <button className="text-left px-4 py-2 hover:bg-gray-200 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2">
                  Best Womens Shoes
                </button>

                <button className="text-left px-4 py-2 hover:bg-gray-200 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2">
                  Best Training & Gym
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Product;
