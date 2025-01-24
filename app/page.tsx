import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col gap-4">
      {/*  <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Shri&nbsp;</span>
        <span className={title({ color: "cyan" })}>Guru Ravidass&nbsp;</span>
        <br />
        <span className={title()}>Sabha Vienna.</span>
        <div className={subtitle({ class: "mt-4" })}>
          Shaheedi Asthan Sant Ramanand Ji
        </div>
      </div> */}
      <div className="relative isolate pt-6 w-full mb-8">
        <svg
          aria-hidden="true"
          className="dark:hidden absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
        <div className="mx-auto max-w-[1280] lg:flex lg:items-center lg:gap-x-14 lg:py-2">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl bg-gradient-to-r from-[#00b7fa] to-[#0097ab] text-transparent bg-clip-text">
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
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-gradient-to-r from-[#00b7fa] to-[#0097ab] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
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
      <div className="mx-auto max-w-4xl lg:mx-0 lg:flex-auto space-y-8">
        <div className="space-y-6">
          <h2 className={title({ size: "sm", color: "cyan" })}>Our Purpose</h2>
          <p className="dark:text-gray-300">
            Guided by the principles of faith, compassion, and unity, we strive
            to create a welcoming space for everyone. Whether you’re here for
            spiritual growth, to contribute to our community, or to seek
            guidance, we are here for you. Together, we are building a
            compassionate and vibrant community where the teachings of Shri Guru
            Ravidass Ji resonate in every heart.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className={title({ size: "sm", color: "cyan" })}>Our Purpose</h2>
          <p className="dark:text-gray-300">
            Guided by the principles of faith, compassion, and unity, we strive
            to create a welcoming space for everyone. Whether you’re here for
            spiritual growth, to contribute to our community, or to seek
            guidance, we are here for you. Together, we are building a
            compassionate and vibrant community where the teachings of Guru
            Ravidass Ji resonate in every heart.
          </p>
        </div>
      </div>
    </section>
  );
}
