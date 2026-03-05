"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Activity {
    id: number;
    name: string;
    action: string;
    date: string;
    icon: string;
    // এখানে ডেক্সটপ পজিশনগুলো থাকবে
    position: { top?: string; bottom?: string; left?: string; right?: string };
}

const Circle: React.FC = () => {
    const activities: Activity[] = [
        {
            id: 1,
            name: 'Karen',
            action: 'change project info on Project',
            date: 'Aug 10',
            icon: '✎',
            position: { top: '15%', right: '10%' },
        },
        {
            id: 2,
            name: 'Andrea',
            action: 'change the due date of Project',
            date: 'June 05',
            icon: '✎',
            position: { bottom: '20%', right: '15%' },
        },
        {
            id: 3,
            name: 'Karen',
            action: 'leave some comments on Ilustrasi',
            date: 'July 25',
            icon: '💬',
            position: { bottom: '25%', left: '10%' },
        },
    ];

    const users = [
        { id: 4, img: '/man1.png', pos: { top: '10%', left: '20%' } },
        { id: 5, img: '/man2.png', pos: { bottom: '5%', left: '35%' } },
        { id: 6, img: '/man3.png', pos: { top: '30%', right: '15%' } },
    ];

    return (
        <section className="w-full bg-white py-20 overflow-hidden">
            <div className="container-custom mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h3 className="h-color text-3xl md:text-[36px] font-bold font2 leading-tight">
                        Why Will You Choose Our Application
                    </h3>
                    <p className="p-color mt-4 text-base leading-relaxed">
                        Class aptent taciti sociosqu ad litora torquen conubia nostramase inceptos himenaeos. Phasellus metus nisl euismod eget lorem.
                    </p>
                </div>

                {/* Main Content Area */}
                <div className="relative min-h-[500px] lg:h-[700px] flex flex-col lg:flex-row items-center justify-center">

                    {/* সেন্টারের এনিমেটেড সার্কেল */}
                    <div className="relative z-20 mb-20 lg:mb-0">
                        {/* ড্যাশড বর্ডারগুলো শুধু ল্যাপটপে দেখাবে যাতে মোবাইলে হিজিবিজি না লাগে */}
                        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border-2 border-dashed border-gray-100 rounded-full" />
                        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border-2 border-dashed border-gray-100 rounded-full" />

                        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center bg-white rounded-full shadow-xl border border-gray-50">
                            <svg className="absolute w-full h-full -rotate-90 scale-90 md:scale-100">
                                <circle cx="160" cy="160" r="140" fill="transparent" stroke="#F3F4F6" strokeWidth="12" />
                                <motion.circle
                                    cx="160"
                                    cy="160"
                                    r="140"
                                    fill="transparent"
                                    stroke="#3B32F3"
                                    strokeWidth="12"
                                    strokeDasharray="880"
                                    strokeLinecap="round"
                                    initial={{ strokeDashoffset: 880 }}
                                    whileInView={{ strokeDashoffset: 250 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                />
                            </svg>
                            <div className="text-center z-10">
                                <h2 className="text-4xl md:text-[46px] font-black text-[#3B32F3] font2 tracking-tighter">5M+</h2>
                                <p className="text-gray-400 font-medium text-sm md:text-[17px] font1">Active Members</p>
                            </div>
                        </div>
                    </div>

                    {/* Activity Cards - মোবাইলে স্ট্যাক, ল্যাপটপে অ্যাবসোলিউট */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:block w-full max-w-md lg:max-w-none gap-4">
                        {activities.map((item) => (
                            <div
                                key={item.id}
                                className="lg:absolute z-30 bg-white p-4 rounded-2xl shadow-lg flex items-start space-x-3 border border-gray-50 transition-all hover:scale-105"
                                style={typeof window !== 'undefined' && window.innerWidth > 1024 ? item.position : {}}
                            >
                                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 text-sm shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-[12px] text-gray-800 leading-tight">
                                        <span className="font-extrabold text-gray-950">{item.name}</span> {item.action}
                                    </p>
                                    <span className="text-[10px] text-gray-400 mt-1 block font-semibold uppercase">{item.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* User Avatars - মোবাইলে লুকানো বা ছোট করে দেখানো ভালো, কারণ এগুলো ডিজাইন নষ্ট করে */}
                    <div className="hidden lg:block">
                        {users.map((user) => (
                            <div
                                key={user.id}
                                className="absolute z-10 w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg"
                                style={user.pos}
                            >
                                <Image
                                    src={user.img}
                                    alt="user"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Circle;