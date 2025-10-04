import { type FC } from 'react'


const Music: FC = () => (
    <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-heading font-bold mb-6">Music</h2>
        <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="card-bg p-6 rounded-lg hover:-translate-y-1 transition-transform">
                    <div className="h-40 bg-black/30 rounded mb-4" />
                    <h3 className="font-heading text-lg">Track Title {i + 1}</h3>
                    <p className="text-gray-300 text-sm font-body mt-2">Release placeholder description</p>
                </div>
            ))}
        </div>
    </div>
)


export default Music
