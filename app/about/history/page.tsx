import { title } from "@/components/primitives";
import Image from "next/image";

const highlightedText = "font-semibold text-gray-900 dark:text-gray-400";

export default function AboutPage() {
  return (
    <div>
      <h1 className={`${title()} text-gray-900 dark:text-gray-100`}>
        History of Shri Guru Ravidass Temple, Vienna
      </h1>

      <div className=" max-w-4xl text-lg/8 text-gray-600 dark:text-gray-400 space-y-6 mt-6 ">
        <p>
          The Shri Guru Ravidass Temple in Vienna is a symbol of spirituality,
          unity, and equality, built on the teachings of Guru Ravidass Ji. Since
          its inception, the temple has been a place where people come together
          to worship, learn, and celebrate the values of compassion and social
          justice.
        </p>
        <p>
          The temple was inaugurated by{" "}
          <span className={highlightedText}>Sant Niranjan Dass Ji </span>
          and{" "}
          <span className={highlightedText}>Amar Shaheed Sant Ramanand Ji</span>
          , with the participation of Ravidassia followers from across the
          European Union. This significant event marked the beginning of a
          spiritual journey, uniting the community in their shared faith and
          commitment to the teachings of Guru Ravidass Ji.
        </p>
        <div className="space-y-4 inset-2 ">
          <p className="text-gray-900 dark:text-gray-400">
            Throughout the year, the temple organizes major events that hold
            deep spiritual and cultural importance:
          </p>
          <ul className="space-y-2 pl-4 sm:pl-8">
            <li>
              <span className={highlightedText}>Ravidass Jayanti: </span>
              Celebrating the birth of Guru Ravidass Ji with devotion and joy.
            </li>
            <li>
              <span className={highlightedText}>Ambedkar Jayanti: </span>
              Honoring Dr. B.R. Ambedkar and his contributions to equality and
              justice.
            </li>
            <li>
              <span className={highlightedText}>
                Commemoration Day of Amar Shaheed Sant Ramanand Ji:{" "}
              </span>
              Held on the last Sunday of May, this solemn day pays tribute to
              his sacrifice and enduring legacy.
            </li>
            <li>
              <span className={highlightedText}>
                Opening Ceremony Anniversary:{" "}
              </span>
              Observed every year on December 25 to commemorate the
              establishment of the temple.
            </li>
          </ul>
        </div>

        <p>
          The temple’s history also includes a tragic event. On
          <span className={highlightedText}> May 25, 2009</span>, during a
          prayer gathering, an attack took the life of
          <span className={highlightedText}>
            {" "}
            Amar Shaheed Sant Ramanand Ji{" "}
          </span>
          and injured
          <span className={highlightedText}> Sant Niranjan Dass Ji </span>. This
          devastating incident deeply affected the Ravidassia community
          worldwide. Despite this, the temple and its devotees stood united,
          transforming grief into resilience and continuing their mission to
          spread the teachings of peace, love, and equality.
        </p>
      </div>
    </div>
  );
}
