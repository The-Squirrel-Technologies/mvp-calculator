import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

// The embed view is a thin copy of the home page: keep it out of the index and point search engines at the real page.
export const metadata: Metadata = {
  title: "MVP & AI Cost Calculator (embed)",
  robots: { index: false, follow: true },
  alternates: { canonical: SITE_URL + "/" },
};

export default function EmbedLayout({ children }: { children: React.ReactNode }) {
  return children;
}
