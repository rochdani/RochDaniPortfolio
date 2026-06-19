import React from 'react';

const ExperienceCard = ({ role, company, duration, description, tags, isCurrent }) => {
    return (
        <div id="experience" className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-400 hover:-translate-y-2 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
            {/* Top gradient border on hover */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-violet-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />

            <div className="flex justify-between items-start gap-5 mb-6">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
                        {role}
                        {isCurrent && (
                            <span className="inline-flex items-center gap-2 ml-3 bg-green-500/15 text-green-400 px-3 py-1 rounded-xl text-sm border border-green-500/30">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                Current
                            </span>
                        )}
                    </h2>
                    <div className="text-purple-400 text-lg font-medium">{company}</div>
                </div>
                <div className="bg-purple-500/15 px-4 py-2 rounded-full text-sm text-purple-300 border border-purple-500/30 whitespace-nowrap">
                    {duration}
                </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-base mb-6">
                {description}
            </p>

            <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-violet-500/15 text-violet-300 px-3 py-1.5 rounded-lg text-sm border border-violet-500/30 transition-all duration-300 hover:bg-violet-500/25 hover:-translate-y-0.5"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

const ProfessionalExperience = () => {
    const experiences = [
        {
            role: "Senior Software Engineer",
            company: "EV Technologies (Deputed at Sysco Labs)",
            duration: "Nov 2024 - Present",
            description:
                "Working on enterprise-scale inventory lifecycle management solutions, focusing on aged and obsolete inventory. Collaborating with stakeholders to gather requirements, design system architecture, and deliver scalable React-based UIs and Spring Boot APIs deployed on AWS.",
            tags: [
                "React",
                "Spring Boot",
                "AWS",
                "Inventory Management",
                "System Design",
                "Enterprise Applications"
            ],
            isCurrent: true
        },
        {
            role: "Software Engineer",
            company: "Cloud Solutions International (Pvt) Ltd",
            duration: "Dec 2021 - Nov 2024",
            description:
                "Contributed to the VIDA smart healthcare platform by developing full-stack features using Spring Boot, Angular, and PostgreSQL. Worked with microservices architecture, integrated Kafka and Redis, and supported production deployments in an Agile environment.",
            tags: [
                "Spring Boot",
                "Angular",
                "PostgreSQL",
                "Microservices",
                "Kafka",
                "Redis",
                "Healthcare Systems"
            ],
            isCurrent: false
        },
        {
            role: "Software Engineer Intern",
            company: "Digiratina Technology Solutions",
            duration: "Nov 2020 - May 2021",
            description:
                "Developed backend APIs and frontend modules for internal systems using Spring Boot and Angular. Gained hands-on experience in full-stack development, database design, and cloud-based application workflows.",
            tags: [
                "Spring Boot",
                "Angular",
                "PostgreSQL",
                "REST APIs",
                "Full-Stack Development"
            ],
            isCurrent: false
        },
        {
            role: "Software Engineer",
            company: "Digiratina Technology Solutions",
            duration: "Feb 2021 - Oct 2021",
            description: "Developed robust database structures and backend services for Dialog workflow projects. Implemented Camunda workflows and ensured API reliability and documentation.",
            tags: ["Backend", "Database Design", "Workflow", "API"],
            isCurrent: false
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100 py-16 px-5">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-purple-500 to-violet-600 bg-clip-text text-transparent">
                        Professional Journey
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Building innovative solutions through technology and leadership
                    </p>
                </div>

                {/* Experience Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfessionalExperience;
