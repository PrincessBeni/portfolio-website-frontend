import React from 'react'
import '../../App.css';
import './experiences.css'; 
import Footer from '../footer';

function experiences() {
    return (
        <div className = 'experiences-container'>
            <div className='experiences'>
                {/*<div className='image-container'>
                    <img src='1.jpg' alt='A'/>
                </div>*/}
            <div className='texts-container'>
                <h1>EXPERIENCES</h1>
                <p>What I have done</p>
            </div> 
            </div>
            <div className = 'sections-container'>
                <div className = 'section-1'>
                    <div className = 'section-texts'>
                    <h1 className = 'texts-1'>June 2019 - August 2019</h1>
                    <h1 className = 'texts-2'>Intern, Volta River Authority</h1>
                    <p className = 'texts-3'>In collaboration with my fellow interns, 
                    we built an Interns Management System. I was assigned backend development
                    </p>
                    </div>
                </div>

                <div className = 'section-2'>
                    <div className = 'section-texts'>
                    <h1 className = 'texts-1'>September 2019 - December 2019</h1>
                    <h1 className = 'texts-2'>Lab Assistant, University of Ghana Computing Systems</h1>
                    <p className = 'texts-3'>I assisted students who came to the lab to use the lab's computers.
                    </p>
                    </div>
                </div>
                
                <div className = 'section-3'>
                    <div className = 'section-texts'>
                    <h1 className = 'texts-1'>August 2020 - January 2021</h1>
                    <h1 className = 'texts-2'>Welcome manageress, Taupa Credit Union</h1>
                    <p className = 'texts-3'>I welcomed customers, and provided them hospitality.
                    </p>
                    </div>
                </div>
            </div> 
            <Footer/>
        </div>
    )
}

export default experiences
