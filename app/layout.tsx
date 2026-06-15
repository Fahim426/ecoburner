import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

export const metadata: Metadata = {
  title: "ECOBURNER Waste Management Solutions | Incinerator South India",
  description:
    "ECOBURNER provides industrial and biomedical waste management solutions across South India. High-temperature incinerators, biogas systems, and custom waste solutions for hospitals and industries.",
  keywords:
    "waste management South India, incinerator South India, biomedical waste disposal India, industrial waste management, hospital waste incinerator, ECOBURNER",
  openGraph: {
    title: "ECOBURNER Waste Management Solutions",
    description: "Industrial and biomedical waste management solutions across South India.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-primary text-text-primary antialiased" style={{ width: "100%" }}>
        <Header />
        <main style={{ width: "100%" }}>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
