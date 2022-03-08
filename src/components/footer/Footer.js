import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-info'>
                <h1>Gerardo José Fornies</h1>
                <p>Porfolio</p>
            </div>
            <div className='footer-contact'>
                <h3>Contact me</h3>
                <p>And lets get down to work</p>
            </div>
            <div className='footer-webs'>
                <div className='desing'>
                    Contact networks
                </div>
                <div className='footer-links'>
                    <a href='https://www.linkedin.com/in/gerardo-jose-fornies/' target="_blank" rel="noreferrer">
                        <i className='fab fa-linkedin linkedin'></i>
                    </a>
                    <a href='https://github.com/Gerarf15' target="_blank" rel="noreferrer">
                        <i className='fab fa-github github'></i>
                    </a>
                    <a href='https://instagram.com' target="_blank" rel="noreferrer">
                        <i className='fab fa-instagram instagram'></i>
                    </a>
                </div>
            </div>

        </footer>
    )
}

export default Footer