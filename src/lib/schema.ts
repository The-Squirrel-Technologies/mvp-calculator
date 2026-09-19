import { FAQS } from "./faq";
import { MAIN_URL, REPO_URL, SITE_URL } from "./site";

export function structuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${MAIN_URL}/#organization`,
        name: "The Squirrel Technologies",
        url: MAIN_URL,
        logo: `${MAIN_URL}/logo.png`,
        founder: { "@type": "Person", name: "Ganesh Ghatti" },
        sameAs: [
          "https://github.com/The-Squirrel-Technologies",
          "https://www.linkedin.com/company/the-squirrel-technologies",
          "https://www.instagram.com/thesquirrel.tech/",
          "https://youtube.com/@ganeshghatti",
        ],
      },
      { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: "MVP & AI Cost Calculator", publisher: { "@id": `${MAIN_URL}/#organization` } },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: "MVP & AI Cost Calculator",
        url: SITE_URL,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Any (web browser)",
        description: "Free calculator that gives an itemised price and timeline for a startup MVP, mobile app or AI automation.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        isAccessibleForFree: true,
        license: "https://opensource.org/licenses/MIT",
        codeRepository: REPO_URL,
        creator: { "@id": `${MAIN_URL}/#organization` },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };
}
