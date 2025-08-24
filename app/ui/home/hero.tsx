"use client"

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
        <section id="hero" className="flex items-center justify-center h-screen min-h-[800px] px-6">
            <div
                className="text-gray-200 max-w-screen-lg mx-auto relative z-30 lg:text-center"
            >
                <div className="flex justify-center items-center mb-6">
                    <div className="w-32 h-32 border border-blue-500 rounded-full overflow-hidden">
                        <img
                            src="/images/profile_pic.jpg"
                            className="w-full h-full object-center object-cover relative z-20 "

                            alt="Austin Bowers avatar"
                        />
                    </div>
                </div>
                <div className="relative z-20">

                    <h1 className="h1 mb-6">
                    <span
                        className="bg-gradient-to-r from-blue-500 to-blue-200 text-transparent bg-clip-text bg-[length:100%_100%] animate-gradient-flow">
                        Developer, Designer, & Creator
                    </span>
                    </h1>
                    <p className="paragraph mb-12 lg:mb-16">
                        Hi, my name is <span
                        className={`bg-gradient-to-r from-blue-500 to-blue-200 text-transparent bg-clip-text bg-[length:200%_200%] animate-gradient-flow font-medium`}>Austin Bowers</span> —
                        a UI/UX designer and developer with over seven years of experience crafting user
                        interfaces, websites, and admin dashboards across diverse business environments. I also bring a
                        strong background in freelance work, building websites and digital media for artists and small
                        businesses.
                    </p>
                    <div
                        style={{opacity: `${100 + (scrollY / -1)}` + `%`}}
                        className={`text-slate-600 flex justify-center rounded-full px-6 transition duration-500 `}
                    >
                        Scroll to Learn More
                    </div>
                    <div className={`mt-6 flex items-center justify-center`}>
                        <svg
                            style={{opacity: `${100 + (scrollY / -2)}` + `%`}}
                            className={`fill-current text-blue-500 animate-bounce`} width="14" height="14"
                            viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.414 6.707L12 5.293L7.707 9.586V0H5.707V9.586L1.414 5.293L0 6.707L6.707 13.414L13.414 6.707Z"/>
                        </svg>

                    </div>
                </div>
            </div>
        </section>
    );
}

