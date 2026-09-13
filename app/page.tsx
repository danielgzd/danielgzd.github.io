import type { Metadata } from "next";
import { ProductHomePage } from "@/features/home/product-home-page";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return <ProductHomePage />;
}
