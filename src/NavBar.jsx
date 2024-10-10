import React from 'react';
import './NavBar.css';


const Navbar = () =>     
{
     return (
          <nav className="navbar">
            <div className='buttons'>
                <button className='nav-button'>Search</button>
                <button className='nav-button'>Sign in</button>
                <button className='nav-button'>Bag</button>
            </div>
            <div className='title'>Fashion App</div>
            <div className='links'>
               <a href='/'>Home</a>
               <a href='/shop'>Shop</a>
               <a href='/Customer_care'>Customer Care</a>
               <a href='About'>About</a>
            </div>
          </nav>






        
     );




};


export default Navbar;


    
