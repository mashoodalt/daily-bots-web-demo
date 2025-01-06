import type { Metadata } from "next";
import { Inter, Space_Mono, Source_Serif_4 } from "next/font/google";

import "./global.css";

// Font
const fontSans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const fontMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
});

const fontSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500"], // Regular and SemiBold
  variable: "--font-serif",
});


export const metadata: Metadata = {
  title: "Alt Voice",
  description: "Alt Voice AI Demos",
  metadataBase: new URL("https://www.altventures.co/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* ${fontSans.variable} ${fontMono.variable}  */}
     <body className={`${fontSerif.variable} bg-white`}>
       {children}
     </body>
   </html>
  );
}
