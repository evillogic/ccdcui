import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainLayout from "../components/MainLayout"; // Import the MainLayout component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Red Team UI",
  description: "Hack the planet!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //<MainLayout> {/* Use the MainLayout component */}
      <html lang="en">
        <body className={inter.className}>
          <MainLayout> {/* Use the MainLayout component */}
            {children}
          </MainLayout> {/* Use the MainLayout component */}
        </body>
      </html>
    //</MainLayout>
  );
}