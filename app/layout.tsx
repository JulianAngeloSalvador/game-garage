import type { Metadata } from "next";
import "@/app/ui/styles/globals.css";
import { inter, jersey_10, dm_sans } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Gamez",
  description: "Play some games!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${jersey_10.variable} ${dm_sans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
