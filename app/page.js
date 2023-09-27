import Link from "next/link";


export default function Home() {
  return (
    <main>
      <h1 className="text-4xl font-bold mt-5 mb-5">Components</h1>
      <Link href="/accordion">Accordion</Link>
    </main>
  )
}
