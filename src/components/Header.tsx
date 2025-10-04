import React, { useState } from "react";
import SocialHeader from "./SocialHeader.tsx";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-black/80 text-white fixed w-full z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                {/* Logo */}
                <a href="/" className="font-bold text-xl">
                    EARLS OF EDEN
                </a>

                {/* Desktop nav */}
                <div className={"hidden md:flex"}>
                    <SocialHeader />
                </div>

                {/* Hamburger button */}
                <button
                    className="md:hidden flex items-center px-3 py-2 rounded hover:opacity-80 text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="fill-current h-6 w-6"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isOpen ? (
                            // X icon when menu is open
                            <path
                                fill="white"
                                d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 1 0 5.7 7.11L10.59 12l-4.89 4.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"
                            />
                        ) : (
                            // Hamburger icon when menu is closed
                            <>
                                <rect x="3" y="5" width="18" height="2" fill="#FFFFFF" rx="1" />
                                <rect x="3" y="11" width="18" height="2" fill="#FFFFFF" rx="1" />
                                <rect x="3" y="17" width="18" height="2" fill="#FFFFFF" rx="1" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <>
                <nav className="md:hidden bg-black/90 px-4 pb-4 space-y-2">
                    <a href="#home" className="block py-2 hover:opacity-80">Home</a>
                    <a href="#music" className="block py-2 hover:opacity-80">Music</a>
                    <a href="#tour" className="block py-2 hover:opacity-80">Tour</a>
                    <a href="#shop" className="block py-2 hover:opacity-80">Shop</a>
                    <a href="#contact" className="block py-2 hover:opacity-80">Contact</a>
                </nav>
                    <div className="p-4 pb-8">
                    <SocialHeader />
                    </div>
                </>
            )}
        </header>
    );
};

export default Header;
