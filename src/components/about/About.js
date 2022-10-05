import React from 'react'
import './About.css'
import foto2 from '../../assest/foto2.jpg'

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3>...dejame decirte algo sobre mi</h3>
            <p>Con mucho esfuerzo y sacrificio logré finalizar el bootcamp de Henry, pero no solo me quedaré con eso, ahora voy por más y a seguir aprendiendo cosas nuevas y mejorando en lo que ya tengo conocimientos.</p>
        </div>
        <div className='about-img'>
            <img src={foto2} alt='about' width="300" height="300"/>

        </div>
    </div>
  )
}

export default About