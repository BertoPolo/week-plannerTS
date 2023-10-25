import Link from "next/link"
import React from "react"
import { BiLogoLinkedinSquare } from "react-icons/bi"
import { AiFillGithub } from "react-icons/ai"
import { FaConnectdevelop } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer p-10 mt-10 bg-base-200 text-base-content">
      <aside>
        <span className="text-7xl rotate-12">
          <FaConnectdevelop />
        </span>
        <p>
          Alberto Polo
          <br />
          NextJs Developer
        </p>
      </aside>

      <nav>
        <header className="footer-title">Stack</header>
        <a className="link link-hover" target="_blank" rel="noopener noreferrer" href="https://www.typescriptlang.org/docs/">
          TypeScript
        </a>
        <a className="link link-hover" target="_blank" rel="noopener noreferrer" href="https://nextjs.org/docs">
          NextJs
        </a>
        <a className="link link-hover" target="_blank" rel="noopener noreferrer" href="https://tailwindcss.com/docs/installation">
          TailWind CSS
        </a>
        <a className="link link-hover" target="_blank" rel="noopener noreferrer" href="https://daisyui.com/">
          DaisyUI
        </a>
        <a className="link link-hover" target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/json-server">
          json-server
        </a>
      </nav>
      <nav>
        <header className="footer-title">Social</header>
        <div className="flex ">
          <Link className="link link-hover" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bertopolo">
            <span className="text-4xl">
              <BiLogoLinkedinSquare />
            </span>
          </Link>
          <Link className="link link-hover mx-2" target="_blank" rel="noopener noreferrer" href="https://github.com/BertoPolo">
            <span className="text-4xl">{<AiFillGithub />}</span>
          </Link>
        </div>
      </nav>
    </footer>
  )
}

export default Footer
