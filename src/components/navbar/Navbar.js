import React from 'react'
import './Navbar.css'

const Navbar = ({isScrolling}) => {

    //cuando se hace click en el logo
    const toTheTop=()=>{
        window.scrollTo({top: 0, left:0, behavior: "smooth"})
    }

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null} `}>
        <div className='navbar-logo' onClick={toTheTop}>Gerar.!</div>
    </nav >
  )
}

export default Navbar