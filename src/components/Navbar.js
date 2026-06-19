import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-slate-950/95 backdrop-blur-lg shadow-lg shadow-purple-500/10 border-b border-white/5"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a href="#about" className="group">
                        <h1 className="text-2xl font-bold tracking-wider">
                            <span className="bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent">
                                ROCH
                            </span>
                            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                .
                            </span>
                        </h1>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a
                            href="#home"
                            className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium relative group"
                        >
                            About
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-600 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a
                            href="#experience"
                            className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium relative group"
                        >
                            Experience
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-600 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a
                            href="#projects"
                            className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium relative group"
                        >
                            Projects
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-600 group-hover:w-full transition-all duration-300"></span>
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200 hover:-translate-y-0.5"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-gray-300 hover:text-purple-400 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in-mobile">
                        <a
                            href="#about"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-gray-300 hover:text-purple-400 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/5"
                        >
                            About
                        </a>
                        <a
                            href="#experience"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-gray-300 hover:text-purple-400 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/5"
                        >
                            Experience
                        </a>
                        <a
                            href="#projects"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-gray-300 hover:text-purple-400 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-white/5"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-center px-6 py-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200"
                        >
                            Contact
                        </a>
                    </div>
                )}
            </div>

            <style>{`
                @keyframes fade-in-mobile {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-mobile {
                    animation: fade-in-mobile 0.2s ease-out;
                }
            `}</style>
        </nav>
    );
}
