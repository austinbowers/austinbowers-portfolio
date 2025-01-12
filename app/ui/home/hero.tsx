"use client"

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function Hero() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="hero" className="flex items-center justify-center h-screen px-6">
            <div
                className="text-gray-200 text-center max-w-screen-md mx-auto relative z-30"
            >
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <Image
                            src="/images/self-image.jpg"
                            className="rounded-full border-2 border-blue-500 relative z-20"
                            width={100}
                            height={100}
                            alt="Austin Bowers avatar"
                        />
                    </div>
                </div>
                <h1
                    className="h1 mb-4"
                >
                    Front-end Engineer & UX Designer
                </h1>
                <p className="paragraph text-center mb-8 lg:mb-10">
                    Hi, my name is <u className={`decoration-blue-500 text-white underline-offset-4 font-medium`}>Austin Bowers</u>. I have over six years of experience designing and developing user interfaces, web pages, admin dashboards, and more in a multi-dimensional business environment, as well as experience working in a freelance environment creating websites and media for artists and small businesses.
                </p>
                <div
                    style={{opacity: `${100 + (scrollY / -1)}` + `%`}}
                    className={`mt-16 text-gray-300 inline-flex rounded-full px-6 transition duration-500`}
                >
                    Scroll to Learn More
                </div>
                <div className={`mt-6 flex items-center justify-center`}>
                    <svg
                        style={{opacity: `${100 + (scrollY / -2)}` + `%`}}
                        className={`fill-current text-blue-500 animate-bounce`} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.414 6.707L12 5.293L7.707 9.586V0H5.707V9.586L1.414 5.293L0 6.707L6.707 13.414L13.414 6.707Z"/>
                    </svg>

                </div>
            </div>
        </section>
    );
}

