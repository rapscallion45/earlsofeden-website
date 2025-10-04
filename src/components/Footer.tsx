import React from "react";
import SocialHeader from "./SocialHeader.tsx";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-t from-black to-neutral-900 text-gray-300 py-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center space-y-8">
                {/* Social Links */}
                <SocialHeader />

                {/* Copyright */}
                <div className="text-sm text-amber-700">
                    © {currentYear},{" "}
                    <a href="/" className="hover:text-white transition">
                        Earls Of Eden
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
