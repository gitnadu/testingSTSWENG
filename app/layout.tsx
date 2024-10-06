import type { Metadata } from "next";
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
      <body className="bg-white min-h-screen">
        <NavBar />
          <main className="flex-grow">
            {children}
          </main>
      </body>
    </html>
  );
}