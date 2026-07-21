import type { Metadata } from "next";
import { HomePage } from "@/features/home/home-page";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return <HomePage />;
}
