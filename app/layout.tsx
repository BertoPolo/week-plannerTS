import "./globals.css"
import type { Metadata } from "next"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
// import { Inter } from "next/font/google"
import Providers from "./Providers"
import ThemeButton from "@/components/ThemeButton"

// import { currentTheme } from "./ThemeButton"

// const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Week Planner",
  description: "Organize your weekly schedules",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <body className={inter.className} data-theme={currentTheme}> */}
      <body>
        <Navbar />
        <ThemeButton />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  )
}
