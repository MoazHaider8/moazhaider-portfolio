import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://moazhaider.com"),
  title: {
    default: "Moaz Haider - SEO Expert | Technical, Local & E-commerce SEO Services",
    template: "%s | Moaz Haider - SEO Expert",
  },
  description:
    "Moaz Haider is an SEO Expert specializing in Technical SEO, Local SEO, E-commerce SEO, and Content Strategy. Drive more traffic, leads, and revenue with proven SEO campaigns.",
  keywords: [
    "SEO Expert",
    "Technical SEO",
    "Local SEO",
    "E-commerce SEO",
    "Content SEO",
    "Link Building",
    "SEO Audit",
    "Moaz Haider",
  ],
  authors: [{ name: "Moaz Haider" }],
  creator: "Moaz Haider",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moazhaider.com",
    siteName: "Moaz Haider - SEO Expert",
    title: "Moaz Haider - SEO Expert | Technical, Local & E-commerce SEO",
    description:
      "Drive more traffic, leads, and revenue with proven SEO strategies from Moaz Haider, an expert in Technical SEO, Local SEO, and E-commerce optimization.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moaz Haider - SEO Expert | Technical, Local & E-commerce SEO",
    description:
      "Drive more traffic, leads, and revenue with proven SEO strategies from Moaz Haider.",
    creator: "@MoazHaider71",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
