import Image from "next/image";

function DashboardImage() {
    return (
        <>
            <div className="bg-white">
                <div className="container-custom mt-46 mb-8 relative">
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
                                className="w-[280px] h-[280px] object-contain z-9 absolute  top-0 right-0"
                            />


                            <Image
                                width={400}
                                height={400}
                                src="/mobilechart.png"
                                alt="Data Analysis Dashboard Graphics"
                                className="w-[280px] h-[280px] object-contain z-9 absolute top-55 right-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardImage;