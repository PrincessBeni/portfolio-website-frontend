import React from 'react'
import {Link} from 'react-router-dom';
import Cardsitems from './Cardsitems';
import './Cards.css';

function Cards() {
    return (
            <div className='cards'>
                <div className='texts'>            
                    <h1>Hi, I am Princess Benido!</h1><br/><br/>
                    <p className='general-portfolio'>General Portfolio</p><br/>
                    <p className= 'message'>As an intelligent, hardworking and smart young lady who is 
                        skilled in the IT field, I appreciate the significance of 
                        dedication as a key factor to success. My portfolio site 
                        demonstrates who I am, some of the projects I have worked on, 
                        the skills I acquired over time, and my fractured contingency 
                        plan. Surf this site, and find out interesting professional 
                        information about me. My doors are open for 
                        business offers, criticisms, discussions, recommendations, etc.
                    </p>
                </div> 
   
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__item'>
                            <Cardsitems 
                                src='1.jpg'
                                text = 'Every Professional information about me'
                                label = 'About me' 
                                path='/aboutMe'
                                />

                                <Cardsitems 
                                src='1.jpg'
                                text = 'Find out about the professional experiences i have'
                                label = 'Experiences' 
                                path='/experiences'
                                />

                                <Cardsitems 
                                src='1.jpg'
                                text = 'Check projects i have worked on'
                                label = 'Projects' 
                                path='/projects'
                                />
                            </ul>
                                <ul className='cards__item'>
                                <Cardsitems 
                                src='1.jpg'
                                text = 'These are the services you could contact me for'
                                label = 'Services' 
                                path='/services'
                                />


                                <Cardsitems 
                                src='1.jpg'
                                text = 'Find out the schools i have attended. Find out my educational experiences'
                                label = 'Education' 
                                path='/education'
                                />

                                <Cardsitems 
                                src='1.jpg'
                                text = 'Read my blog(s)'
                                label = 'Blog' 
                                path='/blog'
                                />
                        </ul>
                    </div>
                </div>
                </div>
    )
}

export default Cards
