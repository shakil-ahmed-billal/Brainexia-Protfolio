"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Circle: React.FC = () => {
    const activities = [
        { id: 1, name: 'Karen', action: 'change project info on Project', date: 'Aug 10', icon: '✎', posClass: "lg:top-[15%] lg:right-[10%]" },
        { id: 2, name: 'Andrea', action: 'change the due date of Project', date: 'June 05', icon: '✎', posClass: "lg:bottom-[20%] lg:right-[15%]" },
        { id: 3, name: 'Karen', action: 'leave some comments on Ilustrasi', date: 'July 25', icon: '💬', posClass: "lg:bottom-[25%] lg:left-[10%]" },
    ];

    const users = [
        { id: 4, img: '/man1.png', posClass: "lg:top-[10%] lg:left-[20%]" },
        { id: 5, img: '/man2.png', posClass: "lg:bottom-[5%] lg:left-[35%]" },
        { id: 6, img: '/man3.png', posClass: "lg:top-[30%] lg:right-[15%]" },
    ];


    const radius = 145;
    const circumference = 2 * Math.PI * radius;

    return (
        <section className="w-full bg-white py-16 lg:py-24 overflow-hidden">
            <div className="container-custom mx-auto px-6">

                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-16">
                    <h3 className="h-color text-3xl md:text-[36px] font-bold font2 leading-tight">
                        Why Will You Choose Our Application
                    </h3>
                    <p className="p-color mt-4 text-base leading-relaxed">
                        Class aptent taciti sociosqu ad litora torquen conubia nostramase inceptos himenaeos. Phasellus metus nisl euismod eget lorem.
                    </p>
                </div>

                <div className="relative flex flex-col items-center lg:block h-auto lg:h-[750px]">

                    <div className="relative z-20 flex justify-center items-center mb-16 lg:mb-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">

                        <div className="hidden lg:block absolute w-[450px] h-[450px] border-2 border-dashed border-gray-100 rounded-full" />
                        <div className="hidden lg:block absolute w-[650px] h-[650px] border-2 border-dashed border-gray-100 rounded-full" />

                        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center bg-white rounded-full shadow-2xl border border-gray-50 overflow-hidden">
                            <svg
                                className="absolute inset-0 w-full h-full -rotate-90 p-1"
                                viewBox="0 0 320 320"
                            >
                                <circle
                                    cx="160" cy="160" r={radius}
                                    fill="transparent"
                                    stroke="#F3F4F6"
                                    strokeWidth="10"
                                />
                                <motion.circle
                                    cx="160" cy="160" r={radius}
                                    fill="transparent"
                                    stroke="#3B32F3"
                                    strokeWidth="10"
                                    strokeDasharray={circumference}
                                    strokeLinecap="round"

                                    initial={{ strokeDashoffset: circumference }}

                                    whileInView={{ strokeDashoffset: 300 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                />
                            </svg>

                            <div className="text-center z-10 bg-white rounded-full p-4">
                                <h2 className="text-4xl md:text-[46px] font-black text-[#3B32F3] font2 tracking-tighter">5M+</h2>
                                <p className="text-gray-400 font-medium text-xs md:text-[17px] font1">Active Members</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex flex-col gap-4 md:grid md:grid-cols-2 lg:block">
                        {activities.map((item) => (
                            <div key={item.id} className={`lg:absolute z-30 bg-white p-4 rounded-2xl shadow-lg flex items-start space-x-3 border border-gray-50 transition-all hover:scale-105 hover:z-50 max-w-[280px] mx-auto lg:mx-0 ${item.posClass}`}>
                                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 text-sm shrink-0">{item.icon}</div>
                                <div>
                                    <p className="text-[12px] text-gray-800 leading-tight"><span className="font-extrabold text-gray-950">{item.name}</span> {item.action}</p>
                                    <span className="text-[10px] text-gray-400 mt-1 block font-semibold uppercase">{item.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="hidden lg:block">
                        {users.map((user) => (
                            <div key={user.id} className={`absolute z-10 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl ${user.posClass}`}>
                                <Image key={user.id} src={user.img} alt="user" width={222} height={222} className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Circle;