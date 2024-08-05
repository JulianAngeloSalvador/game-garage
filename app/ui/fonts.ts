import {
  Bungee,
  DM_Sans,
  Inter,
  Jersey_10,
  Notable,
  Paytone_One,
  Urbanist,
} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const jersey_10 = Jersey_10({
  preload: true,
  display: "swap",
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-jersey-10",
});

const dm_sans = DM_Sans({
  preload: true,
  display: "swap",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

// -----------
const bungee = Bungee({
  preload: true,
  display: "swap",
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bungee",
});

const urbanist = Urbanist({
  preload: true,
  display: "swap",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export { inter, jersey_10, dm_sans, bungee, urbanist };
