import React from "react";
import Skill from "../components/Skill";
import skillsPT from "../data/skills.json";
import skillsEN from "../data/skills.en.json";
import { useLanguage } from "../context/LanguageContext";

const SkillsContainer = () => {
  const { language } = useLanguage();
  
  const skills = language === 'pt' ? skillsPT : skillsEN;
  
  const listStyle: React.CSSProperties = {
    listStyleType: "circle",
  };
  
  const skillsList = skills.map((skill, index) => (
    <Skill {...skill} key={"skill-item-" + index} />
  ));
  
  return <ul style={listStyle}>{skillsList}</ul>;
};

export default SkillsContainer;