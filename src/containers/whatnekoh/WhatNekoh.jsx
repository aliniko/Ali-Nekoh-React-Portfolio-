import React from 'react'
import { Feature } from '../../components';
import './whatnekoh.css';
// import {Feature} from '../../components/feature/Feature';


const WhatNekoh = () => {
    return (
        <div className='nekoh__whatnekoh section__margin' id='WhatNekoh'>
            <div className='nekoh__whatnekoh-feature'>
                <Feature title="Who is Nekoh" text="We so opinion friends me message as delight." />
            </div>
            <div className='nekoh__whatnekoh-heading'>
                <h1 className='gradient__text'>Grow your organization</h1>
                <p>Explore Library</p>
            </div>
            <div className='nekoh__whatnekoh-container'>
            <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
            <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
            </div>
        </div>
    )
}

export default WhatNekoh
