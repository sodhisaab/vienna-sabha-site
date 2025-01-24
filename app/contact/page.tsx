import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

import { siteConfig } from "@/config/site";

export default function ContactRoot() {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold text-indigo-900 dark:text-indigo-200 mb-6">
            Contact Information
          </h3>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPinIcon className="w-6 h-6 text-red-600 dark:text-red-400" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-indigo-100 text-sm mb-1">
                  Our Location
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {siteConfig.address}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <PhoneIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-indigo-100 text-sm mb-1">
                  Phone Number
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {siteConfig.phone}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <EnvelopeIcon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-indigo-100 text-sm mb-1">
                  Email Address
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {siteConfig.email}
                </p>
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
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 space-y-8 shadow-md">
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
    </div>
  );
}
