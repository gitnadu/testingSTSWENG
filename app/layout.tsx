import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "MultiPest",
  description: "Fights pests 4 u",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
          <main className="flex-grow bg-white">
            {children}
          </main>
      </body>
    </html>
  );
}
