import React from 'react'
import './About.css'
import imgAbout from '../../assest/imgAbout.gif'

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3>...let me tell you something about me</h3>
            <p>sdfa sf asfasfda asfasd  asf asdf as fasf asf as afdsfasfsa as fsaf asfasf as sfsa safdasf asdf saf asdf asf afd adf</p>
        </div>
        <div className='about-img'>
            <img src={imgAbout} alt='about'/>

        </div>
    </div>
  )
}

export default About