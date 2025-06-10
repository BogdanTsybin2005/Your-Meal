import React, { memo } from 'react';
import './Button.scss';



type ButtonDataType = {
    children: string;
    onClick: () => void;
    className: 'main-card-button' | 'main-order-button';
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonDataType> = ({children, onClick, className, type = 'button'}) => {
    return <button
        type={type}
        onClick={onClick}
        className={className}
    >{children}</button>
}

export default memo(Button);
