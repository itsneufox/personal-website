import React from "react";
import AboutMeItem from "../components/AboutMeItem";
import aboutmelistPT from "../data/aboutme.json";
import aboutmelistEN from "../data/aboutme.en.json";
import { useLanguage } from "../context/LanguageContext";

const AboutMeContainer = () => {
  const { language } = useLanguage();
  
  const aboutmelist = language === 'pt' ? aboutmelistPT : aboutmelistEN;
  
  const listStyle: React.CSSProperties = {
    listStyleType: "circle",
  };
  
  const othersList = aboutmelist.map((entry, index) => (
    <AboutMeItem {...entry} key={"about-me-item-" + index} />
  ));
  
  return <ul style={listStyle}>{othersList}</ul>;
};

export default AboutMeContainer;