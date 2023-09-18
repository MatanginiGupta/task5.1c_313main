import React, { useState } from "react";
import Article from './Article';
import Question from './Question';
import Header from './Header';
import PostButton from "./PostButton";

const center = {
  display: "flex",
  flexDirection: "row", 
  alignItems: "stretch", 
  marginLeft: "250px", 
}

function ConditionalForm(){

    var [question, setForm] = useState("Question")
    const handleChange = (e) =>{
        setForm(e.target.value)
    }

    const condition = () => {
        if(question === "Question") {
          return (
            <Question />
          )
        } if (question === "Article") {
          return (
            <Article />
          )
        }
    }

    // Create a style for the grey banner
    const bannerStyle = {
        backgroundColor: 'lightgray', // Grey background color
        padding: '1px', // Minimum padding
        marginBottom: '20px', // Minimum border gap
        border: "1px solid #333", // Add a border with custom width and color
        display: "flex",
        alignItems: "center", // Center vertically
        marginLeft: "15%", // Center the content horizontally
        marginRight: "14.5%", // Center the content horizontally
    };

    return (
        <div className="container">
            <form style={center}>
                <label>Select Post Type:</label>
                <input type="radio" value="Question" id="question" name="post" onChange={handleChange} checked={question ==="Question"}></input>
                <label htmlFor="question">Question</label>
                <input type="radio" value="Article" id="article" name="post" onChange={handleChange} checked={question ==="Article"}></input>
                <label htmlFor="article">Article</label>
            </form>
            
            {/* Apply the banner style directly to the wrapping div */}
            <div style={bannerStyle}>
                <Header title="What do you want to ask or share" />
            </div>
            {condition()}
            <PostButton/>
        </div>
    )
}

export default ConditionalForm;
