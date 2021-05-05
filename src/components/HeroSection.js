import React from 'react'
import './Cards.css';
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className = 'hero-container'>
           <video src="video-2.mp4" autoPlay loop muted/> 
           <h1>HEY STRANGER!</h1>
           <p>I am Princess Benido, and this is my portfolio website.</p>
           <div className='hero-btns'> 
                <Button className='btns' 
                    buttonStyle='outline--btn' 
                    buttonSize='large--btn'>WATCH ME <i className='far 
                    fa-play-circle'/>
               </Button>

            
               <Button className='btns' 
                    buttonStyle='primary--btn' 
                    buttonSize='large--btn'> LEAVE A MESSAGE
               </Button>
              
           </div>
        </div>
    )
}

export default HeroSection
