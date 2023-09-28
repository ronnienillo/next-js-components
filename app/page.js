import Link from "next/link";
import { SiNextdotjs } from "react-icons/si";


export default function Home() {

  return (
    <main className="text-center min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl md:text-5xl mt-8 mb-5 text-[#ff6873] flex items-center gap-1 justify-center"><SiNextdotjs size={100} />ext.js Components</h1>
        <Link href="/accordion" className="text-lg md:text-2xl block max-w-content hover:text-[#ff6873] py-2">Accordion</Link>
        <Link href="/tab" className="text-lg md:text-2xl blockmax-w-content hover:text-[#ff6873] py-2">Tab</Link>
      </div>
    </main>
  )
}
