import React from 'react';
import Accordion from './(component)/Accordion';
import CodeSnipet from './(component)/CodeSnipet';

export default async function AccordionPage() {

    const accordionData = [
        {id: 1, name: 'next.js', body: 'The React Framework for the Web Used by some of the worlds largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.,'},
        {id: 2, name: 'nuxt.js', body: 'The Intuitive Web Framework Build your next Vue.js application with confidence using Nuxt. An open source framework under MIT license that makes web development simple and powerful.,'},
        {id: 3, name: 'SvelteKit', body: 'Built on Svelte, a UI framework that uses a compiler to let you write breathtakingly concise components that do minimal work in the browser, using languages you already know — HTML, CSS and JavaScript. Its a love letter to web development. But dont take our word for it. Developers consistently rank Svelte as the framework they are most excited about using.,'}
    ]
    

    const codeSnipet = {
    key1: `
    import React from 'react';
    import Accordion from './(component)/Accordion';
    import getAllData from "@/app/(api)/getData";
    
    export default async function AccordionPage() {
    
        const accordionData = [
            {id: 1, name: 'next.js', body: 'The React Framework for the Web Used by some of the worlds largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.'},
            {id: 2, name: 'nuxt.js', body: 'The Intuitive Web Framework Build your next Vue.js application with confidence using Nuxt. An open source framework under MIT license that makes web development simple and powerful.'},
            {id: 3, name: 'SvelteKit', body: 'Built on Svelte, a UI framework that uses a compiler to let you write breathtakingly concise components that do minimal work in the browser, using languages you already know — HTML, CSS and JavaScript. Its a love letter to web development. But dont take our word for it. Developers consistently rank Svelte as the framework they are most excited about using.'}
        ]
    
        return (
            <div>
                {accordionData.map((item) => (
                    <Accordion
                        key={item.id}  // Make sure to add a unique key prop
                        id={item.id}
                        name={item.name}
                        body={item.body}
                    />
                ))}
    
            </div>
        );
    }
        `,
    key2: `
    "use client"

    import { BsChevronDown, BsChevronUp } from "react-icons/bs";
    import React, { useState } from 'react';
    
    const Accordion = ({name, body }) => {
        
        const [isOpen, setIsOpen] = useState(true);
    
        function accordionToggle() {
            setIsOpen(!isOpen);
        }
    
        return (
            <>
                <div>
                    <div className="py-6 border-t flex items-center justify-between cursor-pointer" onClick={accordionToggle} >
                        <h4 className="text-2xl text-[#ff6873]">{name}</h4>
                        <div className="text-[#ff6873]">
                            {isOpen ? <BsChevronDown /> : <BsChevronUp />}
                        </div>
                    </div>
                    <div className={\`relative overflow-hidden transition duration-300 ease-in-out $\{!isOpen ? 'max-h-[800px]' : 'max-h-0'}\`}>
                        <div className={\`pb-8 transition duration-300 ease-in-out $\{!isOpen ? 'opcity-1 translate-y-0' : 'opacity-0 translate-y-8'}\`}>
                            <p className="text-[#30455ccc]">{body}</p>
                        </div>
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
            <h1 className="text-4xl mb-8 mt-4">Accordion</h1>

            {accordionData.map((item) => (
                <Accordion
                    key={item.id}  // Make sure to add a unique key prop
                    id={item.id}
                    name={item.name}
                    body={item.body}
                />
            ))}
            
            <h2 className="text-xl mt-8">Code</h2>
            <p className="mb-4"><strong>1st!</strong> Create your page</p>
            <CodeSnipet codeSnipet={codeSnipet.key1}/>
            <p className="mb-4"><strong>2nd!</strong> Create your component folder eg.(component) then add your component file (Accordion.jsx)</p>
            <CodeSnipet codeSnipet={codeSnipet.key2}/>

        </div>
    );
}

