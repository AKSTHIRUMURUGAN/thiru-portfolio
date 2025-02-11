import "./globals.css"
import { Inter } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import NavbarEffect from './components/aceternity/Navbar'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "A.K.S. Thirumurugan - Fullstack Web Developer",
  description: "Portfolio of A.K.S. Thirumurugan, a Fullstack Web Developer specializing in Next.js, React, and more.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <NavbarEffect/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

