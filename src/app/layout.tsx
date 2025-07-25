import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import { CartProvider } from "@/app/components/categories/CartContext";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "BookZone",
  description: "Next.js ilə hazırlanmış kitab satış platforması",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${poppins.variable} font-sans antialiased bg-white text-black`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
