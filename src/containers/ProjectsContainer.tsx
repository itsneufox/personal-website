import React from "react";
import Project from "../components/Project";
import projectsPT from "../data/projects.json";
import projectsEN from "../data/projects.en.json";
import { useLanguage } from "../context/LanguageContext";

const ProjectsContainer = () => {
  const { language } = useLanguage();
  
  const projects = language === 'pt' ? projectsPT : projectsEN;
  
  const listStyle: React.CSSProperties = {
    listStyleType: "circle",
  };
  
  const projectsList = projects.map((project, index) => (
    <Project {...project} key={"project-item-" + index} />
  ));
  
  return <ul style={listStyle}>{projectsList}</ul>;
};

export default ProjectsContainer;