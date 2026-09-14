import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Startup MVP & AI Cost Calculator | The Squirrel Technologies",
  description:
    "Interactive software development cost & timeline estimator. Calculate the exact budget, architecture, and schedule for your startup MVP or AI automation in 15 days.",
  keywords: [
    "mvp cost calculator",
    "ai development cost",
    "software estimation tool",
    "startup mvp pricing",
    "nextjs mvp calculator",
    "ai receptionist cost",
    "the squirrel technologies",
    "bengaluru software agency",
    "rapid mvp 15 days",
  ],
  authors: [{ name: "The Squirrel Technologies", url: "https://www.thesquirrel.tech" }],
  creator: "The Squirrel Technologies",
  publisher: "The Squirrel Technologies",
  metadataBase: new URL("https://www.thesquirrel.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Startup MVP & AI Cost Calculator | The Squirrel Technologies",
    description:
      "Estimate your MVP cost, timeline, and tech stack in seconds. Get your product built in 15 days with full source code ownership.",
    url: "https://www.thesquirrel.tech",
    siteName: "The Squirrel Technologies",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "The Squirrel Technologies Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup MVP & AI Cost Calculator | The Squirrel Technologies",
    description: "Calculate your MVP or AI solution cost & timeline in 15 days.",
    images: ["/logo.png"],
    creator: "@thesquirrel_org",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Startup MVP & AI Cost Calculator",
              url: "https://www.thesquirrel.tech",
              description:
                "Interactive cost & timeline calculator for software MVPs, mobile applications, and AI automations.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "All",
              offers: {
                "@type": "Offer",
                price: "5499.00",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "The Squirrel Technologies",
                url: "https://www.thesquirrel.tech",
                logo: "https://www.thesquirrel.tech/logo.png",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+91 94496 10077",
                  contactType: "customer service",
                },
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#f7f9fa] text-[#1a1f2c]">
        {children}
      </body>
    </html>
  );
}
