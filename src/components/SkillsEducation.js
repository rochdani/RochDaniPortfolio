// import React from "react";

// export default function SkillsEducation() {
//     const skills = ["JavaScript", "React", "Node.js", "Tailwind CSS"];

//     return (
//         <section className="py-16">
//             <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
//                 {/* Skills */}
//                 <div>
//                     <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-primary pl-4">
//                         Technical Skills
//                     </h2>

//                     <div className="flex flex-wrap gap-2">
//                         {skills.map((skill) => (
//                             <span
//                                 key={skill}
//                                 className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm font-medium"
//                             >
//                                 {skill}
//                             </span>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Education */}
//                 <div>
//                     <h2 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-primary pl-4">
//                         Education
//                     </h2>

//                     <div className="mb-4">
//                         <h3 className="font-bold text-gray-800">BS Computer Science</h3>
//                         <div className="text-gray-600 text-sm">University of Technology</div>
//                         <div className="text-gray-500 text-xs mt-1">2016 - 2020</div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

import React from "react";

export default function SkillsEducation() {
    const skillCategories = [
        {
            title: "AI & Machine Learning",
            skills: ["LLM", "RAG", "MCP", "AI Integration", "Prompt Engineering", "Vector Databases"],
            isFeatured: true
        },
        {
            title: "Backend",
            skills: ["Java", "Spring Boot", "PostgreSQL", "MySQL", "Apache Kafka", "Redis"]
        },
        {
            title: "Frontend",
            skills: ["JavaScript", "React", "Angular", "HTML", "Bootstrap", "Tailwind CSS"]
        },
        {
            title: "Cloud & DevOps",
            skills: ["AWS", "AWS Fargate", "AWS Lambda", "Docker", "Jenkins"]
        },
        {
            title: "Other",
            skills: ["Microservices", "RESTful APIs", "Agile", "JUnit", "Jest", "PHP"]
        }
    ];

    const education = [
        {
            degree: "Master of Science in Computer Science",
            institution: "University of Moratuwa",
            location: "Sri Lanka",
            period: "Expected January 2027",
            specialization: "Software Architecture",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
            )
        },
        {
            degree: "B.Sc. (Special) in Computer Science and Technology",
            institution: "Uva Wellassa University",
            location: "Badulla, Sri Lanka",
            period: "Graduated September 2021",
            specialization: null,
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
            )
        }
    ];

    const certifications = [
        "AWS Academy Microservices and CI/CD Pipeline Builder",
        "AWS Academy Data Engineering"
    ];

    return (
        <section id="skills" className="py-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 -right-40 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-6xl mx-auto px-6">
                {/* Skills Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent mb-3">
                            Technical Skills
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skillCategories.map((category, index) => (
                            <div
                                key={index}
                                className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 ${category.isFeatured
                                        ? "border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-violet-600/10 md:col-span-2 hover:border-purple-500/70 shadow-lg shadow-purple-500/20"
                                        : "border-white/10 hover:border-purple-500/30"
                                    }`}
                            >
                                <h3 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                                    {category.isFeatured && (
                                        <span className="px-2 py-0.5 bg-purple-500/20 border border-purple-500/40 rounded text-xs text-purple-300">
                                            Currently Learning
                                        </span>
                                    )}
                                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className={`px-3 py-1.5 border rounded-lg text-sm font-medium transition-all duration-200 ${category.isFeatured
                                                    ? "bg-purple-500/10 border-purple-500/40 text-purple-300 hover:bg-purple-500/20 hover:border-purple-500/60 hover:scale-105"
                                                    : "bg-white/5 border-white/10 text-gray-300 hover:border-purple-500/30 hover:text-purple-300 hover:scale-105"
                                                }`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education Section */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent mb-3">
                            Education
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
                            >
                                <div className="flex gap-6">
                                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-violet-600/20 border border-purple-500/30 rounded-xl flex items-center justify-center text-purple-400 flex-shrink-0">
                                        {edu.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                                        <p className="text-purple-400 font-medium mb-1">{edu.institution}</p>
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-2">
                                            <span className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                {edu.location}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {edu.period}
                                            </span>
                                        </div>
                                        {edu.specialization && (
                                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-300 text-sm">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Specialization: {edu.specialization}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent mb-3">
                            Certifications
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 flex items-start gap-4"
                            >
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-violet-600/20 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-400 flex-shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-gray-300 font-medium">{cert}</p>
                                    <p className="text-sm text-gray-500 mt-1">AWS Academy Graduate</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
