import "./globals.css"
import type { Metadata } from "next"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Providers from "./Providers"
// import { Inter } from "next/font/google"

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Week Planner",
  description: "Organize your weekly schedules",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}*/}
      <body>
        <Providers>
          <Navbar />
          <div className="mx-7">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
