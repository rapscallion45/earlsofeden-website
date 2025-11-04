import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Music from './pages/Music'
import Members from "./pages/Members";
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'


const App: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[linear-gradient(180deg,#000,rgba(10,10,10,0.9))] text-white">
            <Header />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}


export default App
