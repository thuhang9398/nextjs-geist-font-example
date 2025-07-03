import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' })
const poppins = Poppins({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: "Seoul Beauty Center",
  description: "Professional Beauty & Skincare Services",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}
