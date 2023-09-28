import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1 className="text-3xl md:text-5xl mt-8 mb-5 text-[#ff6873]">React/Next.js Components</h1>
      <Link href="/accordion" className="text-lg md:text-xl block max-w-content hover:text-[#ff6873] py-2">Accordion</Link>
      <Link href="/tab" className="text-lg md:text-xl blockmax-w-content hover:text-[#ff6873] py-2">Tab</Link>
    </main>
  )
}
