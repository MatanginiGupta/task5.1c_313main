import React from "react";
import Title from "./Title";
import Problem from "./Problem";

function Question() {
  const containerStyle = {
    display: "block",
    flexDirection: "rows",
    alignItems: "left",
  };

  const headingStyle = {
    display: "block",
    marginBottom: "2px", // Adjust the spacing between the heading and textbox
  };

  return (
    <div style={containerStyle}>
      <Title
        heading="Title: "
        placeholder="Start your question with how, what, why, etc"
        style={headingStyle}
      />
      <Problem
        heading="Describe your problem: "
        rows="15"
        style={headingStyle}
      />
      <Title
        heading="Tags: "
        placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
        style={headingStyle}
      />
    </div>
  );
}

export default Question;
