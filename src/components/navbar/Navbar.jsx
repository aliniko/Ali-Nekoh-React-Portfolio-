import React from 'react'
import './navbar.css';
import {RiMenu3Line, RiCloseLin} from 'react-icons/ri';
import nekoh from '../../assets/nekoh2.svg'
const Navbar = () => {
    return (
        <div className='nekoh__navbar'>
            <div className='nekoh__navbar-links'>
                <div className='nekoh__navbar-links_logo'>
                    <img src={nekoh} alt="logo" />
                </div>
                <div className='nekoh__navbar-links_container'>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wnekoh">Who is Nekoh</a></p>
                    <p><a href="#Posibility">Services</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Blog</a></p>
                </div>
            </div>
            <div className='nekoh__navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
        </div>
    )
}

export default Navbar
