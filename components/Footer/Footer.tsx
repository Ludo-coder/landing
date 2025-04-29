import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import { FaLinkedin } from "react-icons/fa";
import PixelLogo from "@/public/images/pixel_logo.png";

type Link = {
  text: string;
  url: string;
};

interface Icon {
  icon: JSX.Element;
  url: string;
}

const icons: Icon[] = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/ludovic-hund-1b2194248/",
  },
];

export default function Footer() {
  return (
    <footer className="px-5 lg:px-10 p-5 max-w-7xl mx-auto mt-10">
      <div className="flex gap-y-5 items-start md:items-center justify-between w-full gap-x-5">
        <div className="flex flex-col gap-x-2">
          <Image
            src={PixelLogo}
            alt="Logo"
            width={100}
            height={100}
            className="w-14 sm:w-20"
          />
          <p className="text-sm tracking-tight text-neutral-500 dark:text-neutral-400 sm:text-center">
            All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          {icons.map((icon, index) => (
            <Link
              key={index}
              href={icon.url}
              className="text-neutral-500 hover:text-neutral-900 hover:dark:text-white text-xl"
              target="_blank"
            >
              {icon.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
