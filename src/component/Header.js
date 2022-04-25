import { BsSearch } from "react-icons/bs";
import comic from '../assets/comic.png';
import React from 'react';
import '../App.css'

export const Header = () => {
    return (

        <div className='header'>
            <img className='header-logo' src={comic} alt='Comic Underground icon' />

            <div className='header-search'>
                <input className='header-searchInput' type='text'/>
                <BsSearch className='header-searchIcon' />
            </div>
            <div className='header-nav'>
                <div className='header-action'>
                    <span className='header-actionOne'>
                        Hello Guest
                    </span>
                    <span className='header-actionTwo'>
                        Login
                    </span>
                </div>
                <div className='header-action'>
                    <span className='header-actionOne'>
                        Hello Guest
                    </span>
                    <span className='header-actionTwo'>
                        Register
                    </span>
                </div>
                <div className='header-link'>
                    About Us
                </div>
            </div>
        </div>
    )
}