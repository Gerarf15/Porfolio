import React from 'react'
import './Cover.css'
import coverVideo from '../../assest/coverVideo.mp4'

const Cover = () => {
  return <div className='cover-container'>
        <video className='video' src={coverVideo} autoPlay loop muted />
        <h1>Gerardo José Fornies</h1>
        <p>Developer Full Stack</p>
    </div>
  
}

export default Cover