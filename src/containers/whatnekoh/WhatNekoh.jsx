import React from 'react'
import { Feature } from '../../components';
import './whatnekoh.css';

const WhatNekoh = () => {
    return (
        <div className='nekoh__whatnekoh section__margin' id='WhatNekoh'>
            <div className='nekoh__whatnekoh-feature'>
                <Feature />
            </div>
            <div className='nekoh__whatnekoh-heading'>
                <h1 className='gradient__text'>Grow your organization</h1>
                <p>Explore Library</p>
            </div>
            <div className='nekoh__whatnekoh-container'>
                <Feature />
                <Feature />
                <Feature />
            </div>
        </div>
    )
}

export default WhatNekoh
