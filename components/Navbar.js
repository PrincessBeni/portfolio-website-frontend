import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Button from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton(true);
        }
    };

    
    //get rid of the login button that shows when the page is being resized
    useEffect (() =>{
        showButton();
    },[]);

    window.addEventListener('resize', showButton);   


    return (
        <>  
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        BENI <i className="fab fa-typo3"/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/home" className="navbar-links" onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/aboutMe" className="navbar-links" onClick={closeMobileMenu}>
                                ABOUT ME
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/experiences" className="navbar-links" onClick={closeMobileMenu}>
                                EXPERIENCES
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/projects" className="navbar-links" onClick={closeMobileMenu}>
                                PROJECTS
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/services" className="navbar-links" onClick={closeMobileMenu}>
                                SERVICES
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/education" className="navbar-links" onClick={closeMobileMenu}>
                                EDUCATION
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to="/blog" className="navbar-links" onClick={closeMobileMenu}>
                                BLOG
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle = 'outline--btn'>CONTACT ME</Button>}
                </div>

            </nav> 
        </>
    )
}

export default Navbar
