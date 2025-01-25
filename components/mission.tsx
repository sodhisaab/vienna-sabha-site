import { highlightedTextCSS } from "@/app/utils/common";

const Mission = () => (
  <>
    <h2 className="my-4 tracking-tight font-semibold text-3xl lg:text-4xl">
      Vision
    </h2>
    <div className="text-md/8 mb-8">
      To strengthen the foundation of Shri Guru Ravidass Sabha Vienna, inspire
      the Sangat to actively engage with the Gurughar, and enhance the temple
      through continuous development and improvements. Our mission includes
      fostering unity, spiritual growth, and selfless service (Seva) to uplift
      and strengthen our community.
      <p className="my-4">
        We are also working toward two significant milestones:
      </p>
      <ul className="space-y-4">
        <li>
          <span className={highlightedTextCSS}>
            Registering the Ravidassia Dharam
          </span>{" "}
          in Vienna to formalise its recognition.
        </li>
        <li>
          <span className={highlightedTextCSS}>
            Purchasing the temple building including land
          </span>
          , securing a permanent home for our Gurughar and community activities.
        </li>
      </ul>
    </div>
  </>
);

export default Mission;
