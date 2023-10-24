// import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="">
      <h1>
        <b>Welcome</b>!
      </h1>
      <Link href="/home" className="text-primary">
        <span>Let`s g0!</span>
      </Link>
    </div>
  )
}
