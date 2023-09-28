"use client"

import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import React, { useState } from 'react';

const Accordion = ({icon, name, body }) => {
    
    const [isOpen, setIsOpen] = useState(true);

    function accordionToggle() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            
            <div className="py-6 border-t flex items-center justify-between cursor-pointer" onClick={accordionToggle} >
                <h4 className="text-2xl text-[#ff6873] flex items-center gap-1"><span>{icon}</span>{name}</h4>
                <div className="text-[#ff6873]">
                    {isOpen ? <BsChevronDown /> : <BsChevronUp />}
                </div>
            </div>
            <div className={`relative overflow-hidden transition-all ease-in-out delay-150 duration-500 ${!isOpen ? 'max-h-[800px]' : 'max-h-0'}`}>
                <div className={`pb-8 transition-all ease-in-out delay-300 duration-500 ${!isOpen ? 'opcity-1 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <p className="text-[#30455ccc]">{body}</p>
                </div>
            </div>
            
        </>
    );
}

export default Accordion;
