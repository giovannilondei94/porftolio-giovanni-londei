import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://giovannilondei.dev"),
  title: {
    default: "Giovanni Londei | Full Stack Developer",
    template: "%s | Giovanni Londei",
  },
  description:
    "Interactive web portfolio of Giovanni Londei, Full Stack Developer specialized in scalable web applications for public administration and healthcare domains.",
  applicationName: "Giovanni Londei – Interactive Web Portfolio",
  authors: [{ name: "Giovanni Londei" }],
  creator: "Giovanni Londei",
  keywords: [
    "Giovanni Londei",
    "Full Stack Developer",
    "Next.js portfolio",
    "Java",
    "Spring Boot",
    "Angular",
    "TypeScript",
    "Healthcare software",
    "Public administration software",
  ],
  openGraph: {
    title: "Giovanni Londei | Full Stack Developer",
    description:
      "Full Stack Developer with 8+ years of experience in enterprise, healthcare, and public administration web platforms.",
    url: "https://giovannilondei.dev",
    siteName: "Giovanni Londei – Interactive Web Portfolio",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giovanni Londei | Full Stack Developer",
    description:
      "Senior-oriented interactive portfolio focused on experience, technical stack, and selected domain projects.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${manrope.variable} ${ibmPlexMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
