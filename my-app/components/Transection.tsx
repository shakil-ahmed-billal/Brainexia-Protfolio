import Accordion from "@/components/Accordion";
import Image from "next/image";

function Transection() {
    return (
        <>
            <div className="bg-white z-7 overflow-hidden">
                <div className="container-custom mx-auto mt-20 lg:mt-46 mb-8">
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-0">

                        <div className="w-full lg:basis-[50%] flex items-center justify-center lg:justify-start relative min-h-[450px] md:min-h-[550px] lg:min-h-[600px]">

                            <div className="absolute inset-0 hero-radial-bg2" />

                            <div className="relative">
                                <Image
                                    src="/visa1.png"
                                    alt="Visa 1"
                                    width={425}
                                    height={400}
                                    priority
                                    className="w-[300px] md:w-[450px] h-auto object-contain z-10"
                                />
                            </div>

                            <div className="flex flex-col -ml-15 lg:-ml-25 z-20">
                                <Image
                                    src="/visa2.png"
                                    alt="Visa 2"
                                    width={400}
                                    height={400}
                                    priority
                                    className="w-[200px] md:w-[300px] h-auto object-contain"
                                />
                                <Image
                                    src="/visa-3.png"
                                    alt="Visa 3"
                                    width={400}
                                    height={300}
                                    priority
                                    className="w-[200px] md:w-[300px] h-auto object-contain -mt-20 md:-mt-40"
                                />
                            </div>
                        </div>

                        <div className="w-full lg:basis-[46%] text-center lg:text-left">
                            <h3 className="font2 h-color text-3xl md:text-[36px] font-bold leading-tight md:leading-[48px]">
                                Performance Is The Key
                                <span className="block">To Most People Achieving</span>
                                A Better Future
                            </h3>

                            <p className="font1 p-color text-base md:text-[16px] mt-4 lg:mt-2.5">
                                Etiam euismod odio euismod lacus fringilla hendrer.
                            </p>

                            <div className="mt-8 lg:mt-5 text-left">
                                <Accordion />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Transection;