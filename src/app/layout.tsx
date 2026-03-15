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
  title: "Mental Wealth Solutions | Matthew Sexton, LCSW — Therapist NYC & Miami",
  description:
    "Licensed therapist in Floral Park, NY serving NYC, Miami, and telehealth clients in NY, FL, ME & DE. Specializing in burnout, chronic illness, and AI-assisted therapy. Matthew Sexton, LCSW.",
  metadataBase: new URL("https://mentalwealthsolutions.org"),
  keywords: [
    "therapist New York City",
    "LCSW near me NYC",
    "private pay therapist Manhattan",
    "licensed clinical social worker Brooklyn",
    "therapist Miami accepting new patients",
    "LCSW Miami FL",
    "telehealth therapist New York State",
    "telehealth therapy Florida LCSW",
    "burnout therapist New York City",
    "burnout therapy South Florida",
    "anxiety therapist Manhattan",
    "therapy for professionals Miami",
    "chronic illness therapist",
    "transplant patient mental health",
    "mental health consulting NYC",
    "AI-assisted therapy",
    "R.A.V.E.S. framework",
    "mental wealth",
    "Matthew Sexton LCSW",
    "private practice therapist Floral Park NY",
  ],
  authors: [{ name: "Matthew Sexton, LCSW" }],
  openGraph: {
    title: "Mental Wealth Solutions | Matthew Sexton, LCSW — Therapist NYC & Miami",
    description:
      "Licensed therapist serving NYC, Miami & telehealth. Burnout, chronic illness, AI-assisted therapy. Accepting new clients.",
    url: "https://mentalwealthsolutions.org",
    siteName: "Mental Wealth Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mental Wealth Solutions | Matthew Sexton, LCSW — Therapist NYC & Miami",
    description:
      "Licensed therapist serving NYC, Miami & telehealth. Accepting new clients.",
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
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["LocalBusiness", "MedicalBusiness"],
                name: "Mental Wealth Solutions",
                url: "https://mentalwealthsolutions.org",
                telephone: "917-432-9580",
                email: "info@mentalwealthsolutions.org",
                description:
                  "Licensed therapy, mental health consulting, and AI-assisted wellness tools by Matthew Sexton, LCSW. Serving clients in New York, Florida, Maine, and Delaware via telehealth.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "66 Tulip Ave",
                  addressLocality: "Floral Park",
                  addressRegion: "NY",
                  postalCode: "11001",
                  addressCountry: "US",
                },
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                areaServed: [
                  { "@type": "State", name: "New York" },
                  { "@type": "State", name: "Florida" },
                  { "@type": "State", name: "Maine" },
                  { "@type": "State", name: "Delaware" },
                ],
                serviceType: [
                  "Individual Therapy",
                  "Burnout Therapy",
                  "Chronic Illness Therapy",
                  "Telehealth Therapy",
                  "Mental Health Consulting",
                  "Clinical Supervision",
                ],
                priceRange: "$$",
                currenciesAccepted: "USD",
                paymentAccepted: "Private Pay, Out of Pocket",
                sameAs: [
                  "https://mentalwealthsolutions.org",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Matthew Sexton",
                jobTitle: "Licensed Clinical Social Worker",
                honorificSuffix: "LCSW",
                url: "https://mentalwealthsolutions.org",
                worksFor: {
                  "@type": "Organization",
                  name: "Mental Wealth Solutions",
                },
                knowsAbout: [
                  "Burnout",
                  "Anxiety",
                  "Chronic Illness",
                  "Transplant Patient Mental Health",
                  "AI-Assisted Therapy",
                  "Mental Health Consulting",
                  "R.A.V.E.S. Framework",
                ],
                areaServed: ["New York", "Florida", "Maine", "Delaware"],
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}
