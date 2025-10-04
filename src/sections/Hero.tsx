import React from 'react';

const Hero: React.FC = () => (
    <section
        className="h-screen flex items-center justify-center bg-top bg-fit"
        style={{
            backgroundImage: "url(/assets/evil_eyes.webp)",
        }}
    >
        <div className="bg-black/40 p-4 lg:p-8 rounded-2xl max-w-xl text-center">
            <h1 className="text-6xl font-display font-extrabold tracking-tight text-white">
                EARLS OF EDEN
            </h1>
            <img
                src="/assets/album_art.webp"
                alt="Logo"
                className="mx-auto my-10 w-60 lg:w-80 h-auto"
            />
            <p className="font-display mt-6 font-body text-gray-200 font-bold text-4xl">
                Debut single "Save Me" out October 31st!
            </p>
            {/*<div className="mt-6 flex gap-4 justify-center">*/}
            {/*    <button className="px-6 py-3 border border-white/30 rounded hover:opacity-90 transition cursor-pointer">*/}
            {/*        Latest Single*/}
            {/*    </button>*/}
            {/*    <button className="px-6 py-3 border border-white/30 rounded hover:opacity-90 transition cursor-pointer">*/}
            {/*        Listen*/}
            {/*    </button>*/}
            {/*</div>*/}
        </div>
    </section>
);

export default Hero;
