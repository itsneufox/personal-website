import React from "react";
import Education from "../components/Education";
import educationsPT from "../data/educations.json";
import educationsEN from "../data/educations.en.json";
import { useLanguage } from "../context/LanguageContext";

const EducationContainer = () => {
  const { language } = useLanguage();
  
  const educations = language === 'pt' ? educationsPT : educationsEN;
  
  const listStyle: React.CSSProperties = {
    listStyleType: "circle",
  };
  
  const educationsList = educations.map((education, index) => (
    <Education {...education} key={"education-item-" + index} />
  ));
  
  return <ul style={listStyle}>{educationsList}</ul>;
};

export default EducationContainer;