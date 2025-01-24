import { Link } from "@heroui/link";

import Team from "@/components/Team";
import { subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";

export default function Example() {
  return (
    <>
      <div className="mx-auto max-w-5xl lg:mx-0">
        <h1 className={`${title()} text-gray-900 dark:text-gray-100`}>
          Meet our Team
        </h1>
        <p className={`${subtitle()} text-gray-800 dark:text-gray-300`}>
          &quot;Man changa to kathoti mein Ganga.&quot;
        </p>
        <div className="text-lg/8 text-gray-600 dark:text-gray-400 space-y-6 mt-6">
          <p>
            At {siteConfig.name}, our team is the heart of everything we do. We
            are a group of passionate and dedicated individuals, working
            together to promote peace, unity, and the teachings of Guru Ravidass
            Ji. Each of us brings unique skills and ideas, and together, we work
            as one to serve our community.
          </p>
          <p>
            We believe in teamwork and equality. All decisions are made
            together, and every member&apos;s opinion matters. There is no
            strict hierarchy in our team—we treat everyone with respect and
            value each person&apos;s contribution. This helps us stay connected
            and motivated to achieve our shared goals.
          </p>
          <p>
            Our team is full of energy and enthusiasm. We work hard to organize
            events, manage projects, and spread Guru Ravidass Ji’s message of
            compassion and equality. No matter the task, we support one another
            and always aim to do our best for the community.
          </p>
          <p>
            More than just a team, we are like a family. We stand by each other,
            learn from challenges, and celebrate our successes together. Our
            focus is to bring people together and make a positive impact for the
            future.
          </p>
          <p>
            We are excited to continue working together to serve our community.
          </p>
        </div>
      </div>
      <Team />

      <div className="mt-12 max-w-4xl mx-auto flex md:items-center max-md:flex-col bg-gradient-to-r from-blue-800 to-indigo-900 px-8 py-4 min-h-[100px] rounded-xl shadow-lg font-[sans-serif]">
        <p className="text-white text-lg flex-1">
          We are always here for you! Whether you want to learn more about our
          mission or support our work, feel free to reach out. Together, we can
          make a difference.
        </p>
        <div className="max-md:mt-6">
          <Link
            className="bg-white text-blue-500 font-semibold py-3 px-6 rounded text-sm md:ml-6 hover:scale-x-110 transform transition duration-300 hover:opacity-1"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
