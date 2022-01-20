import React from 'react'
import './footer.css';
import nekoh from "../../assets/nekoh2.svg";

const Footer = () => {
    return (
        <div classNameName='nekoh__footer section__padding'>
            <div classNameName='nekoh__footer-heading'>
                <h1 classNameName='gradient__text'>Interested in collaborating or investing?</h1>
            </div>
            <div classNameName='nekoh__footer-btn'>
                <p>Start a conversation</p>
            </div>

            <div classNameName='nekoh__footer-links'>
                <div classNameName='nekoh__footer-links_logo'>
                    <img src={nekoh} alt="Nekoh" />
                    <p>Frankfurter Str.126, Hofheim main taunus, Germany</p>
                </div>
                <div classNameName='nekoh__footer-links_div'>
                    <h4>Links</h4>
                    <p>TWITTER</p>
                    <p>GITHUB</p>
                    <p>LINKEDIN</p>
                </div>

                <div classNameName='nekoh__footer-links_div'>
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy and Policy</p>
                    <p>Contact</p>
                </div>
                <div classNameName='nekoh__footer-links_div'>
                    <h4>Get in touch</h4>
                    <p>Hofheim, Germany</p>
                    <p>+49 15730415200</p>
                    <p>alinekoh2@gmail.com</p>
                </div>
            </div>

            <div className='nekoh__footer-copyright'>
                <p> &copy; 2022 Ali Nekoh. All rights reserved.</p>
            </div>
        </div>

        
    )
}

export default Footer
