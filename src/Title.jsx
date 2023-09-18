import React from "react";

const style = {
    width:"70%"
}

function Title(props){
    return(
        <div className="Center">
            <p><b>{props.heading}</b></p>
            <input
            type="text"
            placeholder={props.placeholder}
            style={style}
            >
            </input>
        </div>
    )
}

export default Title;