import { type FC } from "react";

type MembersItem = {
    title: string;
    text: string;
    bgImage: string;
    fgImage: string;
};

const membersData: MembersItem[] = [
    {
        title: "Tom",
        text: "Tom is also an original founder of the band. He is very much the technical mastermind of the group which a supreme musical knowledge. His riffs are both catchy and he has a great ear for good guitar tones. Tom comes from a classic rock & blues background, primarily plays a Gibson Les Paul alongside a hand-made Stratocaster (he built himself) and other guitars. He uses a variety of effects, including textured avant-garde atmospheric sounds. Outside of the band Tom is architect and a keen fencer. Previous band Alphawaves.\n",
        bgImage: "/assets/tom-playing-guitar.jpg",
        fgImage: "/assets/tomface.png",
    },
    {
        title: "Max",
        text: "Maxwell is the original founder & band leader of ‘Earls of Eden’. He very much plays by feel and has a natural ability to come up with riffs and song ideas, even if they are a little wacky. Maxwell is very into funk & melodic rock bass playing, his hero is Flea from the Red Hot Chili Peppers. Maxwell tends to play a Fender Jazz or MusicMan Stingray with minimal effects but has been known to play a variety of other bass models to get different sounds. Maxwell sings on our tracks ‘Villian’s Revenge’, ‘Let’s Get Funky’ & ‘Black to Blue’. Maxwell is also an HR Professional and local politician/activist in Kensington. Previous bands include Bias, Shed, Curves Can Kill (CCK), Hollow Crowds, Transatlantic Gardening Competition (TGC), Out Of Millions & The Plastic Cats.\n",
        bgImage: "/assets/maxwell-standing.jpeg",
        fgImage: "/assets/maxface.png",
    },
    {
        title: "Carl",
        text: "Carl is the literal heartbeat of the band and has given the group a new lease of life with his amazing musical recording and production skills. Carl is highly talented percussionist and sites John Bonham as an influence to his solid drum style which is also very eclectic. Previous bands include Hollow Crowds, Transatlantic Gardening Competition (TGC), Blisted Pearl and Tacoma View.\n",
        bgImage: "/assets/carldrumming.jpg",
        fgImage: "/assets/carlface.png",
    },
    {
        title: "Bradley (2019-2025)",
        text: "Bradley was the original primary singer & songwriter of the band in partnership with Maxwell. Brad had an impressive vocal range and was very much a power singer with Robert Plant being a key influence. Brad was also taught to sing by one of Soundgarden singer Chris Cornell’s former tutors. Brad was from Whitstable, Kent and used to regularly commute down to London to practice with the Earls. Outside of music, Bradley was a police officer for 19 years and a keen footballer. Bradley sadly passed away from organ failure in April 2025 but his vocal recordings will be released in our upcoming tracks & albums. Previous band: Fully Ledded (Led Zepplin tribute).\n",
        bgImage: "/assets/bradley-maxwell.jpg",
        fgImage: "/assets/bradleyface.png",
    },
];

const Members: FC = () => (
    <section
        className="relative min-h-screen bg-fixed bg-center bg-cover"
        style={{backgroundImage: "url(/assets/eyes.webp)"}}
    >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content container */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-amber-700">
            <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6 mt-6">
                Members
            </h1>

            {/* Members section */}
            <div className="relative max-w-6xl mx-auto px-6 pb-10 text-white space-y-20">
                {membersData.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-6 relative`}
                        >
                            <div
                                className={`w-full md:w-1/2 relative ${
                                    !isEven ? "md:order-2" : ""
                                }`}
                            >
                                <img
                                    src={item.bgImage}
                                    alt={item.title + " background"}
                                    className="w-full lg:w-80 h-auto object-cover rounded-lg filter grayscale opacity-70"
                                />
                                <img
                                    src={item.fgImage}
                                    alt={item.title}
                                    className="absolute top-20 lg:top-5 left-0 lg:left-50 w-64 lg:w-80 h-auto object-contain rounded-lg"
                                />
                            </div>

                            <div className="w-full md:w-1/2 mt-6 lg:mt-0">
                                <h2 className="text-3xl md:text-4xl font-display font-extrabold mb-4 text-amber-700">
                                    {item.title}
                                </h2>
                                <p className="text-lg md:text-xl leading-relaxed text-amber-700 font-semibold">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);

export default Members;
