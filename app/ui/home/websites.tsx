'use client'

import {useEffect, useState} from "react";
import Image from "next/image";

export default function Websites() {
    // Scroll Position
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setScrollY(window.scrollY);

        const handleScroll = () => {
            if(window.scrollY < 1900) {
                setScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="websites" className={`relative overflow-visible py-24 lg:py-48 px-6`}>
            <div className={`max-w-screen-xl mx-auto relative z-50`}>
                <div className={`grid lg:grid-cols-2 gap-16 lg:gap-6 lg:min-h-[400px]`}>
                    <div className={`hidden lg:block`}></div>
                    <div className={`relative`}>
                        <div
                            className={`absolute w-[400px] h-[800px] blur-3xl safari-blur-fix will-change-auto bg-gray-900 rounded-full z-10 -left-24 -top-24`}>

                        </div>
                        <div className={`relative z-20`}>
                            <p className={`lead mb-2`}>Websites</p>
                            <h2 className={`h2 mb-4`}>Optimization & Conversion Rate Growth</h2>
                            <p className={`paragraph`}>
                                Proven success in boosting conversion rates through data-driven design decisions, leveraging analytics, visitor demographics, A/B testing, and other performance insights.
                            </p>
                            <div className={`mt-6 relative inline-flex`}>
                                <div
                                    className={`hidden lg:block absolute w-[80px] h-[80px] blur-3xl safari-blur-fix will-change-auto bg-blue-500 rounded-full z-[9] -left-9`}>

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
                                src={`/images/fixr1.png`}
                                className={`transition transform duration-300`}
                                width={800}
                                height={800}
                                alt="Austin Bowers avatar"
                            />
                        </div>

                        <div
                            style={{transform: `translateY(${scrollY /25}px)`}}
                            className={`absolute z-30 -left-20 inset-y-0 transform translate-y-40`}>
                            <Image
                                src="/images/fixr2.png"
                                className={`scale-[1.01] transition duration-300`}
                                width={800}
                                height={800}
                                alt="Austin Bowers avatar"
                            />
                        </div>
                        <div
                            className={`lg:hidden absolute w-[600px] h-[600px] blur-3xl bg-gradient-to-r from-orange-500 to-blue-500 text-transparent bg-[length:100%_100%] animate-gradient-flow rounded-full z-[15] left-0 inset-y-0`}>

                        </div>
                        <div
                            className={`lg:hidden absolute w-[600px] h-[600px] blur-3xl safari-blur-fix will-change-auto bg-blue-500 opacity-25 rounded-full z-[35] left-24 inset-y-0`}>

                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{transform: `translateY(${scrollY /-15}px)`}}
                className={`hidden lg:block absolute z-40 -left-32 inset-y-0`}>
                <Image
                    src="/images/fixr1.png"
                    className={`scale-[1.01] transition duration-300`}
                    width={800}
                    height={800}
                    alt="Austin Bowers avatar"
                />
            </div>
            <div
                style={{transform: `translateY(${scrollY /15}px)`}}
                className={`hidden lg:block absolute z-20 -left-4 inset-y-0 transform translate-y-24`}>
                <Image
                    src="/images/fixr2.png"
                    className={`scale-[1.01] transition duration-300`}
                    width={800}
                    height={800}
                    alt="Austin Bowers avatar"
                />
            </div>
            <div
                className={`hidden lg:block absolute w-[700px] h-[700px] blur-3xl bg-gradient-to-r from-orange-500 to-blue-500 text-transparent bg-[length:100%_100%] animate-gradient-flow rounded-full z-[9] -left-6 inset-y-0`}>

            </div>
            <div
                className={`hidden lg:block absolute w-[600px] h-[600px] blur-3xl bg-gradient-to-r from-orange-500 to-blue-500 text-transparent bg-[length:100%_100%] animate-gradient-flow opacity-25 rounded-full z-[29] left-24 inset-y-0`}>

            </div>
        </section>
    );
}