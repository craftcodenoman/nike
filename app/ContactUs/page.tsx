
import { BiSearch } from "react-icons/bi";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { RiMessage2Fill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";

function ContactUs() {
  return (
    <div className="w-full lg:w-[95%] max-w-[1440px] mx-auto ">
      {/* Header and Search Section */}

      <div className="text-center py-8  ">
        <h1 className="font-bold text-5xl mb-8">GET HELP</h1>
        <div className="max-w-2xl mx-auto px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="What can we help you with?"
              className="w-full px-8 py-3 pr-10 text-gray-800 placeholder-gray-100  rounded-full border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
            />
            <BiSearch className="absolute right-5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4">
        <div className="flex justify-start ">
          {/* Left Column - Payment Info */}
          <div className="lg:pr-8 ">
            <h2 className="text-2xl font-bold mb-6">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </h2>

            {/* <!-- Introduction Section --> */}
            <div className="mb-8">
              <ul className="list-disc pl-6 mb-4 ml-7">
                <li>
                  {" "}
                  We want to make buying your Nike shoes and gear, online fast
                  and easy, and we accept the following payment options:
                </li>
              </ul>
              <ul className="list-disc pl-6 mb-4 ml-7">
                <li>
                  Visa, Mastercard, Diners Club, Discover, American Express,
                  Visa Electron, Maestro
                </li>
              </ul>
              <ul className="list-disc pl-6 mb-4 ml-7  ">
                <li>
                  If you enter your PAN information at checkout you all be able
                  to pay for your order with PayTM or a local credit or debit
                  card,Apple Pay
                </li>
              </ul>
              <ul className="list-disc pl-6 mb-4 ml-7">
                <li>
                  {" "}
                  <u>
                    <b> Nike Members</b>
                  </u>
                  can store multiple debit or credit cards in their profile for
                  faster checkout. If you are not already a Member
                  <u>join us</u> today.
                </li>
              </ul>
              <button className="bg-gray-600 text-white px-6 py-1 rounded-full hover:bg-gray-800 transition duration-300 mb-6">
                JOIN US
              </button>
              <button className="bg-gray-600 text-white px-6 py-1 ml-8 rounded-full hover:bg-gray-800 transition duration-300 mb-6">
                SHOP NIKE
              </button>
            </div>

            {/* <!-- FAQs Section --> */}
            <div className="mb-8 ">
              <h2 className="text-xl font-bold  mb-6">FAQs</h2>

              {/* <!-- FAQ Items --> */}
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h3 className="font-bold mb-2">
                    Does my card need international purchases enabled?
                  </h3>
                  <p className="text-gray-400">
                    Yes, we recommend asking your bank to enable international
                    purchases on your card. You will be notified at checkout if
                    international purchases need to be enabled.
                    <br />
                    <br />
                    Please note, some banks may charge{" "}
                    <b>
                      <u>a small transaction fee</u>
                    </b>{" "}
                    for international orders.
                  </p>
                </div>

                <div className="border-b pb-4">
                  <h3 className="font-bold mb-2">
                    Can I pay for my order with multiple methods?
                  </h3>
                  <p className="text-gray-400">
                    No payment for Nike orders cant be split between multiple
                    payment methods./{" "}
                  </p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-bold mb-2">
                    What payment method is accepted for SNKRS orders?
                  </h3>
                  <p className="text-gray-400">
                    You can use any accepted credit card to pay for your SNKRS
                    order.
                  </p>
                </div>

                <div className="border-b pb-4">
                  <h3 className="font-bold mb-2">
                    Why dont I see Apple Pay as an option?
                  </h3>
                  <p className="text-gray-400">
                    To see Apple Pay as an option in the Nike App or on
                    Nike.com, youll need to use a compatible Apple device
                    running the latest OS, be signed in to your iCloud account
                    and have a supported card in your Wallet. Additionally,
                    youll need to use Safari to use Apple Pay on Nike.com.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Feedback Section --> */}
            <div className="mb-2">
              <p className="text-gray-600 mb-2">Was this answer helpful?</p>
              <div className="flex flex-row gap-5 ">
                <FaThumbsUp />
                <FaThumbsDown />
              </div>
            </div>

            {/* <!-- Related Topics --> */}
            <div className=" p-6  rounded ">
              <h2 className="font-extrabold mb-4  mr-1 ">RELATED</h2>

              <ul className="space-y-2 text-gray-400 ml-8">
                <li>
                  <a href="#" className="hover:underline ">
                    <u>
                      <b> WHAT ARE NIKES DELIVERY OPTIONS?</b>
                    </u>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline ">
                    <u>
                      <b> HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</b>
                    </u>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Information */}
        <div className="lg:pl-8">
          <div className="text-center flex justify-end">
            {/* Contact Sections */}
            <div className="space-y-12">
              {/* Phone */}
              <div>
                <h2 className="text-3xl font-bold mb-8 uppercase">
                  Contact Us
                </h2>

                <ImMobile className="w-16 h-16 mx-auto mb-4" />
                <p className="font-bold text-2xl mb-4">000 800 919 0566</p>
                <div className="space-y-2">
                  <p>Products & Orders: 24 hours a day,</p>
                  <p>7 days a week</p>
                  <p>Company Info & Enquiries: 07:30-16:30,</p>
                  <p>Monday - Friday</p>
                </div>
              </div>

              {/* Message */}
              <div>
                <RiMessage2Fill className="w-16 h-16 mx-auto mb-4" />
                <p className="font-bold mb-2">24 hours a day</p>
                <p>7 days a week</p>
              </div>

              {/* Email */}
              <div>
                <MdEmail className="w-16 h-16 mx-auto mb-4" />
                <p>Wel reply within</p>
                <p>five business days</p>
              </div>

              {/* Store Locator */}
              <div>
                <IoLocation className="w-16 h-16 mx-auto mb-4" />
                <p className="font-bold mb-2">STORE LOCATOR</p>
                <p className="hover:underline cursor-pointer">
                  Find Nike retail stores near you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

