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
                <div className={`relative overflow-hidden transition duration-300 ease-in-out ${!isOpen ? 'max-h-[800px]' : 'max-h-0'}`}>
                    <div className={`pb-8 transition duration-300 ease-in-out ${!isOpen ? 'opcity-1 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <p className="text-[#30455ccc]">{body}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Accordion;
