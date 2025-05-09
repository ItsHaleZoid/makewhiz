import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: '--font-fredoka' });

export const metadata: Metadata = {
  title: "MakeWhiz - Design UIs with a Smile",
  description: "Design beautiful UIs visually and get clean code in any language you want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fredoka.variable}>
      <body className={fredoka.variable + " antialiased"}>
        {children}
      </body>
    </html>
  );
}
