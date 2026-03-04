import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mental Wealth Solutions | Matthew Sexton, LCSW",
  description:
    "Mental health is maintenance. Mental wealth is accumulation. Clinical expertise meets AI innovation. Therapy, consulting, and digital mental wealth tools by Matthew Sexton, LCSW.",
  metadataBase: new URL("https://mentalwealthsolutions.org"),
  keywords: [
    "mental wealth",
    "LCSW",
    "therapy",
    "Matthew Sexton",
    "clinical social worker",
    "AI mental health tools",
    "R.A.V.E.S. framework",
    "mental health consulting",
  ],
  authors: [{ name: "Matthew Sexton, LCSW" }],
  openGraph: {
    title: "Mental Wealth Solutions | Matthew Sexton, LCSW",
    description:
      "Mental health is maintenance. Mental wealth is accumulation.",
    url: "https://mentalwealthsolutions.org",
    siteName: "Mental Wealth Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mental Wealth Solutions | Matthew Sexton, LCSW",
    description:
      "Mental health is maintenance. Mental wealth is accumulation.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body className="bg-navy text-cream font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Mental Wealth Solutions",
              url: "https://mentalwealthsolutions.org",
              description:
                "Clinical therapy and AI-powered mental wealth tools by Matthew Sexton, LCSW",
              founder: {
                "@type": "Person",
                name: "Matthew Sexton",
                jobTitle: "Licensed Clinical Social Worker",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
