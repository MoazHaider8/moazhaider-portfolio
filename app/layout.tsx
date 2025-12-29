import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstallPrompt from "@/components/InstallPrompt";

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
  manifest: "/manifest.json",
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
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Moaz Haider",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Moaz Haider" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <InstallPrompt />
        </ThemeProvider>
      </body>
    </html>
  );
}
