"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../magicui/animated-beam";
import Image from "next/image";
import LogoReact from "@/public/images/react.png";
import LogoNext from "@/public/images/next.png";
import LogoAdonis from "@/public/images/adonis.png";
import LogoTypescript from "@/public/images/typescript.png";
import LogoPostgreSQL from "@/public/images/postgresql.png";
import LogoGithub from "@/public/images/github.png";
import LogoLudo from "@/public/images/ludo.jpeg";
import Link from "next/link";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center p-1 justify-center rounded-full border-2 bg-white shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] hover:scale-105 ease-out duration-200",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeamHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[300px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Image src={LogoReact} alt="React" width={100} height={100} />
          </Circle>
          <Circle ref={div5Ref}>
            <Image src={LogoNext} alt="Next" width={100} height={100} />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Image src={LogoAdonis} alt="Adonis" width={100} height={100} />
          </Circle>
          <Link
            href={"https://www.linkedin.com/in/ludovic-hund-1b2194248/"}
            target="_blank"
            className="z-1"
          >
            <Circle ref={div4Ref} className="size-16 cursor-pointer">
              <Image
                src={LogoLudo}
                alt="Ludo"
                width={200}
                height={200}
                className="rounded-full"
              />
            </Circle>
          </Link>
          <Circle ref={div6Ref}>
            <Image
              src={LogoTypescript}
              alt="Typescript"
              width={100}
              height={100}
              className="p-0.5"
            />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Image
              src={LogoPostgreSQL}
              alt="PostgreSQL"
              width={100}
              height={100}
              className="p-0.5"
            />
          </Circle>
          <Circle ref={div7Ref}>
            <Image src={LogoGithub} alt="Github" width={100} height={100} />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}
