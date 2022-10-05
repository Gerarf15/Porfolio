import React from 'react'
import './Navbar.css'

const Navbar = ({isScrolling}) => {

    //cuando se hace click en el logo
    const toTheTop=()=>{
        window.scrollTo({top: 0, left:0, behavior: "smooth"})
    }

  return (
    <nav className={`navbar ${isScrolling > 20 ? "scrolling" : null} `}>
        <div className='navbar-logo' onClick={toTheTop}>
          <div>
          <span>Gerar.!</span>
          </div>
          {/* <div className='nav_rigth'>
          <span >Sobre mi</span>

          <span>Proyectos</span>

          <span>Contacto</span>


          </div> */}

          </div>
    </nav >
  )
}

export default Navbar