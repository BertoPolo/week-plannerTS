import Link from "next/link"
import React from "react"
import { BiLogoLinkedinSquare } from "react-icons/bi"

const Footer = () => {
  return (
    <div className="mt-5 w-screen bg-slate-200">
      <div className="grid grid-cols-3 text-center py-4">
        <div>
          <h4>
            <u>About</u>
          </h4>
        </div>

        <div>
          <h4>
            <u>Used Tecnologies</u>
          </h4>
          <p>TypeScript</p>
          <p>NextJs</p>
          <p>TailWind CSS</p>
          <p>DaisyUI</p>
          <p>json-server</p>
          <p></p>
        </div>

        <div>
          <h4>
            <u>Links</u>
          </h4>
          <p>
            <Link target="__blank" rel="noreferrer noopener" href="https://www.linkedin.com" className="cursor-pointer">
              {/* <BiLogoLinkedinSquare /> */}
              LinkedIn
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
