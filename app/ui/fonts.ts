import { Inter, Jersey_10, Press_Start_2P, Ubuntu } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const start_2p = Press_Start_2P({
  preload: true,
  display: "swap",
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-start-2p",
});

const jersey_10 = Jersey_10({
  preload: true,
  display: "swap",
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-jersey-10",
});

const ubuntu = Ubuntu({
  preload: true,
  display: "swap",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-ubuntu",
});

export { inter, start_2p, jersey_10, ubuntu };
