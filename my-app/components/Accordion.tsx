"use client";
import { useState } from "react";

const accordionData = [
    {
        title: "Custom Edit Tool Application",
        content: "Suspendisse mollis ligula dictum iaculis viverra nulla velit phauy lorem ac scelerisque neque turpis.",
    },
    {
        title: "Built In Safty Chat Mode Enabled",
        content: "Class aptent taciti sociosqu ad litora torquent conubia nostramase inceptos himenaeo. Phasellus metus nisl euismod.",
    },
    {
        title: "Foster Trust Builds System Always Open",
        content: "Morbi eget aliquet finibus, best condimentum aliquet quam. Quisque magna, sollicitudin vitae, lobortis feugiat arcu.",
    },
    {
        title: "Create Auto Layouts In App Interface",
        content: "Suspendisse mollis ligula dictum iaculis viverra nulla velit phauy lorem ac scelerisque neque turpis.",
    },
];

export default function Accordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(3);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-2xl space-y-2 border-t border-gray-200 mt-10">
            {accordionData.map((item, index) => (
                <div key={index} className="border-b border-gray-200 ">
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex justify-between items-center py-6 text-left transition-all cursor-pointer"
                    >
                        <span className={`text-[21px] md:text-2xl font-bold font2 ${openIndex === index ? 'text-[#141F39]' : 'h-color'}`}>
                            {item.title}
                        </span>
                        <span className="text-[18px] leading-[32px] font-bold text-blue-600 ml-4">
                            {openIndex === index ? "−" : "+"}
                        </span>
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 pb-6" : "max-h-0"
                            }`}
                    >
                        <p className="p-color text-lg font1 leading-relaxed">
                            {item.content}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}