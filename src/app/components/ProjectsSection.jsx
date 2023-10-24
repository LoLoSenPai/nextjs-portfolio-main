"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ogre Hunt",
    description: "Project 1 description",
    image: "/images/projects/44.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/LoLoSenPai/ogronex-solana",
    previewUrl: "https://soldao.ogronex.com/",
  },
  {
    id: 2,
    title: "NFT Launchpad",
    description: "Project 2 description",
    image: "/images/projects/33.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/LoLoSenPai/launchpad-ogronex",
    previewUrl: "https://launchpad.dalmatians.ogronex.com/",
  },
  {
    id: 3,
    title: "NFT Raffles Platform",
    description: "Project 3 description",
    image: "/images/projects/22.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/LoLoSenPai/ogronex-raffle",
    previewUrl: "https://raffle.ogronex.com/",
  },
  {
    id: 4,
    title: "Multifunctional Discord Bot",
    description: "Project 4 description",
    image: "/images/projects/5.png",
    tag: ["All", "Bots"],
    gitUrl: "https://github.com/LoLoSenPai/Discord-Bot-BigTime",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "NFT Rarity Checker",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Bots"],
    gitUrl: "https://github.com/LoLoSenPai/Bot-Discord-Sol",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Ogronex Website",
    description: "Project 5 description",
    image: "/images/projects/11.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/LoLoSenPai/MAIN_WEBSITE_OGRONEX",
    previewUrl: "https://www.ogronex.com/",
  },
  {
    id: 7,
    title: "Oryon Merch",
    description: "Project 5 description",
    image: "/images/projects/55.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/LoLoSenPai/oryon-master",
    previewUrl: "https://oryon-merch.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
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
          name="Bots"
          isSelected={tag === "Bots"}
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
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
