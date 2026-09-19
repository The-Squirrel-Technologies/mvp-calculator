import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { structuredData } from "@/lib/schema";
import { MAIN_URL, SITE_URL } from "@/lib/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#a74911",
  width: "device-width",
  initialScale: 1,
};

const title = "MVP & AI Cost Calculator | The Squirrel Technologies";
const description =
  "Free calculator: pick a platform, AI layer and features to get an itemised price and timeline for your startup MVP, mobile app or AI automation.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  authors: [{ name: "The Squirrel Technologies", url: MAIN_URL }],
  creator: "The Squirrel Technologies",
  publisher: "The Squirrel Technologies",
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "The Squirrel Technologies",
    images: [{ url: "/logo.png", width: 500, height: 500, alt: "The Squirrel Technologies logo" }],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary", title, description, images: ["/logo.png"], creator: "@thesquirrel_org" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  icons: { icon: "/logo.png", shortcut: "/logo.png", apple: "/logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans antialiased`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()) }} />
      </head>
      <body className="min-h-screen flex flex-col bg-[#f7f9fa] text-[#1a1f2c]">
        {children}
      </body>
    </html>
  );
}
