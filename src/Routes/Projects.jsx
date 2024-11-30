import React from "react";
import { Link } from "react-router-dom";

function Projects() {
    const projects = [
        {
            title: "Tour and Travel Website",
            description: "A frontend travel website built with React, JavaScript, CSS, and HTML, showcasing dynamic travel content.",
            techStack: ["React", "JavaScript", "CSS", "HTML"],
            link: "#", // Add actual link to project if available
        },
        {
            title: "Netflix Frontpage Clone",
            description: "A replica of the Netflix frontpage created using pure HTML and CSS, styled for accuracy and responsiveness.",
            techStack: ["HTML", "CSS"],
            link: "#", // Add actual link to project if available
        },
        {
            title: "Amazon Landing Page Clone",
            description: "An Amazon landing page clone, demonstrating layout and styling skills with",
            techStack: ["HTML", "CSS"],
            link: "#", // Add actual link to project if available

        },
        {
            title: "Fast Food E-Commerce Website",
            description: "A full-stack e-commerce website for fast food with user authentication, cart functionality, and interactive UI.",
            techStack: ["MERN Stack", "Bootstrap", "React hooks", "Express", "OAuth", "JWT"],
            link: "#", // Add actual link to project if available
        },
    ];

    return (
        <section id="projects" className="py-12 bg-gray-900 text-gray-200">
            <div className="absolute top-2 left-4">
                {/* Back to Home Button */}
                <Link
                    to="/"
                    className="bg-indigo-700 text-white p-2 rounded-lg shadow-lg hover:bg-indigo-500 transition-all duration-300 flex items-center space-x-2"
                >
                    <i className="fas fa-arrow-left"></i>
                </Link>
            </div>
            <h2 className="text-3xl font-bold text-center text-indigo-500 mb-8">Projects</h2>
            <div className="container mx-auto grid grid-cols-1 w-[90%] md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 text-gray-300 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        <h3 className="text-2xl font-semibold text-indigo-400 mb-4">
                            {project.title}
                            <hr className="mt-2 border-indigo-500" />
                        </h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        <div className="mb-4">
                            <strong className="text-indigo-500">Tech Stack:</strong>
                            <ul className="list-disc list-inside ml-4 text-gray-400">
                                {project.techStack.map((tech, i) => (
                                    <li key={i}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-500 font-medium hover:text-indigo-300 transition-colors duration-200"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;

    