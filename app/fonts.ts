import localFont from "next/font/local";

export const geistSans = localFont({
  src: "../node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2",
  display: "optional",
  fallback: ["Arial", "sans-serif"],
  preload: true,
  variable: "--font-geist-sans",
  weight: "100 900",
});
