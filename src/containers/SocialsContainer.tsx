import React from "react";
import Social from "../components/Social";
import socialsPT from "../data/socials.json";
import socialsEN from "../data/socials.en.json";
import { useLanguage } from "../context/LanguageContext";

const SocialsContainer = () => {
  const { language } = useLanguage();
  
  const socials = language === 'pt' ? socialsPT : socialsEN;
  
  const socialsList = socials.map((social, index) => (
    <span style={itemContainerStyle} key={"social-link-" + index}>
      <Social {...social} />
    </span>
  ));
  
  return <>{socialsList}</>;
};

const itemContainerStyle: React.CSSProperties = {
  marginRight: "1rem",
  display: "inline-block !important",
};

export default SocialsContainer;