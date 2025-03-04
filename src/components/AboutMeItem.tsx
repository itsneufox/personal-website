import React from "react";

interface IAboutMeItemProps {
  description: string;
}

const AboutMeItem = (props: IAboutMeItemProps) => {
  return (
    <li style={listItemStyle}>
      <span style={descriptionStyle}>{props.description}</span>
    </li>
  );
};

const listItemStyle: React.CSSProperties = {
  width: "100%",
  marginBottom: "15px",
  display: "list-item",
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

export default AboutMeItem;