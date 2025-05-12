"use client";

import { ArrowRightIcon } from "lucide-react";
import { Particles } from "../magicui/particles";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedBeamHero } from "./AnimatedBeam";

export default function HeroSection() {
  return (
    <section className="flex items-center justify-center flex-col mt-32">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={60}
        refresh
      />
      <motion.h1
        initial={{ opacity: 0, translateY: "-10px" }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center bg-gradient-to-br dark:from-white from-black from-30% dark:to-white/40 to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl"
      >
        Développeur Fullstack
        <br className="hidden md:block" /> Spécialisé Front-End
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, translateY: "-10px" }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="text-center mb-12 text-lg tracking-tight text-gray-400 md:text-xl text-balance"
      >
        Un savoir-faire et une vision globale,
        <br className="hidden md:block" /> de la conception à la mise en
        production.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, translateY: "-15px" }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <Link href={"#contact"}>
          <Button className="gap-1 rounded-lg text-white dark:text-black cursor-pointer">
            <span>Contactez-moi</span>
            <ArrowRightIcon className="ml-1 size-4" />
          </Button>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: "-5px" }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        className="w-full"
      >
        <AnimatedBeamHero />
      </motion.div>
    </section>
  );
}
