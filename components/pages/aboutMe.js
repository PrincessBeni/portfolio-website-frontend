import React from 'react'
import '../../App.css'; 
import './aboutMe.css';
import Footer from '../footer';

function aboutMe(props) {
    return (
        
        <div className='about-me'>
           <h1 >About Me</h1><br/>
           <p>Up Close and Personal</p><br/><br/> 

           <div className='image-container'>
                <img src='1.jpg' alt='A' width="300" height="400"/>
            </div>
            <div className = 'paragraph'>
                <p>​I am Princess Benido, a final year Bachelor of Science 
                    in Information Technology student at the University of Ghana.
                    I am directed by my passion for understanding modern technology. 
                    As life never stops teaching, I do not want to ever stop learning too. 
                    I am eager to build on my academic foundation in Information Technology 
                    and to also stay updated with latest technology through continued coursework 
                    and professional development.
                    My thirst for knowledge and determination to turn thoughts into tangible asserts
                    has contributed to most of my accomplishments both educationally and personally. 
                    Being a significant person at the Computer Science Department of the University 
                    of Ghana who occupied the course representative position for some years(2017-2020), 
                    was face of Computer Science Department (2018-2019), was nominee for an exchange 
                    program in Lithuania (2020-2021), and is the current vice president of the department, 
                    I can to some extent, conclude that my hard work and determination in my field of study pays off aftercall. 
                    Recently, I built an e-commerce website with WordPress. I have also built an online salon 
                    reservation system using java. At the moment i am developing my portfolio website with Reactjs. 
                    Most of my projects are uploaded on my GitHub.
                    As a fun and energetic person as I am, I have interests in playing volleyball, tennis, dancing, 
                    watching movies, and listening to music.
                    I am very interested in improving the productivity of my field of study. I am a hard worker, 
                    a team player, and excited to see what projects could benefit from my unique skill sets. I would love to 
                    chat with you about how we might work together in the near future.
                </p>
           </div>
           <Footer/>    
        </div>
    )
}

export default aboutMe
