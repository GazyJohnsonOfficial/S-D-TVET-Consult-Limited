import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/data/site-data";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sdtvetconsultlimited.com"),
  title: `${SITE_CONFIG.name} | TVET Accreditation & Institutional Excellence in Ghana`,
  description: SITE_CONFIG.description,
  keywords: [
    "CTVET accreditation Ghana",
    "TVET consultancy Accra",
    "competency based training Ghana",
    "TVET institutional setup",
    "GTVP voucher program",
    "Ghana TVET policies",
    "Derrick Darko",
    "Stanley Kwame Adu"
  ],
  authors: [{ name: SITE_CONFIG.name }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/pics/hi.png", type: "image/png" }
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: "/favicon.ico"
  },
  openGraph: {
    title: `${SITE_CONFIG.name} - TVET Accreditation Excellence`,
    description: SITE_CONFIG.description,
    url: "https://sdtvetconsultlimited.com",
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/pics/44.jpeg",
        width: 1200,
        height: 630,
        alt: "S&D TVET Consult Limited Training and Accreditation in Ghana"
      }
    ],
    locale: "en_GH",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ["/pics/44.jpeg"]
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_CONFIG.name,
  alternateName: "S&D TVET Consult",
  url: "https://sdtvetconsultlimited.com",
  logo: "https://sdtvetconsultlimited.com/pics/hi.png",
  image: "https://sdtvetconsultlimited.com/pics/44.jpeg",
  description: SITE_CONFIG.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Behind Ecobank, Lapaz",
    addressLocality: "Accra",
    addressRegion: "Greater Accra Region",
    addressCountry: "GH",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+233-50-334-7934",
      contactType: "customer service",
      areaServed: "GH",
      availableLanguage: ["English"],
    },
  ],
  founder: [
    {
      "@type": "Person",
      name: "Derrick Darko",
      jobTitle: "Co-Founder & Director",
    },
    {
      "@type": "Person",
      name: "Stanley Kwame Adu",
      jobTitle: "Co-Founder & Director",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900 selection:bg-[#00509d] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
