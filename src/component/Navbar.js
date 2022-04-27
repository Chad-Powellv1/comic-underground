import { useGlobalState } from "../context/GlobalState";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import comic from '../assets/comic.png';
import React from 'react';
import '../App.css'

export const Navbar = ({ username }) => {
    const [state, dispatch] = useGlobalState();

    return (
        <nav>
        <div className='header-nav'>
                <div className='header-left'>
                    {state.currentUser && (
                        <div className='header-right'>
                            <div className='header-wrapper'>
                                <span>Hello, {state.currentUser.first_name}</span>
                            </div>
                        </div>
                    )}
            
                    

                </div>
                <div className='header-link'>
                <Link to='/login' style={{textDecoration: 'none', fontFamily: 'var(--ff-arial)'}}><span className="header-sell">Login</span></Link>
                <Link to='/register' style={{textDecoration: 'none', fontFamily: 'var(--ff-arial)'}}><span className="header-sell">Register</span></Link>
                <Link to='/sell' style={{textDecoration: 'none', fontFamily: 'var(--ff-arial)'}}><span className="header-sell">Sell</span></Link>
                <Link to='/watchlist' style={{textDecoration: 'none', fontFamily: 'var(--ff-arial)'}}><span className="header-sell">Watchlist</span></Link>
                <Link to="/about" style={{textDecoration: 'none', color:'black'}}>About Us</Link>
                </div>
            </div>
        <div className='header'>
            <img className='header-logo' src={comic} alt='Comic Underground icon' />
            <div className='header-search'>
                <input className='header-searchInput' type='text' placeholder="Search"/>
                <BsSearch className='header-searchIcon' />
            </div>
            
        </div>
        </nav>
    )
}