import React from 'react'
import {Link} from 'react-router-dom';
import './Button.css';


    const STYLES = ['primary--btn' , 'outline--btn'];
    const SIZES = ['medium-btn', 'large--btn'];

    export const Button =({
        children,
        type,
        onClick,
        buttonStyle,
        buttonSize
    }) => {
        const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES [0];

        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize: SIZES [0];

    return (      
    <Link to='/watchMe' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
    )
};
export default Button
