import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'

function footer() {
    return (
        
            <div className='footer'>
                {/*column1*/}
                <div className='footer-col'>
                    <h1>Princess Benido</h1><br/>
                    <p>benidoprincess@gmail.com</p>
                    <p>+370 6950 4427</p>
                </div>

                {/*social media icons and copyright on the same line*/}
                <div className='col-social'>
                    <Link 
                        className='social-icon-link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                    >
                        <i className='fab fa-facebook-f'/>
                    </Link>

                    <Link 
                        className='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                    >
                        <i className='fab fa-twitter'/>
                    </Link>

                    <Link 
                        className='social-icon-link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                    >
                        <i className='fab fa-instagram'/>
                    </Link>

                    <Link 
                        className='social-icon-link linkedin'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                    >
                        <i className='fab fa-linkedin'/>
                    </Link>

                    <Link 
                        className='social-icon-link github'
                        to='/'
                        target='_blank'
                        aria-label='GitHub'
                    >
                        <i className='fab fa-github'/>
                    </Link>

                </div>
                <div className='all-rights'>
                    by Princess Benido &copy; 2021 
                </div>
                
        </div>
    
    )
}

export default footer
