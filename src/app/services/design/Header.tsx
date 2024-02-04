import React from 'react'
import './Header.css';
import header from '../../assets/h1.jpg';
import design_header from '../../assets/design page header background .jpg';

import Image from "next/image";
import Button from '../../components/Button'

function Header() {
  return (
    <div className='Header_design' >
    <Image
    className="header-background_design"
    src= {design_header}
    alt=""
    />
      <div className='Header_components_design'>

      <div className='Header_side_design'>
        <h2>Designs</h2>
      </div>
      
      </div>
    </div>
  )
}

export default Header

//className='Header_leftside'