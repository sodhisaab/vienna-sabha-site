import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-12 pt-12 pb-6 px-10 font-[sans-serif] tracking-wide w-full">
      <div className="max-w-[1280px] mx-auto my-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:flex lg:items-center">
            <Link aria-label="Home" href="/">
              <Image
                src="/harr-white.png"
                alt="logo"
                width={192}
                height={48}
                className="w-48"
              />
            </Link>
          </div>

          <div>
            <ul className="space-y-4 pl-2">
              <li>
                <Link
                  href="/about/history"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  href="/about/our-team"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-4 pl-2">
              {" "}
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center my-4 w-full">
          <p className="text-gray-300 text-sm ">
            © {siteConfig.name}, Austria. All rights reserved.
          </p>
          <div className="flex-auto">
            <SocialMedia />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
