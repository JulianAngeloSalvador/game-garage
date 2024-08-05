"use client";

import React from "react";
import styles from "@/app/ui/styles/custom.module.css";

import useSound from "use-sound";

export default function StartButton({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  const [click] = useSound("/sfx/click.wav");
  const [mouseOver] = useSound("/sfx/zip.wav", {
    interrupt: true,
  });

  return (
    <button
      className={`px-4 py-2 bg-gradient-to-b from-secondary-lighter to-secondary text-secondary-dark text-shadow-lg shadow-secondary-dark font-extrabold  outline-none  hover:text-teal-500 hover:text-shadow-leaning hover:shadow-green-300 group ${
        styles.rotateFront
      } ${className ? className : ""}`}
      onClick={() => click()}
      onMouseEnter={() => mouseOver()}
    >
      {children}
    </button>
  );
}
