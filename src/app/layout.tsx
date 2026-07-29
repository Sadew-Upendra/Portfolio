import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '800', '900'],
  variable: '--font-poppins',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-black text-white">{children}</body>
    </html>
  )
}