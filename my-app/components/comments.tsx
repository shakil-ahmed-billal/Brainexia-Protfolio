"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const testimonials = [
    {
        name: 'Jenny Wilson',
        role: 'Project Manager at Microsoft',
        image: '/smileman.png',
        content: '“I just simply love tools that make my life easier! I have everything that I need in one place, and that allows our team to be more organized and user-oriented.”',
    },
    {
        name: 'Robert Fox',
        role: 'Founder at Brain.co',
        image: '/girlc.png',
        content: '“I really like that I can have all in one place: I can send emails and text messages, I can have live chat, show pop-ups and push notifications on my website and create dynamic page content”',
    },
    {
        name: 'Kristin Watson',
        role: 'UX Designer at Google',
        image: '/girl1.png',
        content: '“Very easy to use and set up is simple. I can easily provide live support to my website visitors in real-time. It also provides many integrations.”',
    },
];

const Comments: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(1);

    return (
        <section className="bg-[#fcfcfc] py-24 px-6 overflow-hidden">
            <div className="container-custom mx-auto text-center">

                <div className="mb-20">
                    <h2 className="text-[#0a1d37] text-[36px] font-bold mb-6 font2">
                        What People Say
                    </h2>
                    <p className="text-gray-400 text-[16px] max-w-2xl mx-auto leading-relaxed font1">
                        Quisque fermentum porta tincidunt. Interdum semper. <br />
                        Pellentesque facilisis augue mollis suscipit.
                    </p>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-12 items-stretch min-h-[500px]">
                    {testimonials.map((item, index) => {
                        const isHighlighted = activeIndex === index;

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(1)}

                                className={`relative p-10 py-16 rounded-2xl transition-all duration-500 flex flex-col items-center text-center cursor-pointer
                                    ${isHighlighted
                                        ? 'bg-white shadow-[0_40px_100px_rgba(0,0,0,0.1)] z-10 scale-105'
                                        : 'bg-transparent scale-100'
                                    }`}
                            >
                                <div className="relative w-24 h-24 mb-8 shrink-0">
                                    <div className={`absolute inset-0 bg-gray-100 rounded-full overflow-hidden border-4 transition-all duration-500 ${isHighlighted ? 'border-white shadow-md' : 'border-transparent'}`}>
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                <p className={`text-[#12141D] text-[18px] leading-[28px] mb-8 font1 transition-opacity duration-500 ${isHighlighted ? 'opacity-100' : 'opacity-70'}`}>
                                    {item.content}
                                </p>

                                <div className="mt-auto">
                                    <h4 className="text-[#0a1d37] font-bold text-[16px] leading-[28px] mb-1 font2">{item.name}</h4>
                                    <p className="text-gray-400 text-sm font1">{item.role}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Comments;