
import Link from "next/link";
import Image from "next/image";
import { RiShoppingCartFill } from "react-icons/ri";

function ProductDetails() {
  return (
    <div className="w-full lg:w[95%] max-w[1440px] mx-auto">
    <div className="container w-full mx-auto px-4 flex flex-col py-6  mt-20 ">
       <div className="containerw-full mx-auto px-4  gap-5 ml-40 flex justify-between">  
        <div>
          <Link href="/">
            <Image
              src="/shoes-37.png"
              alt="Nike Shoes"
              width={450}
              height={450}
              className="cursor-pointer "
              priority
            />
          </Link>
        </div>

        <div className=" ">
          <h1 className="font-semibold text-3xl">
            Nike Air Force 1 <br />
            PLATFORM
          </h1>

          <p>
            Turn style on its head with this crafted take on the <br />
            Air Jordan 1 Mid Its inside out inspired <br />
            construction including unique layering and
            <br />
            exposed foam accents, ups the ante on this
            <br />
            timeless Jordan Brand silhouette. Details like the <br />
            deco stitching on the Swoosh add coveted <br />
            appeal, while the unexpected shading, rich
            <br />
            mixture of materials and aged midsole aesthetic
            <br />
            give this release an artisan finish.
            <br /> <br />
            <b className="font-bold text-4xl">₹ 8 695.00</b>
          </p>
          <br />

          <div className="relative flex text-white items-center mt-8 mb-10">
            {" "}
            <button className="absolute left-8 hover:gray-700 flex items-center ml-10 space-x-2">
              {" "}
              <Link href="Cart" className="">
                {" "}
                Add To Cart{" "}
              </Link>{" "}
              <RiShoppingCartFill size={20} />
            </button>{" "}
            <input
              type="text"
              placeholder=" "
              className="pl-14 pr-4 py-5 rounded-full bg-black focus:outline-none focus:ring-2 focus:ring-gray-200"
            />{" "}
          </div>
        </div>
       </div>
    </div>
    </div>
  );
}
export default ProductDetails;

