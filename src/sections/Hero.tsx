import React from "react";

const Hero: React.FC = () => (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background video */}
        <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src="/assets/evil_eyes.mp4" type="video/mp4"/>
            <img
                src="/assets/evil_eyes.webp"
                alt="Evil eyes background"
                className="w-full h-full object-cover"
            />
        </video>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
            <div className="p-8 rounded-2xl max-w-xl mx-auto">
                <h1 className="text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-amber-700">
                    EARLS OF EDEN
                </h1>
                <img
                    src="/assets/albumcover.png"
                    alt="Logo"
                    className="mx-auto my-10 w-60 lg:w-80 h-auto"
                />
                <p className="font-display mt-6 font-body text-amber-700 font-bold text-3xl lg:text-4xl">
                    Debut single "Save Me" out October 31st!
                </p>
                {/*<div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">*/}
                {/*    <button className="px-6 py-3 border border-white/30 rounded text-white hover:opacity-90 transition">*/}
                {/*        Latest Single*/}
                {/*    </button>*/}
                {/*    <button className="px-6 py-3 bg-accent text-black rounded font-semibold hover:opacity-90 transition">*/}
                {/*        Listen*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </div>
    </section>
);

export default Hero;
