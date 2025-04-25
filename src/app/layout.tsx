import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CardProvider } from "@/context/CardContext";
import { CategoryProvider } from "@/context/CategoryContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "29CM Next Clone TS",
  description: "A clean and modular Next.js app with TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* <script src="https://cdn.tailwindcss.com"></script> */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CardProvider>
          <CategoryProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </CategoryProvider>
        </CardProvider>
      </body>
    </html>
  );
}
