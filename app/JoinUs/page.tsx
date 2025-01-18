
import Image from "next/image";
import Link from "next/link";

function JoinUs() {
  return (
    <div className="flex justify-center mt-10  ">
      <div className="container mx-auto ml-16 flex flex-col items-center text-center mt-10 mb-40">
        <Link href="/">
          <Image
            src="/nike logo.png"
            alt="Nike Logo"
            width={200}
            height={100}
            className="cursor:pointer image "
            priority
          />
        </Link>
        <h1 className="font-bold text-3xl text-center">BECOME A NIKE MEMBER</h1>
        <br />
        <p className="text-center">
          Create your Nike Member profile and get
          <br />
          first access to the very best of Nike <br />
          products, inspiration and community.
        </p>

        {/* FORM */}
        <div className="bg-gray-100 mt-10">
          <div className="max-w-md w[380px] mx-auto p-6">
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-black"
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-black"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-black"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-black"
              />
            </div>

            <div className="mb-4">
              <input
                type="date"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-black"
              />
              <p className="text-sm text-gray-600 mt-1">
                Get a Nike Member Reward every year on your Birthday.
              </p>
            </div>

            <div className="mb-4">
              <select className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-black">
                <option value="India">India</option>
              </select>
            </div>

            <div className="mb-4">
              <div className="flex space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="focus:ring-black"
                  />
                  <span className="text-sm">Male</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="focus:ring-black"
                  />
                  <span className="text-sm">Female</span>
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="flex items-start space-x-2">
                <input type="checkbox" className="mt-1 focus:ring-black" />
                <span className="text-sm">
                  Sign up for emails to get updates from Nike on products,
                  offers and your Member benefits
                </span>
              </label>
            </div>

            <div className="mb-6 text-sm text-gray-600">
              <p>
                By creating an account you agree to Nike <br />
                <a href="#" className="underline text-black">
                  Privacy Policy
                </a>{" "}
                and
                <a href="#" className="underline text-black">
                  Terms of Use
                </a>
                .
              </p>
            </div>

            <button className="w-full bg-black text-gray-200 py-4 rounded font-bold hover:bg-gray-800 transition duration-200">
              JOIN US
            </button>

            <h1>
              Already a Member? <u>Sign In.</u>{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default JoinUs;

