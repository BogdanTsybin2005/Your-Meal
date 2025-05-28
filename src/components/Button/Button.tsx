import React from "react"
import './Button.scss';



type ButtonDataType = {
    children: string;
    onClick: () => void;
    className: 'main-card-button' | 'main-order-button'
}

const Button: React.FC<ButtonDataType> = ({children, onClick, className}) => {
    return <button 
        onClick={onClick}
        className={className}
    >{children}</button>
}

export default Button;
