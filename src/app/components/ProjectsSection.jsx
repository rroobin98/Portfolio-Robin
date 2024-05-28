"use client";

import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import ImageModal from "./ImageModal"; // Import the ImageModal component
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Portfolio",
    description: "Next.js",
    image: "/images/projects/port.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rroobin98/bank-mysql-jwt/tree/master",
    previewUrl: "/images/projects/port.png",
  },
  {
    id: 2,
    title: "Banking Register",
    description: "JWT / Backend",
    image: "/images/projects/jwt.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rroobin98/bank-mysql-jwt/tree/master",
    previewUrl: "/images/projects/jwt.png",
  },
  {
    id: 3,
    title: "Quizz",
    description: "Redux",
    image: "/images/projects/quiz.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/rroobin98/Quiz_Redux/tree/master",
    previewUrl: "/images/projects/quiz.png",
  },
  {
    id: 4,
    title: "Sport Shooting Application",
    description: "Linespotting / React Native",
    image: "/images/projects/fast.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/rroobin98/click_training",
    previewUrl: "/images/projects/fast.png",
  },
  {
    id: 5,
    title: "RebelRunway",
    description: "Clothing Store Prototype",
    image: "/images/projects/grupp.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ChasAcademy-Linnea-Svensson/RebelRunway",
    previewUrl: "/images/projects/grupp.png",
  },
  {
    id: 6,
    title: "LIA",
    description: "AD Growth",
    image: "/images/projects/LIA.png",
    tag: ["All", "Web"],
    gitUrl: "https://adgrowth.se/",
    previewUrl: "/images/projects/LIA.png",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const handlePreviewClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              onPreviewClick={handlePreviewClick}
            />
          </motion.li>
        ))}
      </ul>
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        imageUrl={selectedImage}
      />
    </section>
  );
};

export default ProjectsSection;
