'use client'

import Image from "next/image";
import {useEffect, useState} from "react";

export default function Dashboards() {

    // Scroll Position
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setScrollY(window.scrollY);

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="artwork" className={`relative overflow-visible pt-24 pb-16 lg:pt-48 lg:pb-24 px-6 z-50`}>
            <div className={`max-w-screen-xl mx-auto relative z-50`}>
                <div className={`grid lg:grid-cols-2 gap-16 lg:gap-6 lg:min-h-[600px]`}>
                    <div className={`relative`}>
                        <div
                            className={`absolute w-[600px] h-[300px] blur-3xl safari-blur-fix will-change-auto bg-gray-900 rounded-full z-10 right-0 inset-y-0`}>

                        </div>
                        <div className={`relative z-20`}>
                            <p className={`lead mb-2`}>Graphic Design for Artists</p>
                            <h2 className={`h2 mb-4`}>Custom artwork that is unique to your brand</h2>
                            <p className={`paragraph`}>
                                I love music and everything that drives the digital and physical art space within the
                                industry. I’ve created websites, posters, advertisements, and album artwork for many
                                artists, and I’m always looking to unleash more creativity.
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
                            style={{transform: `translateY(${scrollY / -20}px)`}}
                            className={`absolute z-10 left-20 top-16`}>
                            <Image
                                src="/images/album_3.png"
                                className={`transition transform duration-300 box-content`}
                                width={150}
                                height={150}
                                alt="album artwork"
                            />
                        </div>
                        <div
                            style={{transform: `translateY(${scrollY / -14}px)`}}
                            className={`absolute z-30 left-48 top-40 inset-y-0`}>
                            <Image
                                src={`/images/album_2.png`}
                                className={`transition transform duration-300`}
                                width={200}
                                height={200}
                                alt="album artwork"
                            />
                        </div>
                        <div
                            style={{transform: `translateY(${scrollY / -12}px)`}}
                            className={`absolute z-50 left-10 top-64`}>
                            <Image
                                src="/images/album_1.png"
                                className={`transition transform duration-300`}
                                width={250}
                                height={250}
                                alt="album artwork"
                            />
                        </div>
                        <div
                            className={`lg:hidden absolute w-[600px] h-[350px] blur-3xl safari-blur-fix will-change-auto bg-blue-500 rounded-full z-[15] right-0 inset-y-0`}>

                        </div>
                        <div
                            className={`lg:hidden absolute w-[600px] h-[600px] blur-3xl safari-blur-fix will-change-auto opacity-25 bg-blue-500 rounded-full z-[35] left-24 inset-y-0`}>

                        </div>
                    </div>
                </div>
            </div>
            <div className={`hidden lg:block`}>
                <div
                    style={{transform: `translateY(${scrollY / -50}px)`}}
                    className={`absolute z-10 right-[10%] top-0`}>
                    <Image
                        src="/images/album_3.png"
                        className={`transition transform duration-300 box-content`}
                        width={250}
                        height={250}
                        alt="album artwork"
                    />
                </div>
                <div
                    style={{transform: `translateY(${scrollY / -30}px)`}}
                    className={`absolute z-30 right-[20%] top-40 inset-y-0`}>
                    <Image
                        src={`/images/album_2.png`}
                        className={`transition transform duration-300`}
                        width={300}
                        height={300}
                        alt="album artwork"
                    />
                </div>
                <div
                    style={{transform: `translateY(${scrollY / -20}px)`}}
                    className={`absolute z-50 right-[5%] top-80`}>
                    <Image
                        src="/images/album_1.png"
                        className={`transition transform duration-300`}
                        width={500}
                        height={500}
                        alt="album artwork"
                    />
                </div>
                <div
                    className={`hidden lg:block absolute w-[700px] h-[700px] blur-3xl safari-blur-fix will-change-auto bg-blue-500 rounded-full z-[9] -right-6 inset-y-0`}>

                </div>
                <div
                    className={`hidden lg:block absolute w-[600px] h-[600px] blur-3xl safari-blur-fix will-change-auto bg-blue-500 opacity-25 rounded-full z-[29] right-24 inset-y-0`}>

                </div>
            </div>
        </section>
    );
}