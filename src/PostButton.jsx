import React from "react";

const containerStyle = {
  display: "flex",
  justifyContent: "flex-end",
  paddingRight: "225px",
  marginTop: "20px",
};

const buttonStyle = {
  width: "150px", // Adjust the button width as needed
  padding: "10px 20px", // Adjust the padding to increase the button size
  fontWeight: "bold", // Make the text bold
};

function PostButton() {
  return (
    <div style={containerStyle}>
      <a href="/post" style={{ width: "12%" }}>
        <button style={buttonStyle}>Post</button>
      </a>
    </div>
  );
}

export default PostButton;
