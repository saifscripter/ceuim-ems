import formatDate from "@/lib/formatDate";
import Link from "next/link";
import LinkButton from "../shared/buttons/LinkButton";

const notices = [
  {
    id: "1",
    date: "2024-01-30T15:11:18.245+00:00",
    title: "পরীক্ষার রুটিন",
    href: "/notice",
  },
  {
    id: "2",
    date: "2024-02-02T15:11:18.245+00:00",
    title: "নবম শ্রেণির ক্লাস রুটিন",
    href: "/notice",
  },
  {
    id: "3",
    date: "2024-01-20T15:11:18.245+00:00",
    title: "দাখিল পরীক্ষার রুটিন",
    href: "/notice",
  },
];

const colorVariants = {
  0: "bg-red-500",
  1: "bg-green-500",
  2: "bg-blue-500",
  3: "bg-purple-500",
  4: "bg-yellow-500",
};

export default function About() {
  return (
    <div className="bg-gray-200 min-h-96 flex justify-center items-center text-center md:text-left">
      {/* Left Panel */}
      <div className="container flex flex-col md:flex-row justify-between items-center gap-8 py-10">
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl text-secondary font-bold">
            About Our Madrasah
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            sint ipsam facilis libero voluptatibus vitae quae fugiat sunt,
            aliquam consequatur veniam fugit quasi soluta? Odit?
          </p>
          <div>
            <LinkButton className="shadow-lg" href="/about">
              Read More
            </LinkButton>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex-1 w-full bg-white p-8 space-y-3">
          <h2 className="text-secondary font-semibold text-2xl">
            Notice Board
          </h2>
          <div className="space-y-1">
            {notices
              .sort(
                (a, b) =>
                  new Date(b.date).getMilliseconds() -
                  new Date(a.date).getMilliseconds()
              )
              .map(({ id, date, title, href }, index) => (
                <Link href={href} key={id} className="flex hover:brightness-90">
                  <div
                    className={`${colorVariants[index]} text-white px-2 py-1 flex justify-center items-center font-semibold`}
                  >
                    {formatDate(date)}
                  </div>
                  <p className="bg-gray-100 px-2 py-1 flex-1 text-left">
                    {title}
                  </p>
                </Link>
              ))}
          </div>
          <Link
            className="text-primary inline-block hover:brightness-75 hover:underline"
            href="/notice"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}
