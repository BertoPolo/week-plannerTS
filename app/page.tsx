import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>
        <b>Welcome</b>!
      </h1>
      <Link href="home" className="text-primary">
        Move to home page
      </Link>
    </div>
  )
}
