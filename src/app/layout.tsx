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

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Geoffrey Lee P. Rom | Aircraft Maintenance Professional | PhilSCA",
  description:
    "Official portfolio of Geoffrey Lee P. Rom, Aircraft Maintenance Professional trained at the Philippine State College of Aeronautics (PhilSCA). Specializing in Airframe structural inspection, Powerplant turbine diagnostics, and Ground Operations Technology.",
  keywords: [
    "Geoffrey Lee P. Rom",
    "Aircraft Maintenance Professional",
    "Aviation Maintenance Technician",
    "Philippine State College of Aeronautics",
    "PhilSCA",
    "Airframe Specialist",
    "Powerplant Turbine Diagnostics",
    "Ground Support Equipment",
    "Aviation Safety CAAP",
    "Aircraft Structural Repair",
    "Turbofan Overhaul",
  ],
  authors: [{ name: "Geoffrey Lee P. Rom" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Geoffrey Lee P. Rom | Aircraft Maintenance Portfolio",
    description:
      "Precision in Flight. Excellence in Maintenance. Philippine State College of Aeronautics (PhilSCA) graduate specialized in Airframe, Powerplant & Ground Operations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#060a12] text-slate-100 antialiased selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
