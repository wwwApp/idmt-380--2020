import React from "react";

const SectionHeader = (props) => {
  return (
    <div className="section-header">
      <h2>{props.title}</h2>
      <i>{props.desc}</i>
    </div>
  );
};

export default SectionHeader;
