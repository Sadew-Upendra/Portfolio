import { Poppins, Inter, JetBrains_Mono } from "next/font/google";
import './globals.css'
import { SiteLoader } from "@/components/layout/SiteLoader";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html 
      lang="en" 
      data-scroll-behavior="smooth"
      className={`${poppins.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body className="bg-bg text-ink font-body antialiased">
        <SiteLoader/>
        {children}
      </body>
    </html>
  );
}