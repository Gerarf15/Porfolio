import React from "react";
import cara1 from '../../assest/cara1.jpg'
import cara3 from '../../assest/cara3.jpg'
import './Slider.css'

// console.log(slidesInfo)
const slidesInfo = [
    {
        src: cara1,
        alt: "image",
        desc: "proyect 1"
    },
    {
        src: cara3,
        alt: "image",
        desc: "proyect 2"
    },
    {
        src: cara1,
        alt: "image",
        desc: "proyect 3"
    },
    {
        src: cara3,
        alt: "image",
        desc: "proyect 2"
    }
]

const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt}></img>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
))

export default slides
