import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
// import { useTheme } from "next-themes"
// import { currentTheme } from "./ThemeButton"

const inter = Inter({ subsets: ["latin"] })

// let currentTheme = "light"

// export const changeTheme = () => {
//   currentTheme = "dark"
// }

export const metadata: Metadata = {
  title: "Week Planner",
  description: "Organize your weekly schedules",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* <body className={inter.className} data-theme={currentTheme}> */}
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
