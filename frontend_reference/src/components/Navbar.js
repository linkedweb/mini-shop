import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navbar = () => (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
            <Link className='navbar-brand' to='/'>
                Mini Shop
            </Link>
            <button 
                className='navbar-toggler' 
                type='button' 
                data-bs-toggle='collapse' 
                data-bs-target='#navbarNav' 
                aria-controls='navbarNav' 
                aria-expanded='false' 
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' exact to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/checkout'>
                            Checkout
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default navbar;
