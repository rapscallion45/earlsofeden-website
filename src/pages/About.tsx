import React from "react";

type AboutItem = {
    title: string;
    text: string;
    bgImage: string; // Black & white faded background
    fgImage: string; // Foreground image
};

const aboutData: AboutItem[] = [
    {
        title: "Bradley",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec\n" +
            "                odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla\n" +
            "                quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent\n" +
            "                mauris.",
        bgImage: "/assets/bradley-maxwell.jpg",
        fgImage: "/assets/bradleyface.png",
    },
    {
        title: "Tom",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec\n" +
            "                odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla\n" +
            "                quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent\n" +
            "                mauris.",
        bgImage: "/assets/tom-playing-guitar.jpg",
        fgImage: "/assets/tomface.png",
    },
    {
        title: "Max",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec\n" +
            "                odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla\n" +
            "                quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent\n" +
            "                mauris.",
        bgImage: "/assets/maxwell-standing.jpeg",
        fgImage: "/assets/maxface.png",
    },
    {
        title: "Carl",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec\n" +
            "                odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla\n" +
            "                quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent\n" +
            "                mauris.",
        bgImage: "/assets/carldrumming.jpg",
        fgImage: "/assets/carlface.png",
    },
];

const About: React.FC = () => (
    <section
        className="relative min-h-screen bg-fixed bg-center bg-cover"
        style={{backgroundImage: "url(/assets/eyes.webp)"}}
    >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-amber-700">
            <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6 mt-6">
                About
            </h1>

            <p className="mb-6 text-lg md:text-xl leading-relaxed font-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
                odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
                quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
                mauris.
            </p>

            <p className="mb-6 text-lg md:text-xl leading-relaxed font-bold">
                Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
                lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Curabitur
                sodales ligula in libero.
            </p>

            <p className="mb-6 text-lg md:text-xl leading-relaxed font-bold">
                Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean
                quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis
                tristique sem. Proin ut ligula vel nunc egestas porttitor.
            </p>

            <p className="mb-6 text-lg md:text-xl leading-relaxed font-bold">
                Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean
                quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis
                tristique sem. Proin ut ligula vel nunc egestas porttitor.
            </p>
        </div>
        <div className="relative max-w-6xl mx-auto px-6 pb-10 text-white space-y-20">
            {aboutData.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row items-center gap-6 relative`}
                    >
                        {/* Image container */}
                        <div
                            className={`w-full md:w-1/2 relative ${
                                !isEven ? "md:order-2" : ""
                            }`}
                        >
                            {/* Background black & white faded image */}
                            <img
                                src={item.bgImage}
                                alt={item.title + " background"}
                                className="w-full lg:w-80 h-auto object-cover rounded-lg filter grayscale"
                            />
                            {/* Foreground image */}
                            <img
                                src={item.fgImage}
                                alt={item.title}
                                className="absolute top-20 lg:top-5 left-0 lg:left-50 w-64 lg:w-80 h-auto object-contain rounded-lg"
                            />
                        </div>

                        {/* Text */}
                        <div className="w-full md:w-1/2 mt-6 lg:mt-0">
                            <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-4 text-amber-700">
                                {item.title}
                            </h2>
                            <p className="text-lg md:text-xl leading-relaxed text-amber-700">{item.text}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    </section>
);

export default About;
