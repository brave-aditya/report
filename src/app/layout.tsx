import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Report Card App",
  description: "Created by Aditya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-screen min-h-screen pt-4 lg:pt-10 px-4 lg:px-12 relative">
          <div className=" border-4 border-yellow-400 h-full w-full rounded-[50px] rounded-b-none border-b-0 bg-gray-800/90 overflow-hidden pb-8 lg:pb-0 ">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
