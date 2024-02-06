import React from 'react'

import BoberwArt from '../assets/BoberwArt.jpg';
import art from '../assets/Art photo home page .jpg';
import design from '../assets/Design photo home page .jpg';
import resto from '../assets/restoration photo home page .jpg';




import "./Our_Services.css"
import Image from "next/image";
import Button from './Button'
import Link from 'next/link';



function Our_Services() {
  return (
    <div className='Services' >

         <h1>Our Services</h1>
      <div className='Services_components'>

  
        <div className='Services_leftside'>
      
        <Image 
        src={art} alt="header_img" 
        />
        </div>

        <article className='Services_rightside'>
          <h1>Art Works</h1>
         
          <p > "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
          <Button
            styles={'custom__button1'}
            type={'button'}
            title={'Open Art'}
            disabled={false}
            >
      
            <Link href="/services/art">See Art Works</Link>
            </Button>
        </article>

        </div>

        <div className='Services_components1'>
        <article className='Services_leftside1'>
          <h1>Design Works</h1>
         
          <p > "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
          <Button
            styles={'custom__button1'}
            type={'button'}
            title={'Open Art'}
            disabled={false}
            >
           <Link href="/services/design">See Design Works</Link>
            </Button>
        </article>

        <div className='Services_rightside1'>
        <Image src={design} alt="header_img" />
        </div>
        </div>

        <div className='Services_components2'>

          <div className='Services_leftside2'>
        <Image src={resto} alt="header_img" />
        </div> 

        <article className='Services_rightside2'>
          <h1>Restoration</h1>
         
          <p > "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
          <Button
            styles={'custom__button1'}
            type={'button'}
            title={'Open Art'}
            disabled={false}
            >
              
              <Link href="/services/restoration">See Restoration Works</Link>

            </Button>
        </article>

  
        </div>


        
    </div>
  )
}

export default Our_Services
