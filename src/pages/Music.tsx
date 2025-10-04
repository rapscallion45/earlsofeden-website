import { type FC } from 'react'


const Music: FC = () => (
    <div className="max-w-6xl mx-auto px-6 py-20 h-screen">
        <h2 className="text-4xl font-display font-bold text-amber-700 mb-6">Music</h2>
        <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: 1 }).map((_, i) => (
                <div key={i} className="card-bg p-6 rounded-lg hover:-translate-y-1 transition-transform">
                    <img
                        src="/assets/album_art.webp"
                        alt="Logo"
                        className="mx-auto my-10 w-60 lg:w-80 h-auto"
                    />
                    <h3 className="font-heading text-lg text-amber-700 font-bold">Save Me</h3>
                    <p className="text-sm font-body mt-2 text-amber-700">Earls Of Eden debut single, released October
                        2025!</p>
                </div>
            ))}
        </div>
    </div>
)


export default Music
