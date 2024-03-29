import Header from "@/components/Header/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CEUIM",
  description: "Chikanchara Emdadul Ulum Islamia Madrasah",
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
