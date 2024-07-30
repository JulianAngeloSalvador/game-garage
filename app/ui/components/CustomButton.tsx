import React from "react";

export default function CustomButton({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <button
      className={`p-1 font-extrabold outline outline-2 rounded-lg hover:scale-[.85]  transition-transform duration-fast ease-in-out group ${
        className ? className : ""
      }`}
    >
      <span className="relative inline-block px-4 py-1.5 bg-secondary text-teal-500 rounded-md pointer-events-none  text-shadow-sm shadow-teal-950 group-hover:scale-105 group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:text-teal-400 group-hover:shadow-green-300 group-active:translate-x-0 group-active:translate-y-0 group-active:scale-100 transition-all duration-fast ease-in-out will-change-auto">
        {children}
      </span>
    </button>
  );
}
