import type { Metadata } from "next";
import { Syne, Syncopate, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const syncopate = Syncopate({
  variable: "--font-neo",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Commit Happens — 12-Hour Hack Sprint",
  description:
    "An online hack sprint designed to challenge developers in a fast-paced, time-bound environment. Ideate, design, and build in 12 hours.",
  metadataBase: new URL("http://localhost:3000"),
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${syncopate.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full bg-background text-foreground grain scanlines">
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
