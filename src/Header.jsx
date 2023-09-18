import React from "react";


function Header(props){
    return(
        <div className="Header">
            <h3>{props.title}</h3>
        </div>
    )
}

export default Header;