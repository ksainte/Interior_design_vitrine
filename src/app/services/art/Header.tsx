import React from 'react'
import './Header.css';
import header from '../../assets/h1.jpg';
import art_header from '../../assets/art page header background .jpg';

import Image from "next/image";
import Button from '../../components/Button'

function Header() {
  return (
    <div className='Header_art overflow-y-hidden' >
    <Image
    className="header-background_art overflow-y-hidden"
    src= {art_header}
    alt=""
    />
      <div className='Header_components_art'>

      <div className='Header_center_art'>
        <h2>Arts</h2>
      </div>
      
      </div>
    </div>
  )
}

export default Header


//className='Header_leftside'