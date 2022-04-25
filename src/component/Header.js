import { BsSearch } from "react-icons/bs";
import comic from '../assets/comic.png';
import React from 'react';
import '../App.css'
// const user = 'Sam'
export const Header = () => {
    return (
        <>
        <div className='header-nav'>
                <div className='header-left'>
                    {/* {user && (
                        <div className='header-right'>
                            <div className='header-wrapper'>
                                <span>Hello, {user.name}</span>
                            </div>
                        </div>
                    )} */}
                </div>
                <div className='header-link'>
                    About Us
                </div>
            </div>
        <div className='header'>
            <img className='header-logo' src={comic} alt='Comic Underground icon' />
            <div className='header-search'>
                <input className='header-searchInput' type='text' placeholder="Search"/>
                <BsSearch className='header-searchIcon' />
            </div>
            
        </div>
        </>
    )
}