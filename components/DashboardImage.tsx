import Image from "next/image";

function DashboardImage() {
  return (
    <>
      <div className="bg-white relative z-20">
        <div className="container-custom  py-20">
          <div className="flex ">
            <div>
              <Image
                src="/dashboard/mobile-dashboard.png"
                alt="Data Analysis Dashboard Graphics"
                width={400}
                height={400}
                priority
                className="object-contain relative z-9"
              />
            </div>

            <div className="ml-[-55px]">
              <Image
                src="/dashboard/laptop-dashboard.png"
                alt="Data Analysis Dashboard Graphics"
                width={1200}
                height={800}
                className="w-full h-full object-contain z-8"
              />
            </div>
            <div>
              <Image
                width={400}
                height={400}
                src="/laptop-chart.png"
                alt="Data Analysis Dashboard Graphics"
                className="lg:w-[280px] lg:h-[280px] md:w-[180px] md:h-[180px] h-[130px] w-[130px] object-contain z-9 absolute  top-0 right-5 lg:right-0"
              />

              <Image
                width={400}
                height={400}
                src="/mobile-chart.png"
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
