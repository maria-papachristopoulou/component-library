import React from "react";
import './Button.css';

export interface ButtonProps {
    label: string;
    test: string;
}

const Button = (props: ButtonProps) => {
    return <div className="test">
        <button>{props.label}</button>
        <button>{props.test}</button>
    </div>;
};

export default Button;