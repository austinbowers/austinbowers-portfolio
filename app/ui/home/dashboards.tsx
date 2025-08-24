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
        setScrollY(window.scrollY);

        const handleScroll = () => {
            if(window.scrollY < 1200) {
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
            <div className={`max-w-screen-xl mx-auto relative z-50`}>
                <div className={`grid lg:grid-cols-2 gap-16 lg:gap-6 lg:min-h-[600px]`}>
                    <div className={`relative`}>
                        <div
                            className={`absolute w-[600px] h-[300px] blur-3xl safari-blur-fix will-change-auto bg-gray-900 rounded-full z-10 right-0 inset-y-0`}>

                        </div>
                        <div className={`relative z-20`}>
                            <p className={`lead mb-2`}>Dashboard Design & Development</p>
                            <h2 className={`h2 mb-4`}>Designing & Developing with Purpose</h2>
                            <p className={`paragraph`}>
                                Having spent much time working in conjunction with various development teams, as well as personally designing admin dashboards, I can assure my work will meet and beat your expectations.
                            </p>
                            <div className={`mt-6 relative inline-flex`}>
                                <div
                                    className={`hidden lg:block absolute w-[80px] h-[80px] blur-3xl bg-gradient-to-r from-blue-700 to-blue-500 bg-[length:200%_200%] animate-gradient-flow rounded-full z-[9] -left-9`}>

                                </div>
                                <div className={`relative z-20`} onClick={toggleTheme}>
                                    <ThemeToggler theme={theme}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`relative lg:hidden min-h-[400px] md:min-h-[600px]`}>
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
                            className={`lg:hidden absolute w-[600px] h-[350px] blur-3xl bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-[length:200%_200%] animate-gradient-flow font-medium rounded-full z-[15] right-0 inset-y-0`}>

                        </div>
                        <div
                            className={`lg:hidden absolute w-[600px] h-[600px] blur-3xl bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-[length:200%_200%] animate-gradient-flow opacity-25 rounded-full z-[35] right-24 inset-y-0`}>

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
                className={`hidden lg:block absolute w-[700px] h-[700px] blur-3xl bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-[length:200%_200%] animate-gradient-flow  rounded-full z-[9] -right-6 inset-y-0`}>

            </div>
            <div
                className={`hidden lg:block absolute w-[600px] h-[600px] blur-3xl bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-[length:400%_200%] animate-gradient-flow  opacity-25 rounded-full z-[29] right-24 inset-y-0`}>

            </div>
        </section>
    );
}