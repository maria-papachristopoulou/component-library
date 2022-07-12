import React from "react";

export interface ButtonProps {
    test: string;
}

const Button = (props: ButtonProps) => {
    return (<><button>{props.test}</button></>);
};

export default Button;