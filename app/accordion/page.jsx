
"use client"

import Nav from '../(components)/Nav';
import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { TbBrandNextjs, TbBrandNuxt, TbBrandSvelte } from "react-icons/tb";
import CodeSnipet from '../(components)/CodeSnipet';

export default function AccordionPage() {
    const accordionData = [
        {
            id: 1,
            icon: <TbBrandNextjs />,
            name: 'next.js',
            body: 'The React Framework for the Web Used by some of the worlds largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.,',
        },
        {
            id: 2,
            icon: <TbBrandNuxt />,
            name: 'nuxt.js',
            body: 'The Intuitive Web Framework Build your next Vue.js application with confidence using Nuxt. An open source framework under MIT license that makes web development simple and powerful.,',
        },
        {
            id: 3,
            icon: <TbBrandSvelte />,
            name: 'SvelteKit',
            body: 'Built on Svelte, a UI framework that uses a compiler to let you write breathtakingly concise components that do minimal work in the browser, using languages you already know — HTML, CSS and JavaScript. Its a love letter to web development. But dont take our word for it. Developers consistently rank Svelte as the framework they are most excited about using.,',
        },
    ];

    const [openAccordionId, setOpenAccordionId] = useState(1);

    const toggleAccordion = (id) => {
        if (openAccordionId === id) {
            setOpenAccordionId(null);
        } else {
            setOpenAccordionId(id);
        }
    };

    const codeSnipet = {
        key: `


"use client"
import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { TbBrandNextjs, TbBrandNuxt, TbBrandSvelte } from "react-icons/tb";

export default function AccordionPage() {
    const accordionData = [
        {
            id: 1,
            icon: <TbBrandNextjs />,
            name: 'next.js',
            body: 'The React Framework for the Web Used by some of the worlds largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.,',
        },
        {
            id: 2,
            icon: <TbBrandNuxt />,
            name: 'nuxt.js',
            body: 'The Intuitive Web Framework Build your next Vue.js application with confidence using Nuxt. An open source framework under MIT license that makes web development simple and powerful.,',
        },
        {
            id: 3,
            icon: <TbBrandSvelte />,
            name: 'SvelteKit',
            body: 'Built on Svelte, a UI framework that uses a compiler to let you write breathtakingly concise components that do minimal work in the browser, using languages you already know — HTML, CSS and JavaScript. Its a love letter to web development. But dont take our word for it. Developers consistently rank Svelte as the framework they are most excited about using.,',
        },
    ];

    const [openAccordionId, setOpenAccordionId] = useState(1);

    const toggleAccordion = (id) => {
        if (openAccordionId === id) {
            setOpenAccordionId(null);
        } else {
            setOpenAccordionId(id);
        }
    };

    return (
        <div>
            <h1 className="text-4xl mb-8 mt-8">Accordion</h1>
            {accordionData.map((item) => (
                <div key={item.id}>
                    <div className={\`py-6 border-t flex items-center justify-between cursor-pointer $\{openAccordionId === item.id ? 'pointer-events-none' : ''}\`} onClick={() => toggleAccordion(item.id)}>
                        <h4 className="text-2xl text-[#ff6873] flex items-center gap-1">
                            <span>{item.icon}</span>
                            {item.name}
                        </h4>
                        <div className="text-[#ff6873]">
                            {openAccordionId === item.id ? <BsChevronUp /> : <BsChevronDown />}
                        </div>
                    </div>
                    <div className={\`relative overflow-hidden transition-all ease-in-out delay-150 duration-500 $\{openAccordionId === item.id ? 'max-h-[800px]' : 'max-h-0'}\`}>
                        <div className={\`pb-8 transition-all ease-in-out delay-200 duration-500 $\{openAccordionId === item.id ? 'opacity-1 translate-y-0' : 'opacity-0 translate-y-8'}\`}>
                            <p className="text-[#30455ccc]">{item.body}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
        
    `}

    return (
        <div>
            <h1 className="text-4xl mb-8 mt-8">Accordion</h1>
            {accordionData.map((item) => (
                <div key={item.id}>
                    <div
                        className={`py-6 border-t flex items-center justify-between cursor-pointer ${
                            openAccordionId === item.id ? 'pointer-events-none' : ''
                        }`}
                        onClick={() => toggleAccordion(item.id)}
                    >
                        <h4 className="text-2xl text-[#ff6873] flex items-center gap-1">
                            <span>{item.icon}</span>
                            {item.name}
                        </h4>
                        <div className="text-[#ff6873]">
                            {openAccordionId === item.id ? <BsChevronUp /> : <BsChevronDown />}
                        </div>
                    </div>
                    <div
                        className={`relative overflow-hidden transition-all ease-in-out delay-150 duration-500 ${
                            openAccordionId === item.id ? 'max-h-[800px]' : 'max-h-0'
                        }`}
                    >
                        <div
                            className={`pb-8 transition-all ease-in-out delay-200 duration-500 ${
                                openAccordionId === item.id
                                    ? 'opacity-1 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                            }`}
                        >
                            <p className="text-[#30455ccc]">{item.body}</p>
                        </div>
                    </div>
                </div>
            ))}
            <h2 className="text-xl mt-8 mb-4">Code</h2>

            <CodeSnipet codeSnipet={codeSnipet.key}/>

            <Nav />
        </div>
    );
}
