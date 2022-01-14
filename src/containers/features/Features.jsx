import React from 'react'
import { Feature } from '../../components';
import './features.css';

const featuresData = [
    {
        title: 'Website Design',
        text: 'Your vision, our design. To give your customers the best experiences of your website, our web design experts ensure that you can take your business to new heights.'
    },
    {
        title: 'Dynamic Web Application',
        text: 'A business like yours requires a site that works in real-time. Get your web pages scripted with PHP, ASP, etc. by the best website developers in Germany.'
    },{
        title: ' E-Commerce Solutions',
        text: 'Selling something online has never been easier. Leave it to the best e-commerce development company in Bangalore to take care of all your e-commerce website for business requirements be it planning,'
    },
    {
        title: 'Mobile Application Development',
        text: 'Today, a website without an app is like a bottle without water. With most of today’s generation relying on their smartphones for all their day-to-day needs, finding mobile application development services is absolutely necessary.'
    }

]

const Features = () => {
    return (
        <div className='nekoh__features section__padding' id='features'>
            <div className='nekoh__features-heading'>
                <h1 className='gradient__text'>Better Online Presence. Better Branding. Better Profits.</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className='nekoh__features-container'>
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features
