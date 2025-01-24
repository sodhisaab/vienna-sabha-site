import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-12 pt-12 pb-6 px-10 font-[sans-serif] tracking-wide w-full">
      <div className="max-w-[1280px] mx-auto my-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:flex lg:items-center">
            <Link aria-label="Home" href="/">
              <Image
                src="https://readymadeui.com/readymadeui-light.svg"
                alt="logo"
                width={192}
                height={48}
                className="w-48"
              />
            </Link>
          </div>

          <div className="lg:flex lg:items-center">
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-gray-300 hover:fill-white w-7 h-7"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
              {/* Add other social links here */}
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-6 text-white">Useful links</h4>
            <ul className="space-y-4 pl-2">
              <li>
                <Link
                  href="/featured"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Featured
                </Link>
              </li>
              <li>
                <Link
                  href="/new-arrivals"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-6 text-white">Information</h4>
            <ul className="space-y-4 pl-2">
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-gray-300 text-sm mt-10">
          © {siteConfig.name}, Austria. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
