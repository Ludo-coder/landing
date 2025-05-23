"use client";

import { motion } from "framer-motion";
import { ShimmerButton } from "../magicui/shimmer-button";
import Link from "next/link";
import Image from "next/image";
import PixelLogo from "@/public/images/pixel_logo.png";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-100">
      <motion.div
        initial={{ opacity: 0, translateY: "-50px" }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="p-5 sm:px-10 backdrop-blur-[4px] flex items-center justify-between w-full"
      >
        <Link href={"/"}>
          <Image
            src={PixelLogo}
            alt="Logo"
            width={100}
            height={100}
            className="w-14 sm:w-20"
          />
        </Link>
        <Link href={"#contact"}>
          <ShimmerButton className="shadow-2xl" background="#333333">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Contact
            </span>
          </ShimmerButton>
        </Link>
      </motion.div>
    </header>
  );
}
