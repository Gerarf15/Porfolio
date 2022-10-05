import React from "react";
import weather from '../../assest/weather.png'
import todo from '../../assest/todo.png'
import country from '../../assest/countrys.png'
import color from '../../assest/color.png'

import './Slider.css'

// console.log(slidesInfo)
const slidesInfo = [
    {
        src: country,
        alt: "image",
        desc: "Countrys",
        url: "https://country-kappa.vercel.app/"
    },
    {
        src: weather,
        alt: "image",
        desc: "The Weather",
        url: "https://cranky-brahmagupta-3d1e01.netlify.app/"
    },
    {
        src: todo,
        alt: "image",
        desc: "To do list",
        url: "https://amazing-wozniak-7c3e5a.netlify.app/"
    },
    {
        src: color,
        alt: "image",
        desc: "ColorGame",
        url: "https://vigilant-cray-cbc9e6.netlify.app/"
    },
    
]
const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <div className="img_container">
        <img src={slide.src} alt={slide.alt}></img>
        </div>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        <a href={slide.url} target="_blank" className="proyect_contain">visitar</a>
        </div>
    </div>
))

export default slides
