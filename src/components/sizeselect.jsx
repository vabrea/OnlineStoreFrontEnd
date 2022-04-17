import React from "react";
import "./sizeselect.css";


const SizeSelect = (props) => {
    let [size, setSize] = React.useState(8.5);

    const handleIncrease = () => {
        let maxSize = size + 0.5;
        if(maxSize < 13.0 ) {
        setSize(size + 0.5);
        props.onChange(maxSize);
    };
};

    const handleDecrease = () => {
        let nextSize = size - 0.5;
        if(nextSize >8.0 ) {
        setSize(size - 0.5);
        props.onChange(nextSize);
    };
};

    return(
        <div className="sizes">
            <button onClick = {handleDecrease} className="btn-warning">-</button>
            <label>{size}</label>
            <button onClick = {handleIncrease} className="btn-warning">+</button>
        </div>
    );
};

export default SizeSelect;