import React, { MouseEventHandler } from "react";

interface Props {
    type?: 'button' | 'submit',
    className?: string,
    children?: React.ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = ({
    type,
    className,
    children,
    onClick
}: Props) => {

    return (
        <button
            type={type}
            onClick={onClick}
            className={`p-3 rounded-lg hover:brightness-95 transition duration-200 ${className}`}>
            {children}
        </button>
    );
}

export default Button;