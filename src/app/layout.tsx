import { Inter, Poppins } from "next/font/google"
import "./globals.css"

// Import the reusable layout components
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { BookingFormProvider } from "@/components/booking-form-provider"
import { metadata, viewport } from "./metadata"

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' })
const poppins = Poppins({ subsets: ["latin"], weight: ['300', '400', '500', '600', '700'], variable: '--font-poppins' })

export { metadata, viewport }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <BookingFormProvider>
          <Header />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </BookingFormProvider>
      </body>
    </html>
  )
}
