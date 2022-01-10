import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ali from '../../assets/ali.svg';


const Header = () => {
    return (
        <div className='nekoh__header section__padding id="home'>
            <div className='nekoh__header-content'>
                <h1 className='gradient__text'>I am a specialist on web developing </h1>
                <p>skillful at programming and coding languages and other skills given bellow:</p>
                <ul>
                    <li>CSS/HTML/JavaScript/React, WordPress</li>
                    <li>SEO, Responsive Design</li>
                </ul>
                <div className='nekoh__header-content__input'>
                <input type="email" placeholder='Your Email' />
                <button type="button"> Get Started</button>
                </div>
            <div className='nekoh__header-content__people'>
                <img src={people} alt="" />
                <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
            </div>

            <div className='nekoh__header-image'>
                <img src={ali} alt="ali" />
            </div>

        </div>
    )
}

export default Header
