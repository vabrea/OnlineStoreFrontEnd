import React from "react";
import "./about.css";

const About = () => {
    const [name, setName] = React.useState("");

    const handleShowName = () => {
        setName("Von Abrea");
    }

    return (
        <div className="about">
            <h5>About Me</h5>
            <h5>{name}</h5>
            <button onClick = {handleShowName}>Click Me!</button>
        </div>
    );

};

export default About;