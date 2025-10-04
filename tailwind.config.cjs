module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['"Emilys Candy"', 'cursive'],
                body: ['"Emilys Candy"', 'cursive']
            },
            colors: {
                primary: '#0b0b0b',
                accent: '#e7d0a9',
                cardBg: 'rgba(255,255,255,0.05)'
            }
        }
    },
    plugins: []
}
