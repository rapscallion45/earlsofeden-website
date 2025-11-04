import { useState, type FC } from "react";

const About: FC = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <section
            className="relative min-h-screen bg-fixed bg-center bg-cover"
            style={{ backgroundImage: "url(/assets/eyes.webp)" }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content container */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-amber-700">
                <h1 className="text-4xl md:text-5xl font-display font-extrabold mb-6 mt-6">
                    About
                </h1>

                {/* Collapsible intro text */}
                <div
                    className={`relative overflow-hidden transition-all duration-700 ${
                        expanded ? "max-h-none" : "max-h-[600px]"
                    }`}
                >
                    <div className="prose prose-lg text-amber-700 font-semibold">
                        <p className="mb-6 text-lg md:text-xl leading-relaxed font-semibold">
                            Earls of Eden is an alternative rock band from London, England, formed in 2019. The group
                            consists of
                            Maxwell Woodger on bass guitar,
                            Tom Szczebiot on lead guitar, Carl Scrivener on drums and the (late) Bradley Crocker on lead
                            vocals. The
                            band’s sound is a fusion of
                            alternative, classic, blues & funk rock – a reflection of the band’s wide musical tastes.
                            Nicknamed ‘The
                            Earls’, the group are currently
                            recording their self-titled debut album ‘Earls of Eden’ (due in 2026) with their first
                            single & animated
                            music video ‘Save Me’ set to be
                            released on 31st October 2025, Halloween!
                        </p>
                        <p className="mb-6 text-lg md:text-xl leading-relaxed font-semibold">
                            This is the story so far…
                        </p>

                        <h3 className="text-2xl md:text-3xl font-display font-extrabold mb-6 mt-6">
                            Early Beginnings
                        </h3>

                        <p className="mb-6 text-lg md:text-xl leading-relaxed font-semibold">
                            Formed initially in February 2019, the Earls of Eden was founded by bassist & band leader
                            Maxwell when
                            he his previous group ‘The Plastic Cats’ disbanded in late 2018. Abe Ghory was recruited as
                            the original
                            drummer and came from a ‘rock n roll’ background, influenced by classic rocker groups like
                            Thin Lizzy.
                            Riffs for the
                            band’s
                            first original songs ‘This Road’ & ‘Villan’s Revenge’ started to take form of just bass &
                            drums. Abe
                            suggested
                            Tom join the group as lead guitarist, whom he used to be in Oasis style band with called
                            ‘Alphawaves’.
                            Tom comes
                            from a classic rock & blues background, primarily plays a Gibson Les Paul and uses a variety
                            of effects,
                            including
                            textured avant-garde atmospheric sounds. This is a nice contrast to Maxwell’s funk & melodic
                            rock bass
                            playing
                            (Maxwell’s hero is Flea from the Red Hot Chili Peppers), tending to play a Fender Jazz bass
                            or MusicMan
                            Stingray
                            with minimal effects but has been known to play a variety of other bass models.
                        </p>

                        <h3 className="text-2xl md:text-3xl font-display font-extrabold mb-6 mt-6">
                            Completing the Lineup
                        </h3>

                        <p className="mb-6 text-lg md:text-xl leading-relaxed font-semibold">
                            By mid 2019 the group had established it’s core section of musicians but still lacked a
                            primary vocalist
                            (Maxwell does sing a little but only on a couple of tracks). The band set out to recruit a
                            lead singer.
                            After a few auditions, singer/songwriter Bradley joined the group after impressing the band
                            with his
                            power vocals, established after years of fronting ‘Fully Ledded’, a Led Zepplin tribute
                            band. Brad was
                            from Whitstable, Kent and his background as a policeman can often be heard in the band’s
                            lyrics.
                        </p>

                        <h3 className="text-2xl md:text-3xl font-display font-extrabold mb-6 mt-6">
                            Musical Chemistry
                        </h3>

                        <p className="mb-6 text-lg md:text-xl leading-relaxed font-semibold">
                            The band’s spark of creativity shined brightly in late 2019 as the group quickly wrote the
                            spooky song
                            ‘Save Me’, one of Tom’s early riffs which became a stable track and earmarked as a future
                            single,
                            alongside our sea shanty ‘Walk the Plank’, inspired by Pirates of the Caribbean & Captain
                            Hook. Brad
                            wrote lyrics from the heart ‘Missing You’ about the loss of his late father shortly before
                            he joined the
                            group. Our song ‘Core’ refers to the apple core, from Eve’s apple in the Garden of Eden, a
                            reference to
                            the band’s name. 2020 was a difficult year as the band was forced to share ideas remotely
                            during the
                            pandemic, however fusion funk/desert rock song ‘The Harder They Fall’ was created during
                            this time.
                            Using Abe’s garden flat as a base of operations with our own PA system, by the end of 2021
                            the band has
                            written all the music and lyrics to our 10 song debut album and had started exploring
                            recording options.
                        </p>

                        <h3 className="text-2xl md:text-3xl font-display font-extrabold mb-6 mt-6">
                            Changes & Covers
                        </h3>

                        <p className="mb-6 text-lg md:text-xl leading-relaxed font-semibold">
                            The Earls parted ways with drummer Abe in mid 2022. The group had to completely pause it’s
                            original song
                            recording project to instead focus on learning 24 songs for a 2 hour 1960s/70s covers rock
                            gig for
                            Brad’s, second cousin Goergina’s father’s 80th Birthday Party in in Whitstable Town Hall,
                            Kent in
                            November 2022. The setlist included tracks by The Rolling Stones, Cream, Fleetwood Mac & of
                            course
                            Brad’s specially Led Zepplin! For the gig the group was joined by session drummer Scott
                            Higham, Tom’s
                            now wife Codee Woo on keyboards and Georgina Barton on backing vocals (& bass on the 2
                            tracks Maxwell
                            played Saxophone on). You can find live videos of the gig on our YouTube Page.
                        </p>

                        <h3 className="text-2xl md:text-3xl font-display font-extrabold mb-6 mt-6">
                            1st Album Recording
                        </h3>

                        <p className="mb-6 text-lg md:text-xl leading-relaxed font-semibold">
                            After a bit of a break, the band switched back to it’s original recording project in mid
                            2023, using
                            Maxwell’s flat as a base of operations as we still lacked a drummer. In the space of 2 weeks
                            Maxwell
                            recorded and structured all 10 bass tracks to our debut album. Shortly after over a long
                            weekend Bradley
                            recorded all his vocal parts. Tom started to record his guitar parts on top and tweaking the
                            tracks.
                            Maxwell composed drums using samples as placeholders on the songs in sprit of Abe’s previous
                            parts with
                            some variations.
                        </p>

                        <h3 className="text-2xl md:text-3xl font-display font-extrabold mb-6 mt-6">
                            2nd Album Sofa Writing
                        </h3>

                        <p className="mb-6 text-lg md:text-xl leading-relaxed font-semibold">
                            In early 2024 while we were waiting on album 1 recording, Bardley came to stay in Maxwell’s
                            flat during
                            an assignment to train other police officers using his long experience of 19 years in the
                            force. Maxwell
                            had been creating yet more basslines and showed these ideas to Bradley whilst sitting on the
                            sofa who
                            immediately started humming vocal melodies & creating lyrics. Over the course of a few
                            months during the
                            evenings Brad & Maxwell wrote a further 10 tracks which will become the basis of our future
                            2nd album.
                        </p>

                        <h3 className="text-2xl md:text-3xl font-display font-extrabold mb-6 mt-6">
                            Losing Bradley
                        </h3>

                        <p className="mb-6 text-lg md:text-xl leading-relaxed font-semibold">
                            By mid-2024 Bradley’s health had noticeably started deteriorating due to years of alcohol
                            abuse. He went
                            into hospital and whilst there were hopes of a liver transplant, over the months that passed
                            by of
                            intensive care, it was too late. On 4th April 2025 Bradley passed away from multiple organ
                            failure, aged
                            45. That day we lost our true friend and musical brother. Whilst Bradley is gone, his music
                            will live
                            on. We have around 20+ tracks of his vocals which we plan to release in the months & years
                            ahead to
                            honour his legacy. They are amazing songs and we want to do the tracks justice in recording
                            them to a
                            high stranded, something to stand the test of time and can be proud of.
                        </p>

                        <h3 className="text-2xl md:text-3xl font-display font-extrabold mb-6 mt-6">
                            Gaining Carl
                        </h3>

                        <p className="mb-6 text-lg md:text-xl leading-relaxed font-semibold">
                            Maxwell has for many years been trying to recruit Carl Scrivener to Earls of Eden as a
                            drummer. Both
                            previously played in bands at Essex University, first meeting in punk group ‘The Hollow
                            Crowds’ in
                            2008-9, before playing again together 2010-11 in The Transatlantic Gardening Competition
                            (TGC). 13 years
                            later in late 2024 Carl finally agreed to join The Earls and started composing drums
                            remotely to ‘Save
                            Me’ & ‘Walk The Plank’. Sadly Carl never got to meet Brad but they have heard each other on
                            those tracks
                            and had appreciation of the other’s musical abilities. Carl is highly talented percussionist
                            and sites
                            John Bonham to his solid drum style which is also very eclectic. In May 2025 Carl
                            transferred from
                            Colchester to London and moved into Maxwell’s new place. The band has established it’s own
                            home music
                            studio with Carl’s full drum kit set up, PA system, amps, mics and recording gear.
                        </p>

                        <h3 className="text-2xl md:text-3xl font-display font-extrabold mb-6 mt-6">
                            Future Plans
                        </h3>

                        <p className="mb-6 text-lg md:text-xl leading-relaxed font-semibold">
                            The band is currently in the process of self-recording, mixing, producing and mastering our
                            debut album
                            ‘Earls of Eden’. There will be a number singles released with animated music videos over the
                            coming
                            months and we hope to release our first full album at some point in 2026 so plenty to look
                            forward to.
                            Sometime in the future we will need to recruit a new singer but we are aiming to release the
                            bulk of
                            material we wrote with Bardley before seeking a new vocalist that fits the bill.
                        </p>
                    </div>

                    {/* Fade-out overlay when collapsed */}
                    {!expanded && (
                        <div
                            className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
                    )}
                </div>

                {/* Toggle button */}
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-4 px-6 py-2 text-amber-700 hover:text-white font-bold rounded-lg transition cursor-pointer"
                >
                    {expanded ? "Show less" : "Read more..."}
                </button>
            </div>
        </section>
    );
};

export default About;
