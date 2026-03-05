"use client";
import React from 'react';
import { Lightbulb, PenTool, Layout, Zap } from 'lucide-react';

const features = [
  {
    title: 'Creative Ideas',
    description: 'Class aptent taciti sociq u litora torquen conub. ',
    icon: <Lightbulb size={40} strokeWidth={1.5} />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Awesome Design',
    description: 'Integer a elit pellentesqu e semper sem ultricies.',
    icon: <PenTool size={40} strokeWidth={1.5} />,
    color: 'text-rose-400',
    bgColor: 'bg-rose-50',
  },
  {
    title: 'Best Features',
    description: 'Fusce risus lorem pulvin ar eu posuere vitae.',
    icon: <Layout size={40} strokeWidth={1.5} />,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
  },
  {
    title: 'Easy Solutions',
    description: 'Aenean eget nulla eu dui malesuad convallis vel.',
    icon: <Zap size={40} strokeWidth={1.5} />,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
  },
];

const FeatureCards = () => {
  return (
    <section className="bg-white">
      <div className="container-custom pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white py-20 px-5 rounded-sm shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col items-center text-center group hover:shadow-[0_15px_50px_rgba(0,0,0,0.08)] transition-all duration-300 border border-transparent hover:border-gray-100"
            >

              <div className={`mb-8 ${feature.color} transition-transform duration-300 group-hover:scale-110`}>
                {feature.icon}
              </div>


              <h3 className="text-[#0a1d37] text-[21px] font-bold mb-4 font2 tracking-tight">
                {feature.title}
              </h3>


              <p className="text-gray-500 leading-relaxed font1 text-[18px] leading-[32px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;