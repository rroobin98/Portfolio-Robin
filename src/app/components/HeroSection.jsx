"use client";

import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };

    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600">
                            Hello, I'm{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                'Robin',
                                1000,
                                'Web Developer',
                                1000,
                                'Mobile Developer',
                                1000,
                                'Fullstack',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    Hi, I'm Robin Lundström, a passionate and dedicated web and mobile developer. With a strong foundation in both front-end and back-end technologies, I specialize in creating dynamic, user-friendly applications that deliver seamless experiences across all devices. Currently, I am seeking new opportunities to leverage my skills and contribute to innovative projects as a developer.
                    </p>
                    <div>
                        <button
                            onClick={scrollToBottom}
                            className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 hover:bg-slate-200 text-white"
                        >
                            Hire Me
                        </button>
                        <a
                            href="/images/cv_-robin.pdf"
                            download
                            className="block w-full sm:w-fit mt-3"
                        >
                            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-red-500 hover:bg-slate-800 text-white">
                                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                            </button>
                        </a>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="group rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="group-hover:border-4 group-hover:border-blue-500 rounded-full">
                                <Image
                                    src="/images/mig1.png"
                                    alt="mig image"
                                    className="rounded-full"
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
