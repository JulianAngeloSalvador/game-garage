import type { Metadata } from "next";
import "@/app/ui/styles/globals.css";
import { inter, jersey_10, start_2p, ubuntu } from "./ui/fonts";

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
        className={`${inter.className} ${start_2p} ${jersey_10.variable} ${ubuntu.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
