import React from "react";
import Link from "next/link";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full lg:w-[%] max-w-[1600px] mx-auto bg-black text-white">
      <div className="container mx-auto px-8 py-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First Column */}
          <div className="space-y-4 text-white">
            <Link href="/store-locator" className="block hover:text-gray-400">
              FIND A STORE
            </Link>
            <Link href="/membership" className="block hover:text-gray-400">
              BECOME A MEMBER
            </Link>
            <Link href="/signup" className="block hover:text-gray-400">
              SIGN UP FOR EMAIL
            </Link>
            <Link href="/feedback" className="block hover:text-gray-400">
              SEND US FEEDBACK
            </Link>
            <Link
              href="/student-discount"
              className="block hover:text-gray-400"
            >
              STUDENT DISCOUNT
            </Link>
          </div>

          {/* Second Column - GET HELP */}
          <div>
            <h3 className="font-bold mb-4">GET HELP</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/orders" className="hover:text-white">
                  Order Status
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="hover:text-white">
                  Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-white">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/payment" className="hover:text-white">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Us On Nike.com Inquiries
                </Link>
              </li>
              <li>
                <Link href="/contact-other" className="hover:text-white">
                  Contact Us On All Other Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Third Column - ABOUT NIKE */}
          <div>
            <h3 className="font-bold mb-4">ABOUT NIKE</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/news" className="hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/investors" className="hover:text-white">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-white">
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          {/* Fourth Column - Social Media */}
          <div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-white transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-white transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-white transition-colors"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href="#"
                className="text-white hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2023 Nike, Inc. All Rights Reserved.
            </div>

            {/* Bottom Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-400">
              <Link href="/guides" className="hover:text-white">
                Guides
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Sale
              </Link>
              <Link href="/terms" className="hover:text-white">
                Terms of Use
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Nike Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
