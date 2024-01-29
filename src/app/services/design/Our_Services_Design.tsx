import React from 'react'
import BoberwArt from '../../assets/BoberwArt.jpg';
import "./Our_Services_Design.css"
import Image from "next/image";
import Button from '../../components/Button'
import Gallery from "./Gallery";



function Our_Services_Design() {
  return (
    <div className='Design' >
    <h1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit."</h1>
 <div className='Design_components'>

   <div className='Design_leftside'>
   <Image src={BoberwArt} alt="header_img" />
   </div>

   <article className='Design_rightside'>
     <h1>Picasso</h1>
    
     <p > "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  </p>

   </article>
   </div>

   <div className='Design_components1'>
   <article className='Design_leftside1'>
     <h1>Monet</h1>
    
     <p > "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>
   </article>

   <div className='Design_rightside1'>
   <Image src={BoberwArt} alt="header_img" />
   </div>
   </div>

   <div className='Design_components2'>

     <div className='Design_leftside2'>
   <Image src={BoberwArt} alt="header_img" />
   </div> 

   <article className='Design_rightside2'>
     <h1>Rubens</h1>
    
     <p > "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>

   </article>
   

   </div>
<Gallery/>

</div>
  )
}

export default Our_Services_Design
