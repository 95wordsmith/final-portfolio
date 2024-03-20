import type { Metadata } from "next";
import { Inter,Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto =  Roboto({
  subsets:['latin'],
  weight:['400','700']
});



export const metadata: Metadata = {
  title: "Anthony Atta-Konadu",
  description: "My Personal Portfolio Website",
  icons:{
    icon:'/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
