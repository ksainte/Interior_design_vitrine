'use client'

import React from 'react'
import './Navbar.css';
import logo from '../assets/zbyszek.jpg';
import Image from "next/image";
import Link from 'next/link';
import Button from './Button'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { useState } from "react"; 



  export default function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (

    <div className = 'navbar' id="navbar">

      <div className = 'navbar_comp'>
       <Link href="/">

      <div className='navbar_left'>
 
        <Image 
        src={logo} 
        alt="LinkedIn" 
        />
      </div>
      </Link>

      <div className='navbar_right'>
        
        {/* <nav className="navbar_links"> */}
        <ul className="navbar_links">
        <li>
        <Link href="/" className="links">Home</Link>
        </li>
        <li className="dropdown">
              <Link href="javascript:void(0)"  className="links">Services</Link>
              <div className="dropdown-content">
                <Link href="/services/art" className="links">Art
                </Link>
                <Link href="/services/design" className="links">Design
                </Link>
                <Link href="/services/restoration" className="links">Restoration
                </Link>
              </div>
            </li>
            <li>
              <Link 
              href="/about_page" className="links">About
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="links"> Contact</Link>
            </li>
        </ul>
        {/* </nav> */}
        

      </div>


        <div className="smallscreen">
        <GiHamburgerMenu className="ham" color="black" fontSize={30} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
         
          <div className="app__navbar-smallscreen_overlay"> 
              <GiHamburgerMenu fontSize={30} className="overlay__close" onClick={() => setToggleMenu(false)} />
              <ul className="app__navbar-smallscreen_links">
               
                      <li>
                      <Link href="/" className="links" onClick={() => setToggleMenu(false)}>Home</Link>
                      </li>
                      <li className="dropdown">


                            <Link href="javascript:void(0)"  className="links" >Services</Link>
                            <div className="dropdown-content">
                              <Link href="/services/art" onClick={() => setToggleMenu(false)} className="links">Art
                              </Link>
                              <Link href="/services/design" className="links" onClick={() => setToggleMenu(false)}>Design
                              </Link>
                              <Link href="/services/restoration" className="links" onClick={() => setToggleMenu(false)}>Restoration
                              </Link>
                            </div>
                          </li>
                        <li>
                            <Link 
                            href="/about_page" className="links" onClick={() => setToggleMenu(false)}>About
                            </Link>
                          </li>
                          <li>
                            <Link href="/#contact" className="links" onClick={() => setToggleMenu(false)}> Contact</Link>
                          </li>
       
              </ul>
         </div>
            )}
        </div>
        </div>



    </div>
  )
}

