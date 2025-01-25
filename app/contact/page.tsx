import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";

export default function ContactRoot() {
  return (
    <>
      <h1 className={`${title()} text-gray-900 dark:text-gray-100`}>
        Connect with Shri Guru Ravidass Sabha Vienna
      </h1>

      <div className=" text-lg/8 mt-6 max-w-4xl">
        <p className="text-gray-600 dark:text-gray-400">
          At{" "}
          <span className="font-bold text-primary-600 dark:text-primary-400">
            {siteConfig.name}
          </span>
          , we are dedicated to fostering peace, unity, and spirituality through
          the teachings of Shir Guru Ravidass Ji. We organise religious
          ceremonies and cultural events to spread his message of equality and
          compassion. Our Sabha serves as a platform for the community to come
          together, celebrate, and learn.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Have questions or need more information about{" "}
          <span className="font-bold text-primary-600 dark:text-primary-400">
            {siteConfig.name}?
          </span>{" "}
          We are here to assist you. Reach out to us for inquiries, support, or
          details about our events and activities. Together, let&apos;s promote
          peace, unity, and the teachings of Guru Ravidass Ji.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-start mt-12">
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-200 mb-6">
              Contact Information
            </h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-6 h-6 text-red-600 dark:text-red-400" />
                <div>
                  <h4 className=" text-gray-900 dark:text-indigo-100 text-sm mb-1">
                    Our Location
                  </h4>
                  <p className="font-semibold text-gray-600 dark:text-gray-400 text-sm">
                    {siteConfig.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <PhoneIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                <div>
                  <h4 className="text-gray-900 dark:text-indigo-100 text-sm mb-1">
                    Phone Number
                  </h4>
                  <p className="font-semibold text-gray-600 dark:text-gray-400 text-sm">
                    {siteConfig.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <EnvelopeIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                <div>
                  <h4 className="text-gray-900 dark:text-indigo-100 text-sm mb-1">
                    Email Address
                  </h4>
                  <p className="font-semibold text-gray-600 dark:text-gray-400 text-sm">
                    {siteConfig.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-200 mb-6">
            Opening hours
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                Monday - Friday
              </span>
              <span className="text-gray-800 dark:text-gray-200 text-sm">
                7:00 – 9:00 AM, 4:00 – 6:00 PM
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                Saturday
              </span>
              <span className="text-gray-800 dark:text-gray-200 text-sm">
                7:00 – 9:00 AM, 4:00 – 7:00 PM
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                Sunday
              </span>
              <span className="text-gray-800 dark:text-gray-200 text-sm">
                7:00 AM - 5:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 shadow-lg h-[75vh]">
        <iframe
          title="direction to the Shri Guru Ravidass Sabha Vienna."
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5318.723254945818!2d16.33276447645199!3d48.19965004683758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07f6c62fd8db%3A0xeda8893035411154!2sShri%20Guru%20Ravidass%20Temple%20Vienna!5e0!3m2!1sen!2sat!4v1737733609448!5m2!1sen!2sat"
          loading="lazy"
          className="w-full h-[75vh]"
          /* referrerpolicy="no-referrer-when-downgrade" */
        />
      </div>
    </>
  );
}
