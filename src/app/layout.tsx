import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { Navbar } from "@/components/layout/Navbar";
import { StartupLoader } from "@/components/layout/StartupLoader";

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
    "Classic earth-tone workspace engineered for professional project management and university examination readiness.",
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
      <body className="min-h-screen bg-[#FBF8F3] dark:bg-[#161311] text-[#26201A] dark:text-[#EFE8DC] font-sans antialiased flex flex-col transition-colors duration-200">
        <Providers>
          <StartupLoader />
          <Navbar />
          <main className="flex-1 w-full max-w-7xl mx-auto p-4 sm:p-6 animate-arch-in">
            {children}
          </main>
          <footer className="border-t border-[#DDD4C5] dark:border-[#3B332B] py-5 px-6 text-center font-mono text-xs text-[#786C60] dark:text-[#9C9082] uppercase tracking-widest bg-[#F3EDE4]/40 dark:bg-[#201C18]/40">
            MONOLITH CORE // ARCHITECTURAL FORM FACTOR // EST. 2026
          </footer>
        </Providers>
      </body>
    </html>
  );
}
