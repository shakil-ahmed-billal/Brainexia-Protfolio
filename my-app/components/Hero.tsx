import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative bg-white overflow-hidden">
            <div className="absolute top-0 left-0 w-1/3 h-full z-0 hidden lg:block" />

            <div className="container-custom py-10 lg:py-10 md:mb-20 lg:mb-50 flex flex-col lg:flex-row items-center justify-between relative z-10 border-b border-gray-200 lg:border-b-0">

                <div className="w-full lg:basis-[65%] space-y-7 pt-10 lg:pt-40 text-center lg:text-left relative">
                    <h1 className="text-4xl lg:text-[70px] text-[#162555] font-extrabold leading-[1.15] tracking-tight font2">
                        Smart-Thinking &
                        <span className="block">Innovative Solution.</span>
                    </h1>

                    <p className="text-gray-500 text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 p-color">
                        Class aptent taciti sociosqu ad litora torquent conubia nostrama
                        inceptos himenaeos. Donec tristique nibh ipsum dignissim.
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6 pt-4">
                        <button className="bg-indigo-600 text-white px-7 lg:px-9 py-3 lg:py-4 rounded-full font-bold text-base lg:text-lg hover:bg-indigo-700 transition shadow-lg">
                            Discover More
                        </button>

                        <Link href="#" className="flex items-center gap-2 text-blue-950 font-bold text-base lg:text-lg hover:text-indigo-600 transition">
                            Explore Service
                            <span className="text-xl">→</span>
                        </Link>
                    </div>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 pt-6 text-gray-600 text-[14px] lg:text-[15px]">
                        {["Get 15 days free trial", "No credit card is required", "Cancel anytime"].map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <span className="text-indigo-600 font-bold">✔</span>
                                {item}
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:flex justify-center lg:justify-end absolute top-25 right-[62%] ">
                        <Image src="/3size.svg" alt="G1" width={50} height={50} priority className="object-contain" />
                    </div>

                    <div className='hidden lg:block bg-[#F3D5D8] w-[20px] h-[20px] rounded-[50%] absolute top-30 left-10'></div>
                </div>

                <div className='w-full lg:basis-[35%] relative min-h-[400px] lg:min-h-[500px] mt-16 lg:mt-0'>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] hero-radial-bg1 -z-10 opacity-60" />

                    <div className="flex justify-center lg:justify-end absolute -top-10 left-0 lg:-left-45 ">
                        <Image
                            src="/h-1.svg"
                            alt="Graphics 1"
                            width={336}
                            height={322}
                            priority
                            className="object-contain w-[180px] lg:w-[336px]"
                        />
                    </div>

                    <div className="flex justify-center lg:justify-end absolute top-0 -right-5 lg:-right-15 z-10 w-full">
                        <Image
                            src="/h2.png"
                            alt="Graphics 2"
                            width={1800}
                            height={1800}
                            priority
                            className="object-contain w-[320px] lg:w-[800px] h-auto"
                        />
                    </div>

                    <div className="flex justify-center lg:justify-end absolute top-32 lg:top-60 right-0 lg:-left-20 z-5">
                        <Image
                            src="/card3.png"
                            alt="Graphics 3"
                            width={400}
                            height={400}
                            priority
                            className="object-contain w-[200px] lg:w-[400px] h-auto"
                        />
                    </div>
                </div>


            </div>
        </section>
    );
}