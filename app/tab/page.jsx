
"use client"

import React, { useState } from 'react';
import Nav from '../(components)/Nav';
import { TbBrandNextjs, TbBrandNuxt, TbBrandSvelte } from "react-icons/tb";
import { FaCopy } from "react-icons/fa";

export default function TabPage() {
  const [openTab, setOpenTab] = useState(1);

  const tabData = [
    {
      id: 1,
      icon: <TbBrandNextjs />,
      name: 'next.js',
      body: 'next.js', body: 'The React Framework for the Web Used by some of the worlds largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.,',
    },
    {
      id: 2,
      icon: <TbBrandNuxt />,
      name: 'nuxt.js',
      body: 'nuxt.js', body: 'The Intuitive Web Framework Build your next Vue.js application with confidence using Nuxt. An open source framework under MIT license that makes web development simple and powerful.,',
    },
    {
      id: 3,
      icon: <TbBrandSvelte />,
      name: 'SvelteKit',
      body: 'Built on Svelte, a UI framework that uses a compiler to let you write breathtakingly concise components that do minimal work in the browser, using languages you already know — HTML, CSS and JavaScript. Its a love letter to web development. But dont take our word for it. Developers consistently rank Svelte as the framework they are most excited about using.,',
    }
  ];

  const handleTabClick = (tabId) => {
    if (openTab === tabId) {
      setOpenTab(null);
    } else {
      setOpenTab(tabId);
    }
  };


  const codeSnipet = {
    key: `


"use client"

import React, { useState } from 'react';
import Nav from '../(components)/Nav';
import { TbBrandNextjs, TbBrandNuxt, TbBrandSvelte } from "react-icons/tb";

export default function TabPage() {
  const [openTab, setOpenTab] = useState(1);

  const tabData = [
    {
      id: 1,
      icon: <TbBrandNextjs />,
      name: 'next.js',
      body: 'next.js', body: 'The React Framework for the Web Used by some of the worlds largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.,',
    },
    {
      id: 2,
      icon: <TbBrandNuxt />,
      name: 'nuxt.js',
      body: 'nuxt.js', body: 'The Intuitive Web Framework Build your next Vue.js application with confidence using Nuxt. An open source framework under MIT license that makes web development simple and powerful.,',
    },
    {
      id: 3,
      icon: <TbBrandSvelte />,
      name: 'SvelteKit',
      body: 'Built on Svelte, a UI framework that uses a compiler to let you write breathtakingly concise components that do minimal work in the browser, using languages you already know — HTML, CSS and JavaScript. Its a love letter to web development. But dont take our word for it. Developers consistently rank Svelte as the framework they are most excited about using.,',
    }
  ];

  const handleTabClick = (tabId) => {
    if (openTab === tabId) {
      setOpenTab(null);
    } else {
      setOpenTab(tabId);
    }
  };


  return (
    <div>

      <h1 className="text-4xl mb-8 mt-8">Tab</h1>

      <div className="border border-slate-100 relative rounded overflow-hidden">
        
        <ul className="flex">
          {tabData.map((item) => (
            <li key={item.id} className="w-full" id={item.id}>
              <a className={\`text-2xl px-8 py-2 cursor-pointer flex items-center gap-1 text-center justify-center $\{openTab === item.id ? 'bg-[#ff6873] text-white pointer-events-none' : 'bg-[#fff] text-[#ff6873]'}\`} onClick={() => handleTabClick(item.id)}>
                {item.icon}
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="py-4 px-4 text-[#30455ccc]">
          {tabData.map((item) => (
            <div key={item.id} className={\`relative overflow-hidden transition-all ease-in-out delay-150 duration-500 $\{openTab === item.id ? 'max-h-[800px]' : 'max-h-0'}\`}>
              <p className={\`py-4 transition-all ease-in-out delay-200 duration-500 $\{openTab === item.id ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-8'}\`}>{item.body}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
    `
  }


  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnipet);
    setIsCopied(true);

    // Reset the "Copied" state after a short delay
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div>
      <h1 className="text-4xl mb-8 mt-8">Tab</h1>

      <div className="border border-slate-100 relative rounded overflow-hidden">
        <ul className="flex">
          {tabData.map((item) => (
            <li key={item.id} className="w-full" id={item.id}>
              <a
                className={`text-2xl px-8 py-2 cursor-pointer flex items-center gap-1 text-center justify-center ${
                  openTab === item.id ? 'bg-[#ff6873] text-white pointer-events-none' : 'bg-[#fff] text-[#ff6873]'
                }`}
                onClick={() => handleTabClick(item.id)}
              >
                {item.icon}
                <span className="hidden sm:inline-block">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>


        <div className="py-4 px-4 text-[#30455ccc]">
          {tabData.map((item) => (
            <div
              key={item.id}
              className={`relative overflow-hidden transition-all ease-in-out delay-150 duration-500 ${openTab === item.id ? 'max-h-[800px]' : 'max-h-0'}`}
            >
              <p className={`py-4 transition-all ease-in-out delay-200 duration-500 ${openTab === item.id ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-8'}`}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-xl mt-8">Code</h2>
      <p className="mb-4">
        Create your page
      </p>
      <pre className="text-sm bg-gray-800 text-white relative px-4 mb-4">
        <button
            onClick={copyToClipboard}
            className="absolute top-[15px] right-[15px] text-xl cursor-pointer flex align-center gap-1 z-10"
        >
            <FaCopy />
            <span className="text-xs">Copy</span>
        </button>


        {isCopied && (
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 text-white z-20">
            Copied!
            </div>
        )}

        <div className="relative overflow-x-auto">
        {codeSnipet.key}
        </div>
        
        
        </pre>
      <Nav />
    </div>
  );
}
