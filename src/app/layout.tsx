import "./globals.css";
import { InriaSans, InriaSerif, Bilderberg } from "./fonts/fonts";
import { Header } from '@/app/components/header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${InriaSans.variable} ${InriaSerif.variable} ${Bilderberg.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col px-25 py-10 gap-28">
        
        <Header />

        {children}
        
      </body>
    </html>
  );
}
