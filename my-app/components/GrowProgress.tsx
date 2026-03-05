"use client";
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface StatItem {
    value: number;
    suffix: string;
    label: string;
}

const GrowProgress: React.FC = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const stats: StatItem[] = [
        { value: 142, suffix: '', label: 'New Features' },
        { value: 28, suffix: 'k', label: 'APP Download' },
        { value: 53, suffix: 'M', label: 'Active Users' },
        { value: 90, suffix: '%', label: 'Positive Rate' },
    ];

    return (
        <section ref={ref} className="w-full bg-[#3B32F3] py-24 md:py-32">
            <div className="container-custom mx-auto px-6 text-center">

                <div className="mb-16 md:mb-24">
                    <h2 className="text-white text-[36px] md:text-[36px] font-bold mb-6 font2 leading-tight">
                        We Help To Grow Your Business
                    </h2>
                    <p className="text-white/80 text-[16px] max-w-2xl mx-auto leading-[24px] font1">
                        Quisque fermentum porta tincidunt. Interdum semper. Pellentesque
                        facilisis augue dolor mollis suscipit erat libero fermentum.
                    </p>
                </div>

                <div className="w-full">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 md:gap-10">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center"
                            >
                                <h3 className="text-white text-[42px] md:text-[64px] font-bold mb-2 tracking-tight font2 leading-none">
                                    {inView ? (
                                        <CountUp
                                            end={stat.value}
                                            duration={2.5}
                                            suffix={stat.suffix}
                                        />
                                    ) : (
                                        "0"
                                    )}
                                </h3>
                                <p className="text-white/90 text-[14px] md:text-[18px] leading-[20px] md:leading-[28px] font-medium font1 uppercase tracking-wider">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GrowProgress;