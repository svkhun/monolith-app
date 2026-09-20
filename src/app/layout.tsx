import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { Navbar } from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MONOLITH // Work Management & University Exam Hub",
  description:
    "Brutalist high-density system for professional project management and university examination readiness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#FFFFFF] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#EDEDED] font-sans antialiased flex flex-col">
        <Providers>
          <Navbar />
          <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6">
            {children}
          </main>
          <footer className="border-t border-neutral-300 dark:border-[#262626] py-4 px-6 text-center font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
            MONOLITH ARCHITECTURE // ZERO RADIUS FORM FACTOR // PRODUCTION BUILD
          </footer>
        </Providers>
      </body>
    </html>
  );
}
