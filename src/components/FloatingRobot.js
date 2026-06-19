import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import robotImage from "../assets/robot.png";

const sectionData = {
    home: {
        x: "76vw",
        y: "10vh",
        scale: 1,
        message: "Hi, I'm Roch's AI guide 👋",
    },
    about: {
        x: "76vw",
        y: "42vh",
        scale: 0.75,
        message: "Here's a quick intro about Roch.",
    },
    experience: {
        x: "6vw",
        y: "38vh",
        scale: 0.7,
        message: "Let's explore his professional journey.",
    },
    projects: {
        x: "76vw",
        y: "40vh",
        scale: 0.7,
        message: "These are his key projects.",
    },
    skills: {
        x: "7vw",
        y: "38vh",
        scale: 0.7,
        message: "Here are his technical skills.",
    },
    contact: {
        x: "74vw",
        y: "38vh",
        scale: 0.75,
        message: "Want to work together?",
    },
};

export default function FloatingRobot() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = [
            "home",
            "about",
            "experience",
            "projects",
            "skills",
            "contact",
        ];


        const handleScroll = () => {
            let currentSection = "home";

            sections.forEach((id) => {
                const element = document.getElementById(id);

                if (
                    element &&
                    window.scrollY >= element.offsetTop - 250
                ) {
                    currentSection = id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };


    }, []);

    const currentData =
        sectionData[activeSection] || sectionData.home;

    return (
        <motion.div
            className="fixed z-40 hidden lg:block pointer-events-none"
            animate={{
                x: currentData.x,
                y: currentData.y,
                scale: currentData.scale,
            }}
            transition={{
                type: "spring",
                stiffness: 70,
                damping: 18,
            }}
        >
            <motion.div
                className="relative"
                animate={{
                    y: [0, -12, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            > <div className="absolute -inset-8 rounded-full bg-purple-500/20 blur-3xl" />

                <img
                    src={robotImage}
                    alt="AI Guide Robot"
                    className="relative w-52 drop-shadow-[0_0_35px_rgba(168,85,247,0.45)]"
                />

                <motion.div
                    key={activeSection}
                    initial={{
                        opacity: 0,
                        y: 10,
                        scale: 0.95,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.35,
                    }}
                    className="absolute -top-10 left-1/2 w-56 -translate-x-1/2 rounded-2xl border border-purple-500/30 bg-slate-950/90 px-4 py-3 text-center text-sm text-purple-100 shadow-xl shadow-purple-500/20 backdrop-blur-md"
                >
                    {currentData.message}
                </motion.div>
            </motion.div>
        </motion.div>

    );
}