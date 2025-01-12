'use client'

import Image from "next/image";
import ThemeToggler from "../global/theme-toggler"
import {useEffect, useState} from "react";

export default function Dashboards() {
    // Theme Toggle
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // Scroll Position
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY < 900) {
                setScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="dashboards" className={`relative overflow-visible py-24 lg:py-48 px-6`}>
            <div className={`max-w-screen-xl mx-auto relative z-50 h-[600px]`}>
                <div className={`grid lg:grid-cols-2 gap-10 lg:gap-6`}>
                    <div className={`relative`}>
                        <div
                            className={`absolute w-[600px] h-[600px] blur-3xl will-change-auto bg-gray-900 rounded-full z-10 right-0 inset-y-0`}>

                        </div>
                        <div className={`relative z-20`}>
                            <p className={`lead mb-2`}>Dashboard Design & Development</p>
                            <h2 className={`h2 mb-4`}>Designing & developing with purpose</h2>
                            <p className={`paragraph`}>
                                I’ve spent a lot of time working with development teams, as well as on my own crafting
                                admin
                                dashboards that go above and beyond expectations.
                            </p>
                            <div className={`mt-6 relative inline-flex`}>
                                <div
                                    className={`hidden lg:block absolute w-[80px] h-[80px] blur-3xl will-change-auto bg-blue-500 rounded-full z-[9] -left-9`}>

                                </div>
                                <div className={`relative z-20`} onClick={toggleTheme}>
                                    <ThemeToggler theme={theme}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`relative lg:hidden h-[600px]`}>
                        <div
                            style={{transform: `translateY(${scrollY /-25}px)`}}
                            className={`absolute z-50 -right-32 inset-y-0  scale-[1.001]`}>
                            <Image
                                style={{translate: `translateY(${scrollY / 2}px)`}}
                                src={`/images/dashboard_1.png`}
                                className={`transition transform duration-300 ${theme === 'light' ? 'opacity-0' : 'opacity-100'}`}
                                width={800}
                                height={800}
                                alt="Austin Bowers avatar"
                            />
                        </div>
                        <div
                            style={{transform: `translateY(${scrollY /-25}px)`}}
                            className={`absolute z-40 -right-32 inset-y-0`}>
                            <Image
                                src={`/images/dashboard_1_light.png`}
                                className=""
                                width={800}
                                height={800}
                                alt="Austin Bowers avatar"
                            />
                        </div>
                        <div
                            style={{transform: `translateY(${scrollY /25}px)`}}
                            className={`absolute z-30 -left-20 inset-y-0 transform translate-y-40`}>
                            <Image
                                src="/images/dashboard_2.png"
                                className={`scale-[1.01] transition duration-300 ${theme === 'light' ? 'opacity-0' : 'opacity-100'}`}
                                width={800}
                                height={800}
                                alt="Austin Bowers avatar"
                            />
                        </div>
                        <div
                            style={{transform: `translateY(${scrollY /25}px)`}}
                            className={`absolute z-20 -left-20 inset-y-0 transform translate-y-40`}>
                            <Image
                                src="/images/dashboard_2_light.png"
                                className=""
                                width={800}
                                height={800}
                                alt="Austin Bowers avatar"
                            />
                        </div>
                        <div
                            style={{backfaceVisibility: `hidden`}}
                            className={`lg:hidden absolute w-[600px] h-[600px] blur-3xl will-change-auto bg-blue-500 rounded-full z-[15] right-0 inset-y-0`}>

                        </div>
                        <div
                            style={{backfaceVisibility: `hidden`}}
                            className={`lg:hidden absolute w-[600px] h-[600px] blur-3xl will-change-auto bg-blue-500 opacity-25 rounded-full z-[35] right-24 inset-y-0`}>

                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{transform: `translateY(${scrollY /-15}px)`}}
                className={`hidden lg:block absolute z-40 -right-32 inset-y-0`}>
                <Image
                    src="/images/dashboard_1.png"
                    className={`scale-[1.01] transition duration-300 ${theme === 'light' ? 'opacity-0' : 'opacity-100'}`}
                    width={800}
                    height={800}
                    alt="Austin Bowers avatar"
                />
            </div>
            <div
                style={{transform: `translateY(${scrollY /-15}px)`}}
                className={`hidden lg:block absolute z-30 -right-32 inset-y-0`}>
                <Image
                    src={`/images/dashboard_1_light.png`}
                    className=""
                    width={800}
                    height={800}
                    alt="Austin Bowers avatar"
                />
            </div>
            <div
                style={{transform: `translateY(${scrollY /15}px)`}}
                className={`hidden lg:block absolute z-20 -right-4 inset-y-0 transform translate-y-24`}>
                <Image
                    src="/images/dashboard_2.png"
                    className={`scale-[1.01] transition duration-300 ${theme === 'light' ? 'opacity-0' : 'opacity-100'}`}
                    width={800}
                    height={800}
                    alt="Austin Bowers avatar"
                />
            </div>
            <div
                style={{transform: `translateY(${scrollY /15}px)`}}
                className={`hidden lg:block absolute z-10 -right-4 inset-y-0 transform translate-y-24`}>
                <Image
                    src="/images/dashboard_2_light.png"
                    className=""
                    width={800}
                    height={800}
                    alt="Austin Bowers avatar"
                />
            </div>
            <div
                className={`hidden lg:block absolute w-[700px] h-[700px] blur-3xl will-change-auto bg-blue-500 rounded-full z-[9] -right-6 inset-y-0`}>

            </div>
            <div
                className={`hidden lg:block absolute w-[600px] h-[600px] blur-3xl will-change-auto bg-blue-500 opacity-25 rounded-full z-[29] right-24 inset-y-0`}>

            </div>
        </section>
    );
}