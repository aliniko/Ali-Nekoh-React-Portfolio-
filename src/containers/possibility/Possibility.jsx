import React from 'react'
import possibilityImage2 from '../../assets/possibilityImage2.jpg'
import './possibility.css';

const Possibility = () => {
    return (
        <div className='nekoh__possibility section__padding' id='possibility'>
            <div className='nekoh__possibility-image'>
                <img src={possibilityImage2} alt="possibility" />
            </div>
            <div className='nekoh__possibility-content'>
                <h4>Request for Price</h4>
                <h1 className='gradient__text'>WHY CHOOSE US Making it simple</h1>
                <p>I focus to improve radically your product/services profile across all the online medium.</p>
                <h4>Request To Get Started</h4>
            </div>
        </div>
    )
}

export default Possibility
