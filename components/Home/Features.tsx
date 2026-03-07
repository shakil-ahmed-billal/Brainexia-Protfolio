import Image from "next/image";

export default function Features() {
  const featureData = [
    {
      title: "Active User Analytics",
      desc: "Class aptent taciti sociosqu litora torquen conubia nostram.",
      icon: "/icons/feature-icon-1.svg",
      borderColor: "hover:border-indigo-500",
    },
    {
      title: "Smart Coding Development",
      desc: "Morbi eget aliquet finibus, best condimentum aliquet quam.",
      icon: "/icons/feature-icon-2.svg",
      borderColor: "hover:border-red-400",
    },
    {
      title: "User Friendly Interface",
      desc: "Quisque magna, sollicitudin vitae, lobortis feugiat arcu.",
      icon: "/icons/feature-icon-3.svg",
      borderColor: "hover:border-green-400",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-custom text-center">
        <div className="max-w-2xl mx-auto mb-10 md:mb-16 space-y-4 px-4">
          <h2 className="text-3xl md:text-[36px] font-bold h-color font2 leading-tight">
            How To Grow Your Business
          </h2>
          <p className="text-[#141F39] text-[13px] md:text-[16px] leading-relaxed font1">
            Class aptent taciti sociosqu ad litora torquent conubia nostramase
            inceptos himenaeos. Phasellus metus nisl euismod eget lorem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-6 md:px-0 justify-center">
          {featureData.map((item, index) => (
            <div
              key={index}
              className={`bg-white py-12 md:py-20 px-6 md:px-5 shadow-[0_10px_50px_rgba(0,0,0,0.1)] border-b-4 border-transparent transition-all duration-300 group hover:-translate-y-2 max-w-[340px] md:max-w-none mx-auto w-full`}
            >
              <div className="mb-6 md:mb-8 flex justify-center">
                <div className="relative w-14 h-14 md:w-20 md:h-20 transition-transform duration-500 group-hover:rotate-[180deg]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <h3 className="text-[16px] md:text-[21px] font-bold h-color font2 mb-3 md:mb-4">
                {item.title}
              </h3>
              <p className="p-color font1 leading-relaxed text-[12px] md:text-[18px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center p-color mt-10 md:mt-15 text-[14px] md:text-[20px] px-4">
          Approx <span className="text-[#7564F8] font-bold">875+</span> team
          members ready to online support for you
        </p>
      </div>
    </section>
  );
}
