import React from 'react';
import {Link} from 'react-router-dom';

function Cardsitems(props) {
    return (
        <>
            <li className='cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <figure className='cards__item_pic_wrap' 
                    data-category={props.label}>
                        <img src={props.src} alt='Princess Benido' 
                        className='cards__item__img'/>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>    
        </>
    )
}

export default Cardsitems
