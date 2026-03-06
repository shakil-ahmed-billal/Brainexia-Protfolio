import Image from "next/image";

function Security() {
  return (
    <>
      <div className="bg-white overflow-hidden z-9">
        <div className="container-custom mt-6 mb-8 py-10">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
            <div className="w-full lg:basis-[50%] mt-10 lg:mt-50 text-center lg:text-left">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-15">
                <h2 className="text-[28px] md:text-[36px] h-color font-bold font2 leading-tight">
                  Better Security To Better
                  <span className="block">Protection An Experience</span>
                  <span className="block">Of Strength.</span>
                </h2>
                <Image
                  src="/security/security-icon.png"
                  alt="Data Analysis Dashboard Graphics"
                  width={76}
                  height={72}
                  priority
                  className="object-contain w-14 lg:w-[76px]"
                />
              </div>

              <p className="text-[#12141D] mt-6 max-w-md mx-auto lg:mx-0">
                Class aptent taciti sociosqu ad litora torquent conubia
                <span className="lg:block">
                  nostrama inceptos himenaeos. Donec tristique nibh ipsum{" "}
                </span>{" "}
                dignissim.
              </p>

              <div className="w-[80%] h-[1px] bg-gray-300 mt-8 mb-8 mx-auto lg:mx-0"></div>

              <div className="space-y-6">
                <div>
                  <h4 className="h-color text-[21px] font-bold font2">
                    Well Organised User Interface
                  </h4>
                  <p className="p-color mt-2 text-[18px]">
                    Etiam id euismod odio. Ut euismod sem a lacus fringilla.
                  </p>
                </div>
                <div>
                  <h4 className="h-color text-[21px] font-bold font2 mt-6 lg:mt-10">
                    Completely Bug Free
                  </h4>
                  <p className="p-color mt-2 text-[18px]">
                    Cras eleifend leo ac varius tristique suspendisse.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:basis-[50%] relative min-h-[400px] md:min-h-[500px] lg:min-h-[220px] flex items-center justify-center mt-10 lg:mt-0">
              <div className="absolute inset-0 hero-radial-bg" />

              <div className="absolute lg:-left-10 left-5 top-61 md:left-0 lg:-left-30 md:top-40 md:top-60 lg:top-110 z-10">
                <Image
                  src="/security/security-frame-1.png"
                  alt="Graphics 1"
                  width={220}
                  height={220}
                  className="object-contain w-[120px] md:w-[200px] lg:w-[220px]"
                />
              </div>

              <div className="absolute left-10 md:left-20 lg:-left-10 top-20 md:top-40 lg:top-70 z-9">
                <Image
                  src="/security/security-frame-2.png"
                  alt="Graphics 2"
                  width={400}
                  height={400}
                  className="object-contain w-[250px] md:w-[350px] lg:w-[400px]"
                />
              </div>

              <div className="absolute right-0 top-0 z-8">
                <Image
                  src="/security/security-frame-3.png"
                  alt="Graphics 3"
                  width={400}
                  height={400}
                  className="object-contain w-[280px] md:w-[400px] lg:w-full h-auto lg:h-[100vh]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Security;
