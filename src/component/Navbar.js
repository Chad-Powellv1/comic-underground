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
                    {state.username && (
                        <div className='header-right'>
                            <div className='header-wrapper'>
                                <span>Hello, {username.name}</span>
                            </div>
                        </div>
                    )}
            
                    <Link to='/login'><span className="header-sell">Login</span></Link>
                    <Link to='/register'><span className="header-sell">Register</span></Link>
                    <Link to='/sell'><span className="header-sell">Sell</span></Link>
                    <Link to='/watchlist'><span className="header-sell">watchlist</span></Link>

                </div>
                <div className='header-link'>
                <Link to="/about">About Us</Link>
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