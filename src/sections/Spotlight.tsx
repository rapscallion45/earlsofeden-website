import React from 'react'


type SpotlightItem = { title: string; desc: string; img?: string }


const Spotlight: React.FC = () => {
    const items: SpotlightItem[] = [
        { title: 'New Album', desc: 'Out now on all platforms.', img: '/assets/placeholder1.jpg' },
        { title: 'Tour', desc: '2025 tour dates coming soon.', img: '/assets/placeholder2.jpg' },
        { title: 'Merch', desc: 'Limited edition items.', img: '/assets/placeholder3.jpg' }
    ]


    return (
        <div className="grid md:grid-cols-3 gap-6">
            {items.map((it, idx) => (
                <div key={idx} className="card-bg p-6 rounded-lg hover:-translate-y-1 transition-transform">
                    <div className="h-40 bg-black/30 rounded mb-4" />
                    <h3 className="text-xl font-bold font-heading">{it.title}</h3>
                    <p className="mt-2 text-gray-300 font-body">{it.desc}</p>
                </div>
            ))}
        </div>
    )
}


export default Spotlight
