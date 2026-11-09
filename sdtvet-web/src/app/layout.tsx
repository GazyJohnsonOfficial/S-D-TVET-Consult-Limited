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
  metadataBase: new URL("https://sdtvetconsult.com"),
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
    icon: "/pics/hi.png",
    apple: "/pics/hi.png"
  },
  openGraph: {
    title: `${SITE_CONFIG.name} - TVET Accreditation Excellence`,
    description: SITE_CONFIG.description,
    url: "https://sdtvetconsult.com",
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
        {children}
      </body>
    </html>
  );
}
