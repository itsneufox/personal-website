import React from "react";
import { v4 as UUIDv4 } from "uuid";
import { useLanguage } from "../context/LanguageContext";
import introductionPT from "../data/introduction.json";
import introductionEN from "../data/introduction.en.json";

const IntroductionContainer = () => {
  const { language } = useLanguage();
  
  const introduction = language === 'pt' ? introductionPT : introductionEN;

  const descriptionList = introduction.descriptions.map((item) => (
    <li key={UUIDv4()}>{item}</li>
  ));

  return <ul style={descriptionStyle}>{descriptionList}</ul>;
};

const descriptionStyle: React.CSSProperties = {
  listStyleType: "disc",
  color: "#444444",
  paddingTop: "4px",
  paddingRight: "0px",
  paddingBottom: "4px",
  fontWeight: "lighter",
  fontSize: "0.9em",
};

export default IntroductionContainer;
