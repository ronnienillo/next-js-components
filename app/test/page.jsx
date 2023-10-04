


"use client"

import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import React, { useState } from 'react';

const CarouselPage = () => {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));

    const next = () => setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));

    const handleDotClick = (index) => setCurrent(index);

    const slides = [
        "/next-js.jpg",
        "/nuxt-js.jpg",
        "/sveltkit.jpg"
    ];

    return (
        <>  
            <div className="relative overflow-hidden">
                <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${current * 100}%)`}}>
                    {slides.map((item) => (
                        <Image src={item} width="1920" height="820" alt={item} key={item} />
                    ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-between z-10 p-4 h-full w-full">
                    <button onClick={prev} className="p-2 bg-white rounded-full shadow opacity-50 hover:opacity-100">
                        <BsChevronLeft size={20} />
                    </button>
                    <button onClick={next} className="p-2 bg-white rounded-full shadow opacity-50 hover:opacity-100">
                        <BsChevronRight size={20} />
                    </button>
                </div>
                <div className="absolute bottom-4 left-0 right-0 z-20">
                    <div className="flex items-center justify-center gap-2">
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                className={`transition-all w-3 h-3 bg-white rounded-full cursor-pointer ${current === i ? "p-2" : "opacity-50"}`} onClick={() => handleDotClick(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CarouselPage;      
    