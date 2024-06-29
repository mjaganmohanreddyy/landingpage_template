import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "landingpage-template",
  description: "landing page for saas/marketing sites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      
      <body className={`${GeistSans.variable} ${GeistMono.variable} font`}>{children}</body>
    </html>
  );
}``
