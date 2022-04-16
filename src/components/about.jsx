import React from "react";
import "./about.css";

const About = () => {
    const [name, setName] = React.useState("");

    const handleShowName = () => {
        setName("Von Abrea");
    }

    return (
        <div className="about">
            <h3>About Me</h3>
            <br></br>
            <h4>{name}</h4>
            

            <button onClick = {handleShowName}>Click Me!</button>
        </div>
    );

};

export default About;