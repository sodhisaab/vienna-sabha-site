import Image from "next/image";

const team = [
  {
    name: "Heaven Rattu",
    role: "President",
    imageUrl: "/team/heaven-rattu.jpg",
  },
  {
    name: "Prince Sodhi, MSc",
    role: "Vice President",
    imageUrl: "/team/prince-sodhi.jpg",
  },
  {
    name: "Gurminder Bhaura",
    role: "Secretary",
    imageUrl: "/team/gurminder-bhaura.jpg",
  },
  {
    name: "Ricky Jassal",
    role: "Vice Secretary",
    imageUrl: "/team/ricky-jassal.jpg",
  },
  {
    name: "Avtar Chand",
    role: "Treasurer",
    imageUrl: "/team/avtar-chand.jpg",
  },
  {
    name: "Ajay Kumar Mahi",
    role: "Vice Treasurer",
    imageUrl: "/team/ajay-kumar-mahi.jpg",
  },
];

const Team = () => {
  return (
    <ul className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {team.map((person, idx) => (
        <li key={idx} className="relative">
          <Image
            alt={person.name}
            width={100}
            height={100}
            src={person.imageUrl}
            loading="lazy"
            className="aspect-3/2 w-full rounded-2xl object-cover"
          />
          <div className="absolute bottom-0 px-4 py-2 bg-gray-900/50 w-full rounded-bl-2xl rounded-br-2xl">
            <h3 className="text-lg/8 font-semibold tracking-tight text-white">
              {person.name}
            </h3>
            <p className="text-base/7 text-white">{person.role}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Team;
