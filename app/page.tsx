import Image from "next/image";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import Mission from "@/components/mission";
import Vision from "@/components/vision";
import Purpose from "@/components/purpose";

export default function Home() {
  return (
    <section className="flex flex-col gap-4">
      <div className="pt-6 w-full mb-8">
        <div className="mx-auto max-w-[1280] lg:flex lg:items-center lg:gap-x-14 lg:py-2">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl bg-gradient-to-r from-[#00b7fa] to-[#0097ab] text-transparent bg-clip-text">
              Shri <span>Guru Ravidass&nbsp;</span>
              Sabha Vienna
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 dark:text-gray-400 sm:text-xl/8">
              At
              <span className="bg-gradient-to-r from-[#00b7fa] to-[#006b7a] text-transparent bg-clip-text">
                &nbsp;{siteConfig.name}
              </span>
              , we are a community united by the teachings of
              <span className="bg-gradient-to-r from-[#00b7fa] to-[#006b7a] text-transparent bg-clip-text">
                &nbsp;Shri Guru Ravidass Ji
              </span>
              , who showed us the path to love, equality, and spirituality. Our
              mission is to uplift and inspire, fostering peace and harmony for
              all.
            </p>
            {/*     <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-gradient-to-r from-[#00b7fa] to-[#0097ab] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div> */}
          </div>

          <Image
            src="/gurughar.jpg"
            alt="logo"
            width={240}
            height={1000}
            quality="80"
            className="w-full shadow-xl rounded-3xl mt-8 lg:mt-0 max-w-2xl mx-auto"
          />

          {/*  <div className="lg:mt-0 lg:shrink-0 lg:grow">
            <Image
              src="/sant-ramanand-ji.png"
              alt="logo"
              width={240}
              height={96}
              quality="80"
              className="w-48"
            />
          </div> */}
        </div>
      </div>
      <div className="mx-auto max-w-4xl lg:mx-0 lg:flex-auto">
        <Purpose />
        <Mission />
        <Vision />
      </div>
    </section>
  );
}
