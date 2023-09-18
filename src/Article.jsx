import React from "react";
import Title from "./Title";
import Problem from "./Problem";

// Define a common style for the gray background
const grayBackgroundStyle = {
  backgroundColor: "white", 
};

function ColoredText(props) {
  const style = {
    backgroundColor: "white", // White background color
    padding: "5px", 
    marginLeft: "-985px", 
    marginRight: "1px",
    fontWeight: "bold", // Make the text bold
  };

  return <span style={style}>{props.text}</span>;
}

function Article() {
  const inputStyle = {
    backgroundColor: "white", // White background color
    padding: "2px", // Optional: Add padding for spacing
    marginLeft: "-950px", // Shift the text to the left
    marginRight: "10px",
    marginBottom: "5px", // Add vertical margin for spacing
  };

  return (
    <div>
      <div style={grayBackgroundStyle}>
        <ColoredText text="Title:" />
        <Title
          placeholder="Enter a descriptive title"
          rows="10"
          style={inputStyle}
        />
        <br/>
      </div>
      <div style={grayBackgroundStyle}>
        <ColoredText text=" Abstract:" />
        <Problem
          placeholder="Enter a 1-paragraph abstract"
          rows="10"
          style={inputStyle}
        />
      </div>
      <br/>
      <div style={grayBackgroundStyle}>
        <ColoredText text=" Article Text:" />
        <Problem
          placeholder="Enter a 3-paragraph article text"
          rows="15"
          style={inputStyle}
        />
      </div>
      <br/>
      <br/>
      <div style={grayBackgroundStyle}>
        <ColoredText text="Tags" />
        <Title
          placeholder="Please add up to 3 tags to describe what your article is about e.g., Java"
          rows="20"
          style={inputStyle}
        />
      </div>
    </div>
  );
}

export default Article;