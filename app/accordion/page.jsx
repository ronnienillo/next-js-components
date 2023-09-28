
import Nav from '../(components)/Nav';
import Accordion from './(component)/Accordion';
import CodeSnipet from './(component)/CodeSnipet';

import { TbBrandNextjs, TbBrandNuxt, TbBrandSvelte } from "react-icons/tb";

export default function AccordionPage() {

    const accordionData = [
        {id: 1, icon: <TbBrandNextjs />, name: 'next.js', body: 'The React Framework for the Web Used by some of the worlds largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.,', isOpen: true },
        {id: 2, icon: <TbBrandNuxt />, name: 'nuxt.js', body: 'The Intuitive Web Framework Build your next Vue.js application with confidence using Nuxt. An open source framework under MIT license that makes web development simple and powerful.,', isOpen: false},
        {id: 3, icon: <TbBrandSvelte />, name: 'SvelteKit', body: 'Built on Svelte, a UI framework that uses a compiler to let you write breathtakingly concise components that do minimal work in the browser, using languages you already know — HTML, CSS and JavaScript. Its a love letter to web development. But dont take our word for it. Developers consistently rank Svelte as the framework they are most excited about using.,', isOpen: false}
    ]
    

    const codeSnipet = {
    key1: `


import Accordion from './(component)/Accordion';
import { TbBrandNextjs, TbBrandNuxt, TbBrandSvelte } from "react-icons/tb";

export default function AccordionPage() {

    const accordionData = [
        {id: 1, icon: <TbBrandNextjs />, name: 'next.js', body: 'The React Framework for the Web Used by some of the worlds largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.,', isOpen: true },
        {id: 2, icon: <TbBrandNuxt />, name: 'nuxt.js', body: 'The Intuitive Web Framework Build your next Vue.js application with confidence using Nuxt. An open source framework under MIT license that makes web development simple and powerful.,', isOpen: false},
        {id: 3, icon: <TbBrandSvelte />, name: 'SvelteKit', body: 'Built on Svelte, a UI framework that uses a compiler to let you write breathtakingly concise components that do minimal work in the browser, using languages you already know — HTML, CSS and JavaScript. Its a love letter to web development. But dont take our word for it. Developers consistently rank Svelte as the framework they are most excited about using.,', isOpen: false}
    ]

    return (
        <div>
            {accordionData.map((item) => (
                <Accordion
                    key={item.id}
                    id={item.id}
                    icon={item.icon}
                    name={item.name}
                    body={item.body}
                    initialOpen={item.isOpen}
                />
            ))}

        </div>
    );
}
        `,
    key2: `


"use client"

import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import React, { useState, useEffect } from 'react';

const Accordion = ({ icon, name, body, initialOpen }) => {
    
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (initialOpen !== undefined) {
            setIsOpen(initialOpen);
        }
    }, [initialOpen]);

    function accordionToggle() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            
            <div className="py-6 border-t flex items-center justify-between cursor-pointer" onClick={accordionToggle} >
                <h4 className="text-2xl text-[#ff6873] flex items-center gap-1"><span>{icon}</span>{name}</h4>
                <div className="text-[#ff6873]">
                    {isOpen ? <BsChevronUp /> : <BsChevronDown />}
                </div>
            </div>
            <div className={\`relative overflow-hidden transition-all ease-in-out delay-150 duration-500 $\{!isOpen ? 'max-h-0' : 'max-h-[800px]'}\`}>
                <div className={\`pb-8 transition-all ease-in-out delay-200 duration-500 $\{!isOpen ? 'opacity-0 translate-y-8' : 'opacity-1 translate-y-0'}\`}>
                    <p className="text-[#30455ccc]">{body}</p>
                </div>
            </div>
            
        </>
    );
}

export default Accordion;
        `,
    };

    return (
        <div>
            <h1 className="text-4xl mb-8 mt-8">Accordion</h1>

            {accordionData.map((item) => (
                <Accordion
                    key={item.id}
                    id={item.id}
                    icon={item.icon}
                    name={item.name}
                    body={item.body}
                    initialOpen={item.isOpen}
                />
            ))}
            
            <h2 className="text-xl mt-8">Code</h2>
            <p className="mb-4"><strong>1st!</strong> Create your page</p>
            <CodeSnipet codeSnipet={codeSnipet.key1}/>
            <p className="mb-4"><strong>2nd!</strong> Create your component folder eg.(component) then add your component file (Accordion.jsx)</p>
            <CodeSnipet codeSnipet={codeSnipet.key2}/>
            <Nav />
        </div>
    );
}

