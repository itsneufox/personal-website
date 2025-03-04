import React from "react";
import Job from "../components/Job";
import jobsPT from "../data/jobs.json";
import jobsEN from "../data/jobs.en.json";
import { useLanguage } from "../context/LanguageContext";

const JobsContainer = () => {
  const { language } = useLanguage();
  
  const jobs = language === 'pt' ? jobsPT : jobsEN;
  
  const listStyle: React.CSSProperties = {
    listStyleType: "circle",
  };
  
  const jobsList = jobs.map((job, index) => (
    <Job {...job} key={"job-item-" + index} />
  ));
  
  return <ul style={listStyle}>{jobsList}</ul>;
};

export default JobsContainer;