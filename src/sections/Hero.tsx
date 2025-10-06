import { type FC, useState } from "react"

const Hero: FC = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Fallback background image */}
            {!videoLoaded && (
                <img
                    src="/assets/evil_eyes.webp"
                    alt="Evil eyes background"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            )}

            {/* Background video */}
            <video
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
                    videoLoaded ? "opacity-100" : "opacity-0"
                }`}
                autoPlay
                loop
                muted
                playsInline
                onCanPlayThrough={() => setVideoLoaded(true)}
            >
                <source src="/assets/evil_eyes.mp4" type="video/mp4" />
            </video>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                <div className="p-8 rounded-2xl max-w-xl mx-auto">
                    <h1 className="text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-amber-700">
                        EARLS OF EDEN
                    </h1>

                    {/* Album cover with fixed height and pulsing placeholder */}
                    <div className="relative mx-auto my-10 w-60 lg:w-80 h-80 lg:h-80">
                        {!imageLoaded && (
                            <div className="absolute inset-0 bg-gray-400 animate-pulse rounded-lg" />
                        )}
                        <img
                            src="/assets/albumcover.png"
                            alt="Logo"
                            className={`w-full h-full object-cover rounded-lg transition-opacity duration-700 ${
                                imageLoaded ? "opacity-100" : "opacity-0"
                            }`}
                            onLoad={() => setImageLoaded(true)}
                        />
                    </div>

                    <p className="font-display mt-6 font-body text-amber-700 font-bold text-3xl lg:text-4xl">
                        Debut single "Save Me" out October 31st!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
