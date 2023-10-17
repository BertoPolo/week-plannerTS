import Link from "next/link"
import React from "react"
import ThemeButton from "@/components/ThemeButton"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 mx-2">
        <Link href="/" className="mr-2">
          <b>HOME</b>
        </Link>
        <Link href="/todo" className="mr-2">
          Todo lists
        </Link>
        <Link href="/fullcalendar" className="">
          Full calendar
        </Link>
        <ThemeButton />
      </div>
    </div>
  )
}

export default Navbar
