
import React from "react";
import Link from "next/link";
import Image from "next/image";

function SignIn() {
  return (
    <div>
      <div className="w-full lg[95%] max-w-[1440px] h-full mt-20 ">
        {/* Fixed duplicate w-full and adjusted height */}
        <div className=" mx-auto  flex flex-col items-center text-center mb-40 h-full ">
          {/* Center content horizontally and vertically */}
          <Link href="/">
            <Image
              src="/nike logo.png"
              alt="Nike Logo"
              width={200}
              height={80}
              className="cursor-pointer mb-8 "
              priority
            />
          </Link>

          <h1 className="font-bold text-3xl">
            YOUR ACCOUNT <br /> FOR EVERYTHING{" "}
          </h1>
          <h1 className="text-center font-bold text-4xl"> NIKE</h1>

          {/* FORM */}

          <div className="flex flex-col items-center  w-[389px]  justify-center min-h-screen bg-gray-200 p-4 mt-10">
            {/* Main container */}
            <div className="w-full max-w-md space-y-8">
              {/* Form container */}
              <form className="mt-8 space-y-6">
                {/* Email input */}
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required
                  />
                </div>

                {/* Password input */}
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required
                  />
                </div>

                {/* Remember me and Forgot password row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember-me"
                      className="h-4 w-4 text-gray-900 focus:ring-gray-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 text-sm text-gray-900"
                    >
                      Keep me signed in
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="text-gray-900 hover:underline">
                      Forgotten your password?
                    </a>
                  </div>
                </div>

                {/* Sign In button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition duration-200"
                  >
                    SIGN IN
                  </button>
                </div>

                <p className="text-xs text-center text-gray-600 mt-4">
                  By logging in you agree to Nike
                  <u> Privacy Policy</u> <br />
                  and <u> Terms of Use</u>
                </p>

                {/* Join Us link */}
                <div className="text-center mt-4 ">
                  <span className="text-gray-600">Not a Member? </span>
                  <a href="#" className="text-black hover:underline">
                    <u>Join Us </u>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;







