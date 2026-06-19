import React from "react";
import profileImage from "../assets/roch1.png";

export default function Hero() {
    // Replace this URL with your actual image URL or path
    return (
        <header id="home" className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-center">
                {/* Left Content */}
                <div className="md:col-span-2 space-y-6">
                    {/* Greeting badge */}
                    <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 text-purple-300 text-sm">
                        <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                        Available for opportunities
                    </div>

                    {/* Name */}
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Roch Danistan
                        <br />
                        <span className="bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent">
                            Antonyrasan
                        </span>
                    </h1>

                    {/* Title */}
                    <p className="text-2xl md:text-3xl font-semibold text-purple-400">
                        Senior Software Engineer (Full Stack)
                    </p>

                    {/* Description */}
                    <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                        Senior Software Engineer with experience building enterprise web applications in healthcare and supply-chain domains. Strong in Java/Spring Boot, React/Angular, AWS, and scalable architectures.
                    </p>

                    {/* Tech highlights */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {["Java", "Spring Boot", "React", "Angular", "AWS"].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-gray-400 text-sm hover:border-purple-500/30 transition-colors"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#contact"
                            className="group relative px-8 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                        >
                            <span className="relative z-10">Contact Me</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </a>

                        <a
                            href="https://linkedin.com/in/roch-danistan"
                            target="_blank"
                            rel="noreferrer"
                            className="group px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 font-semibold rounded-lg hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="https://github.com/rochdanistan"
                            target="_blank"
                            rel="noreferrer"
                            className="group px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 font-semibold rounded-lg hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            GitHub
                        </a>

                        <a
                            href="/cv.pdf"
                            download
                            className="group px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 font-semibold rounded-lg hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
                        >
                            <span>Download CV</span>
                            <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Right: Profile Image */}
                <div className="hidden md:flex justify-center lg:justify-end">
                    <div className="relative group">
                        {/* Gradient ring */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>

                        {/* Image container */}
                        <div className="relative">
                            <img
                                src={profileImage}
                                alt="Roch Danistan"
                                className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-full object-cover object-top border-4 border-slate-900 shadow-2xl"
                            />

                            {/* Decorative elements */}
                            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </header>
    );
}
