import "./globals.css";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import { CartProvider } from "@/app/components/categories/CartContext";
import CartSidebar from "@/app/components/categories/CartSidebar"

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
      <body className={`${poppins.variable} font-sans antialiased bg-white text-black`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
