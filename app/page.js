import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1 className="text-3xl md:text-5xl mt-8 mb-5">React/Next.js Components</h1>
      <Link href="/accordion" className="text-lg md:text-xl text-[#ff6873]">Accordion</Link>
    </main>
  )
}
