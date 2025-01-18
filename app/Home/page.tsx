import Image from "next/image";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function HomePage() {
  return (
    <div>
      <div className="container mx-auto px-4 flex flex-col ">
        <h1 className=" text-4xl font-bold mt-28 text-center">
          Hello Nike App
        </h1>
        <p className="text-center ">
          Download the app to access everything Nike.{" "}
          <b>
            <u>Get Your Great</u>
          </b>
        </p>

        {/* Hero Image */}
        <div className="flex flex-col items-center space-y-6 pt-6 ">
          <Link href="/">
            <Image
              src="/nike-1.png"
              alt="Nike Shoes"
              width={1344}
              height={597}
              className="cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* Search and Navigation Section */}
        <div className="mt-10 flex justify-between items-center">
          <h1 className="text-xl font-bold">Best Of Air Max</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Shop"
                className="w-40 h-10 pl-4 pr-8 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <IoIosArrowBack size={24} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <IoIosArrowForward size={24} />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Product 1 */}
          <div className="product-card">
            <Link href="/">
              <Image
                src="/nike-3.png"
                alt="Nike Shoes"
                width={441}
                height={441}
                className="cursor-pointer w-full"
                priority
              />
              <div className="flex justify-between ">
                <h2 className="font-bold mt-4">Nike Air Max Pulse</h2>
                <h2 className=" flex justify-end mt-4  ">₹ 13 995</h2>
              </div>
              <p className="text-gray-700">Mens Shoes</p>
            </Link>
          </div>

          {/* Product 2 */}
          <div className="product-card">
            <Link href="/">
              <Image
                src="/nike-5.png"
                alt="Nike Shoes"
                width={441}
                height={441}
                className="cursor-pointer w-full"
                priority
              />

              <div className="flex justify-between ">
                <h2 className="font-bold  mt-4">Nike Air Max Pulse</h2>
                <h2 className=" flex justify-end mt-4">₹ 13 995</h2>
              </div>
              <p className="text-gray-700">Womens Shoes</p>
            </Link>
          </div>

          {/* Product 3 */}
          <div className="product-card">
            <Link href="/">
              <Image
                src="/nike-3.png"
                alt="Nike Shoes"
                width={441}
                height={441}
                className="cursor-pointer w-full"
                priority
              />
              <div className="flex justify-between">
                <h2 className="font-bold  mt-4">Nike Air Max 97 SE</h2>
                <h2 className=" flex justify-end mt-4">₹ 13 995</h2>
              </div>
              <p className="text-gray-700">Mens Shoes</p>
            </Link>
          </div>
        </div>
      </div>
      <br />

      <div className="w-[1008] h-177 text-center flex flex-col">
        <h1 className="text-start font-bold">Featured</h1>
        <div className="walking pic"></div>
        <Link href="/">
          <Image
            src="/nike-walk.png"
            alt="Nike Shoes"
            width={441}
            height={441}
            className="cursor-pointer w-full"
            priority
          />
        </Link>
        <h1 className="w-54px  text-center font-bold text-5xl mt-5 ">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <br />
        <p className="w-473  font-Helvetica Neue">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <br />
        <div className="relative">
          <input
            type="text"
            placeholder="Find Your Shoes"
            className="w-40 h-10 pl-4 pr-8 rounded-full bg-black text-white focus:outline-none focus:ring-2"
          />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-bold text-4xl flex">Gear Up</h1>
        </div>
        {/* Search Controls */}
        <div className="flex justify-end mb-4">
          <input
            type="text"
            placeholder="Search Products"
            className="w-40 h-10 pl-4 pr-8 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
          <div className="flex ml-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <IoIosArrowBack size={24} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <IoIosArrowForward size={24} />
            </button>
          </div>
        </div>
        {/* Products Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="product-card text-center">
            <Link href="/">
              <Image
                src="/men-1.png"
                alt="Nike Shoes"
                width={300}
                height={300}
                className="cursor-pointer w-full"
                priority
              />
              <div className="flex justify-between">
                <h2 className="font-bold  mt-4">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h2>
                <h2 className="text-black flex justify-end mt-4">₹3 895</h2>
              </div>
              <p className="text-gray-700 text-left">
                Mens Short-Sleeve <br /> Running Top
              </p>
            </Link>
          </div>

          {/* Product 2 */}
          <div className="product-card text-center">
            <Link href="/">
              <Image
                src="/shoes-7.png"
                alt="Nike Shoes"
                width={300}
                height={300}
                className="cursor-pointer w-full"
                priority
              />
              <div className="flex justify-between">
                <h2 className="font-bold  mt-4">Nike Dri-FIT Challenger</h2>
                <h2 className="text-black flex justify-end mt-4">₹ 2 495</h2>
              </div>
              <p className="text-gray-700 text-left">
                `Mens 18cm (approx.) 2-in-1 <br /> Versatile Shorts`{" "}
              </p>
            </Link>
          </div>

          {/* Product 3 */}
          <div className="product-card text-center">
            <Link href="/">
              <Image
                src="/women-1.png"
                alt="Nike Shoes"
                width={300}
                height={300}
                className="cursor-pointer w-full"
                priority
              />
              <div className="flex justify-between">
                <h2 className="font-bold  mt-4">
                  Nike Dri-FIT ADV Run Division
                </h2>
                <h2 className="text-black flex justify-end mt-4">₹ 5 295</h2>
              </div>
              <p className="text-gray-700 text-left">
                Womens Long-Sleeve <br /> Running Top
              </p>
            </Link>
          </div>

          {/* Product 4 */}
          <div className="product-card text-center">
            <Link href="/">
              <Image
                src="/shoes-10.png"
                alt="Nike Shoes"
                width={300}
                height={300}
                className="cursor-pointer w-full"
                priority
              />
              <div className="flex justify-between">
                <h2 className="font-bold  mt-4">Nike Fast</h2>
                <h2 className="text-black flex justify-end mt-4">₹ 3 795</h2>
              </div>
              <p className="text-gray-700 text-left">
                Womens Mid-Rise 7/8 Running
                <br /> Leggings with Pockets
              </p>
            </Link>
          </div>
        </div>
        <br />
        <div className="w- full text-center mt-10">
          <h1 className=" text-4xl flex">Dont Miss</h1>
          <Link href="/">
            <Image
              src="/joker.png"
              alt="Nike Shoes"
              width={1344}
              height={700}
              className="cursor-pointer w-full"
              priority
            />
          </Link>
          <br />
          <h1 className="w-54px text-center font-bold text-5xl mt-5">
            FLIGHT ESSENTIALS
          </h1>
          <br />
          <p>
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>{" "}
          <br />
          <input
            type="text"
            placeholder="Shop"
            className="w-24 h-10 pl-4 pr-8 rounded-full bg-[#111111] text-center focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
        <div>
          <h1 className=" text-4xl flex">The Essentials</h1>

          <div className="flex flex-rows w-fulltext-center gap-5 mt-10">
            <Link href="/">
              <Image
                src="/Image (1).png"
                alt="Nike Shoes"
                width={440}
                height={540}
                className="cursor-pointer w-full"
                priority
              />
            </Link>
            <Link href="/">
              <Image
                src="/Image (2).png"
                alt="Nike Shoes"
                width={440}
                height={540}
                className="cursor-pointer w-full"
                priority
              />
            </Link>
            <Link href="/">
              <Image
                src="/Image (3).png"
                alt="Nike Shoes"
                width={440}
                height={540}
                className="cursor-pointer w-full"
                priority
              />
            </Link>
          </div>
        </div>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Icons Column */}
            <div className=" p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Icons</h2>
              <ul className="space-y-2">
                <li className="hover:text-gray-600 cursor-pointer">
                  Air Force 1
                </li>
                <li className="hover:text-gray-600 cursor-pointer">Huarache</li>
                <li className="hover:text-gray-600 cursor-pointer">
                  Air Max 90
                </li>
                <li className="hover:text-gray-600 cursor-pointer">
                  Air Max 95
                </li>
              </ul>
            </div>

            {/* Shoes Column */}
            <div className=" p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Shoes</h2>
              <ul className="space-y-2">
                <li className="hover:text-gray-600 cursor-pointer">
                  All Shoes
                </li>
                <li className="hover:text-gray-600 cursor-pointer">
                  Custom Shoes
                </li>
                <li className="hover:text-gray-600 cursor-pointer">
                  Jordan Shoes
                </li>
                <li className="hover:text-gray-600 cursor-pointer">
                  Running Shoes
                </li>
              </ul>
            </div>

            {/* Clothing Column */}
            <div className="p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Clothing</h2>
              <ul className="space-y-2">
                <li className="hover:text-gray-600 cursor-pointer">
                  All Clothing
                </li>
                <li className="hover:text-gray-600 cursor-pointer">
                  Modest Wear
                </li>
                <li className="hover:text-gray-600 cursor-pointer">
                  Hoodies & Pullovers
                </li>
                <li className="hover:text-gray-600 cursor-pointer">
                  Shirts & Tops
                </li>
              </ul>
            </div>

            {/* Kid's Column */}
            <div className=" p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Kids</h2>
              <ul className="space-y-2">
                <li className="hover:text-gray-600 cursor-pointer">
                  Infant & Toddler Shoes
                </li>
                <li className="hover:text-gray-600 cursor-pointer">
                  Kids Shoes
                </li>
                <li className="hover:text-gray-600 cursor-pointer">
                  Kids Jordan Shoes
                </li>
                <li className="hover:text-gray-600 cursor-pointer">
                  Kids Basketball Shoes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
