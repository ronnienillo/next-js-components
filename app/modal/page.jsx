"use client"

import { TbBrandNextjs, TbBrandNuxt, TbBrandSvelte } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";


import Nav from "../(components)/Nav";
import CodeSnipet from '../(components)/CodeSnipet';

import React, { useState } from 'react';

const ModalPage = () => {

    const [openModal, setOpenModal] = useState(null);

    const modalData = [
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

    const modalHandler = (modalId) => {
        if (openModal === modalId) {
            setOpenModal(null);
        } else {
            setOpenModal(modalId);
        }
    }

    const closeModal = () => {
        setOpenModal(null);
    }

    const codeSnipet = {
        key: `


"use client"

import { TbBrandNextjs, TbBrandNuxt, TbBrandSvelte } from "react-icons/tb";
import { AiOutlineClose } from "react-icons/ai";
import React, { useState } from 'react';

const ModalPage = () => {
    const [openModal, setOpenModal] = useState(null);

    const modalData = [
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

    const modalHandler = (modalId) => {
        if (openModal === modalId) {
            setOpenModal(null);
        } else {
            setOpenModal(modalId);
        }
    }

    const closeModal = () => {
        setOpenModal(null);
    }

    return (
        <>
            <h1 className="text-4xl mb-8 mt-8">Modal</h1>
            <div className="flex items-center gap-4 flex-wrap mb-8">
                {modalData.map((item) => (
                    <button key={item.id} id={item.id} className="bg-[#ff6873] text-white text-center py-3 px-6 font-semibold rounded flex items-center justify-center" onClick={() => modalHandler(item.id)}><i className="mr-3 text-2xl">{item.icon}</i>{item.name}</button>
                ))}
            </div>
            {modalData.map((item) => (
                <div key={item.id} className={\`fixed overflow-hidden overflow-y-auto inset-0 w-full h-full flex items-center justify-center flex-col p-4 transition-all ease-in-out duration-500 $\{openModal === item.id ? 'opacity-1 z-50' : 'opacity-0 -z-50'}\`}>
                    <div className={\`absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.75)] transition-all ease-in-out delay-150 duration-500 $\{openModal === item.id ? 'opacity-1' : 'opacity-0'}\`} onClick={closeModal}></div>
                    <div className={\`bg-white max-w max-w-xl p-4 rounded relative z-10 shadow shadow-white transition-all ease-in-out delay-500 duration-500 $\{openModal === item.id ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-8'}\`}>
                        <AiOutlineClose className="absolute top-3 right-3 cursor-pointer text-[#30455ccc] text-xl" onClick={closeModal}/>
                        <h1 className="text-4xl mb-4 mt-4 text-[#ff6873] flex items-center"><i className="text-5xl mr-3">{item.icon}</i>{item.name}</h1>
                        <p className="text-[#30455ccc]">{item.body}</p>
                    </div>
                </div>
            ))}
        </>  
    );
}
    
export default ModalPage;
    `}

    return (
        
        <div className="">
            <h1 className="text-4xl mb-8 mt-8">Modal</h1>
            <div className="flex items-center gap-4 flex-wrap mb-8">
                {modalData.map((item) => (
                    <button key={item.id} id={item.id} className="bg-[#ff6873] text-white text-center py-3 px-6 font-semibold rounded flex items-center justify-center" onClick={() => modalHandler(item.id)}><i className="mr-3 text-2xl">{item.icon}</i>{item.name}</button>
                ))}
            </div>
            {modalData.map((item) => (
                <div key={item.id} className={`fixed overflow-hidden overflow-y-auto inset-0 w-full h-full flex items-center justify-center flex-col p-4 transition-all ease-in-out duration-500 ${openModal === item.id ? 'opacity-1 z-50' : 'opacity-0 -z-50'}`}>
                    <div className={`absolute inset-0 w-full h-full bg-[rgba(0,0,0,0.75)] transition-all ease-in-out delay-150 duration-500 ${openModal === item.id ? 'opacity-1' : 'opacity-0'}`} onClick={closeModal}></div>
                    <div className={`bg-white max-w max-w-xl p-4 rounded relative z-10 shadow shadow-white transition-all ease-in-out delay-500 duration-500 ${openModal === item.id ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                        <AiOutlineClose className="absolute top-3 right-3 cursor-pointer text-[#30455ccc] text-xl" onClick={closeModal}/>
                        <h1 className="text-4xl mb-4 mt-4 text-[#ff6873] flex items-center"><i className="text-5xl mr-3">{item.icon}</i>{item.name}</h1>
                        <p className="text-[#30455ccc]">{item.body}</p>
                    </div>
                </div>
            ))}

            <h2 className="text-xl mt-8 mb-4">Code</h2>
            <CodeSnipet codeSnipet={codeSnipet.key}/>
            <Nav/>
        </div>
       
    );
}
 
export default ModalPage;