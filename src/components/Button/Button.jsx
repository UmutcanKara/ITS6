import React from 'react'
import './Button.css'

const Button = ({ variant, children, onClick, type='button' }) => {
  const clickHandler = (e) => {
    e.preventDefault();
    console.log("Button clicked");
    onClick();
  }
    let buttonClass = ""
    variant === "outline" ? buttonClass = "btn-outline" : buttonClass = "btn-borderless"
  return (
    <button className={`custom-btn ${buttonClass}`} onClick={clickHandler} type={type} >
      {children}
    </button>
  )
}

export default Button
