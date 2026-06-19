import React from "react";

export default function Projects() {
    const projects = [
        {
            title: "Item Lifecycle Management (A&O)",
            company: "Sysco Labs",
            description: "Designed and implemented a system to detect, categorize, and track aged and obsolete inventory items. Developed a calendar-based dashboard with advanced filtering (by site, vendor, item category, aging status) to enable supply chain managers to make data-driven decisions such as reallocation, markdowns, or disposal.",
            technologies: ["Spring Boot", "React", "AWS Fargate", "AWS Lambda", "PostgreSQL", "JUnit", "Jest"],
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
            featured: true
        },
        {
            title: "VIDA - Smart Healthcare Platform",
            company: "Cloud Solutions International",
            description: "VIDA is a smart health care product composed of multiple, highly viable modules essential for the provision of better healthcare service. Worked on Pharmacy module capable of managing all pharmacies in a hospital or hospital chain. Patients' medical prescriptions are reflected in the pharmacy system where issuing of medications is handled.",
            technologies: ["Spring Boot", "Angular", "PostgreSQL", "Apache Kafka", "Redis", "Microservices"],
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
            ),
            featured: true
        },
        {
            title: "Project Management System",
            company: "Digiratina Technologies",
            description: "Full-stack application for managing projects and employees of the company. Developed frontend using Angular and RESTful APIs using Spring Boot to handle project tracking, resource allocation, and employee management.",
            technologies: ["Spring Boot", "Angular", "PostgreSQL"],
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            ),
            featured: false
        },
        {
            title: "Attendance Tracking System",
            company: "Digiratina Technologies",
            description: "Backend system for tracking employee attendance and managing leave requests. Handled REST APIs using Spring Boot with comprehensive data validation and reporting features.",
            technologies: ["Spring Boot", "PostgreSQL", "REST APIs"],
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            featured: false
        },
        {
            title: "Flutter Mobile App for Online Pharmacy",
            company: "Undergraduate Project",
            description: "A mobile platform where customers can browse, order, and buy medicines online with secure payment integration and real-time order tracking.",
            technologies: ["Flutter", "Mobile Development", "API Integration"],
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            featured: false
        },
        {
            title: "Aspect-Based Sentiment Analysis",
            company: "Final Year Research",
            description: "Research project focused on aspect-based sentiment analysis of Amazon mobile phone reviews, extracting specific feature opinions and sentiment patterns.",
            technologies: ["Machine Learning", "NLP", "Python", "Data Analysis"],
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            featured: false
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 -right-40 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-6xl mx-auto px-6">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent mb-3">
                        Key Projects
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full"></div>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        A selection of projects demonstrating expertise in full-stack development, cloud solutions, and enterprise applications
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden ${project.featured ? "md:col-span-1" : ""
                                }`}
                        >
                            {/* Top gradient line on hover */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-violet-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute top-4 right-4 px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-purple-300 text-xs font-semibold">
                                    Featured
                                </div>
                            )}

                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-violet-600/20 border border-purple-500/30 rounded-xl flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                    {project.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-purple-400 font-medium">{project.company}</p>
                                </div>
                            </div>

                            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-400"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* View Details Link */}
                            <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm group-hover:gap-3 transition-all">
                                <span>View Details</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
