import Link from "next/link";
import { SiNextdotjs } from "react-icons/si";


export default function Home() {

  return (
    <main className="text-center min-h-screen flex items-center justify-center">
      <div className="py-4">
        <h1 className="text-2xl md:text-5xl mb-2 text-[#ff6873] flex items-center gap-1 justify-center"><span className="text-5xl md:text-8xl"><SiNextdotjs/></span>ext.js Components</h1>
        <p className="text-xs md:text-base text-gray-500 mb-5">Powered By: Tailwindcss & React Icons</p>
        <Link href="/accordion" className="text-lg md:text-2xl block max-w-content hover:text-[#ff6873] py-2">Accordion</Link>
        <Link href="/tab" className="text-lg md:text-2xl blockmax-w-content hover:text-[#ff6873] py-2">Tab</Link>
      </div>
    </main>
  )
}
