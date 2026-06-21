import "./globals.css";
import { InriaSans, InriaSerif, Bilderberg } from "./fonts/fonts";
import { Header } from '@/app/components/header'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", InriaSans.variable, InriaSerif.variable, Bilderberg.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col px-6 sm:px-10 lg:px-25 py-6 sm:py-8 lg:py-10 gap-10 sm:gap-16 lg:gap-28">
        <Header />
        {children}
      </body>
    </html>
  );
}
