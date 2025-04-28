import type { Metadata } from "next";
import { Merriweather, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = Merriweather({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: "--font-sans",
  display: 'swap',
});

const fontSerif = Source_Serif_4({
  subsets: ["latin"],
  style: ['normal', 'italic'],
  variable: "--font-serif",
  display: 'swap',
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Thibault Leture - Développeur Web Freelance",
  description: "CV en ligne de Thibault Leture, développeur web Full Stack spécialisé en Next.js, TypeScript et IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontSerif.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
