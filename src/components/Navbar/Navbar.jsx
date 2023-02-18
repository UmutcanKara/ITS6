import React, { useState, useEffect } from 'react'
import './Navbar.css'

const Navbar = ({ currentPath }) => {
    // Pull category names from api
    const [isAuth, setIsAuth] = useState(false);
    const [isTop, setIsTop] = useState(0);

    useEffect(() => {
        document.addEventListener('scroll', (e) => {
            setIsTop(window.scrollY)
        })

        return () => {
            document.removeEventListener('scroll', (e) => {
                setIsTop(window.scrollY)
            })
        }
    }, [window.scrollY])
    useEffect(() => {
        if(currentPath.split("/").indexOf("login") !== -1 || currentPath.split("/").indexOf("signup") !== -1 ) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    },[currentPath])

    
    const mockCategories = ["All", "IT", "Design", "Announcement"]
    const h1Text = "Blog ITS <>"
    let navClass = ""
    isTop !== 0 ? navClass = "nav-scrolled" : navClass = "";
  return (
    <nav className={navClass}>
        <h1> {h1Text} </h1>
        <ul style={isAuth ? {
            visibility: "hidden",
        }: {}} >
            {mockCategories.map((category) => {
                return <li key={category}>{category}</li>
            })}
        </ul>
    </nav>
  )
}

export default Navbar
