import React from 'react'
import { Link } from 'react-router-dom';
import './Link.css'

const CustomLink = ({  variant, children, link }) => {
    
        let buttonClass = ""
        variant === "outline" ? buttonClass = "link-outline" : buttonClass = "link-borderless"
      return (
        <Link className={`custom-link ${buttonClass}`}  to={link}>
          {children}
        </Link>
      )
}

export default CustomLink
