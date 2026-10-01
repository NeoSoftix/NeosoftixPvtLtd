import { Caveat, Instrument_Serif, Playfair_Display } from "next/font/google";

// Shared font loaders — import from here instead of calling next/font in each component.
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
});

export const scriptFont = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const serifAccent = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});
