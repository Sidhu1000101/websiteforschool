import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ZPHS CHINAGANJAM - Government School, Bapatla District",
  description: "Zilla Parishad High School Chinaganjam, Bapatla District, Andhra Pradesh. Providing quality education to students with modern facilities and dedicated staff.",
  keywords: ["ZPHS Chinaganjam", "Government School", "Bapatla District", "Andhra Pradesh", "Education", "High School"],
  openGraph: {
    title: "ZPHS CHINAGANJAM - Government School",
    description: "Providing quality education to students with modern facilities and dedicated staff.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
