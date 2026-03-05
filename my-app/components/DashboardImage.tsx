import Image from "next/image";

function DashboardImage() {
    return (
        <>
            <div className="bg-white">
                <div className="container-custom mt-15 md:mt-20 lg:mt-46 mb-8 relative">
                    <div className="flex ">
                        <div>
                            <Image
                                src="/mobiledashboard.png"
                                alt="Data Analysis Dashboard Graphics"
                                width={400}
                                height={400}
                                priority
                                className="object-contain relative z-9"
                            />
                        </div>

                        <div className="ml-[-55px]">
                            <img src="/leptopedashboard.png" alt="Data Analysis Dashboard Graphics" className="w-full h-full object-contain z-8" />
                        </div>
                        <div >
                            <Image
                                width={400}
                                height={400}
                                src="/leptopechart.png"
                                alt="Data Analysis Dashboard Graphics"
                                className="lg:w-[280px] lg:h-[280px] md:w-[180px] md:h-[180px] h-[130px] w-[130px] object-contain z-9 absolute  top-0 right-5 lg:right-0"
                            />


                            <Image
                                width={400}
                                height={400}
                                src="/mobilechart.png"
                                alt="Data Analysis Dashboard Graphics"
                                className="lg:w-[280px] lg:h-[280px] md:w-[180px] md:h-[180px] h-[130px] w-[130px] object-contain z-9 absolute lg:top-55 md:top-35 top-31 right-5 lg:right-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardImage;