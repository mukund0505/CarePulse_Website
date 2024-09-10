import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider";

// const geistSans = Plus_Jakarta_Sans({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   // weight: "100 900",
// });
// const geistMono = Plus_Jakarta_Sans({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   // weight: "100 900",
// });

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: "CarePulse",
  description: "A healthcare management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen bg-dark-300 font-sans antialiased", fontSans.variable)}
      ><ThemeProvider
        attribute="class"
        defaultTheme="system"
      >
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}
