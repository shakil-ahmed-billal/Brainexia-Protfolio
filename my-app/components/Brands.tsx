import Image from 'next/image';

export default function Brands() {
    const logos = [
        { src: '/1.png', alt: 'Brand 1' },
        { src: '/2.png', alt: 'Brand 2' },
        { src: '/3.png', alt: 'Brand 3' },
        { src: '/4.png', alt: 'Brand 4' },
    ];


    const allLogos = [...logos, ...logos, ...logos, ...logos];

    return (
        <section className="bg-white overflow-hidden py-1 lg:py-20 border-b border-gray-200 lg:border-b-0">
            <div className="container-custom ">

                <div className="relative flex overflow-hidden group">

                    <div className="flex space-x-16 md:space-x-24 animate-scroll whitespace-nowrap py-4 group-hover:[animation-play-state:paused]">
                        {allLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={200}
                                    height={80}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}