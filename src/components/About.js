// import React from "react";

// export default function About() {
//     const features = [
//         {
//             title: "Design",
//             icon: (
//                 <svg
//                     className="w-6 h-6"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                 >
//                     <path d="M4 7h16" />
//                     <path d="M4 12h10" />
//                     <path d="M4 17h16" />
//                 </svg>
//             ),
//             desc: "Translate business requirements into clean UI/UX and system designs that are easy to maintain and scale.",
//         },
//         {
//             title: "Develop",
//             icon: (
//                 <svg
//                     className="w-6 h-6"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                 >
//                     <path d="M16 18l6-6-6-6" />
//                     <path d="M8 6l-6 6 6 6" />
//                 </svg>
//             ),
//             desc: "Build production-ready applications using React/Angular and Spring Boot with solid API design and testing practices.",
//         },
//         {
//             title: "Maintain",
//             icon: (
//                 <svg
//                     className="w-6 h-6"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                 >
//                     <path d="M12 1v22" />
//                     <path d="M5 5l14 14" />
//                     <path d="M19 5L5 19" />
//                 </svg>
//             ),
//             desc: "Ensure reliability with CI/CD mindset, unit testing, and monitoring—keeping systems stable as they grow.",
//         },
//     ];

//     return (
//         <section id="about" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
//             <div className="max-w-6xl mx-auto px-6 lg:px-12">
//                 {/* Section Title */}
//                 <div className="text-center mb-16">
//                     <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent mb-3">
//                         About Me
//                     </h2>
//                     <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full"></div>
//                 </div>

//                 {/* Content */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
//                     {/* Left: Summary */}
//                     <div className="space-y-6">
//                         <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
//                             Senior Software Engineer
//                         </h3>

//                         <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
//                             <p className="relative pl-6 border-l-2 border-purple-500/50">
//                                 I am a Senior Software Engineer focused on building reliable, scalable web products.
//                                 I have delivered solutions in healthcare and supply-chain inventory management, working
//                                 across microservice and monolithic architectures.
//                             </p>
//                             <p className="relative pl-6 border-l-2 border-violet-500/50">
//                                 I enjoy collaborating with stakeholders, translating business needs into clean system
//                                 designs, and shipping high-quality code with strong testing practices.
//                             </p>
//                         </div>

//                         {/* Stats or highlights */}
//                         <div className="grid grid-cols-3 gap-4 pt-6">
//                             <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
//                                 <div className="text-3xl font-bold text-purple-400">4+</div>
//                                 <div className="text-sm text-gray-400 mt-1">Years Exp</div>
//                             </div>
//                             <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
//                                 <div className="text-3xl font-bold text-violet-400">20+</div>
//                                 <div className="text-sm text-gray-400 mt-1">Projects</div>
//                             </div>
//                             <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
//                                 <div className="text-3xl font-bold text-purple-400">10+</div>
//                                 <div className="text-sm text-gray-400 mt-1">Tech Stack</div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right: Feature cards */}
//                     <div className="space-y-5">
//                         {features.map((f, index) => (
//                             <div
//                                 key={f.title}
//                                 className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
//                             >
//                                 {/* Gradient line on hover */}
//                                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-violet-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

//                                 <div className="flex items-start gap-4">
//                                     <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300">
//                                         {f.icon}
//                                     </div>

//                                     <div className="flex-1">
//                                         <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
//                                             {f.title}
//                                         </h4>
//                                         <p className="text-gray-300 leading-relaxed">{f.desc}</p>
//                                     </div>
//                                 </div>

//                                 {/* Number badge */}
//                                 <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-sm font-bold">
//                                     {index + 1}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

import React from "react";

export default function About() {
    const features = [
        {
            title: "4+ Years of Professional Experience",
        },
        {
            title: "Proven Track Record in Tech Leadership",
        },
        {
            title: "Full-Stack Expertise",
        },
        {
            title: "Problem-Solving Mindset",
        },
        // {
        //     title: "Commitment to Quality & Best Practices",
        // },
    ];

    return (
        <section id="about" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            <div className="max-w-6xl mx-auto px-6 lg:px-12">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent mb-3">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full"></div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left: Summary */}
                    <div className="space-y-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Senior Software Engineer
                        </h3>

                        <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
                            <p className="relative pl-6 border-l-2 border-purple-500/50">
                                Senior Software Engineer with 4+ years of experience designing and building enterprise software products. I've delivered solutions in healthcare and supply-chain domains, working across microservice and monolithic architectures.
                            </p>
                            <p className="relative pl-6 border-l-2 border-violet-500/50">
                                I specialize in translating business requirements into scalable technical solutions, engaging directly with stakeholders, and leading development teams to deliver high-quality products on time.
                            </p>
                        </div>

                        {/* Stats or highlights */}
                        <div className="grid grid-cols-3 gap-4 pt-6">
                            <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                                <div className="text-3xl font-bold text-purple-400">4+</div>
                                <div className="text-sm text-gray-400 mt-1">Years Exp</div>
                            </div>
                            <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                                <div className="text-3xl font-bold text-violet-400">20+</div>
                                <div className="text-sm text-gray-400 mt-1">Projects</div>
                            </div>
                            <div className="text-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                                <div className="text-3xl font-bold text-purple-400">10+</div>
                                <div className="text-sm text-gray-400 mt-1">Tech Stack</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Why Work With Me */}
                    <div className="space-y-5">
                        <h3 className="text-2xl font-bold text-white mb-6">Why Work With Me</h3>
                        {features.map((f, index) => (
                            <div
                                key={f.title}
                                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-lg hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                            >
                                {/* Gradient line on hover */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-violet-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300">
                                        {f.icon}
                                    </div>

                                    <div className="flex-1">
                                        <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                            {f.title}
                                        </h4>
                                        <p className="text-gray-300 leading-relaxed">{f.desc}</p>
                                    </div>
                                </div>

                                {/* Number badge */}
                                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-sm font-bold">
                                    {index + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}