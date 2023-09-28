"use client"

import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import React, { useState, useEffect } from 'react';

const Tab = ({ icon, name, body, initialOpen }) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const initialOpen = isOpen;

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
            <div className={`relative overflow-hidden transition-all ease-in-out delay-150 duration-500 ${!isOpen ? 'max-h-0' : 'max-h-[800px]'}`}>
                <div className={`pb-8 transition-all ease-in-out delay-200 duration-500 ${!isOpen ? 'opacity-0 translate-y-8' : 'opacity-1 translate-y-0'}`}>
                    <p className="text-[#30455ccc]">{body}</p>
                </div>
            </div>
            
        </>
    );
}

export default Tab;