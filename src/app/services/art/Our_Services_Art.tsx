import React from 'react'
import BoberwArt from '../../assets/BoberwArt.jpg';
import "./Our_Services_Art.css"
import Image from "next/image";
import Button from '../../components/Button'
import Gallery from "./Gallery";



function Our_Services_Art() {
  return (
    <div className='Art' >
    <h1>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit."</h1>
 <div className='Art_components'>

   <div className='Art_leftside'>
   <Image src={BoberwArt} alt="header_img" />
   </div>

   <article className='Art_rightside'>
     <h1>Picasso</h1>
    
     <p > "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."  </p>
 
   </article>
   </div>

   <div className='Art_components1'>
   <article className='Art_leftside1'>
     <h1>Monet</h1>
    
     <p > "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>

   </article>

   <div className='Art_rightside1'>
   <Image src={BoberwArt} alt="header_img" />
   </div>
   </div>

   <div className='Art_components2'>

     <div className='Art_leftside2'>
   <Image src={BoberwArt} alt="header_img" />
   </div> 

   <article className='Art_rightside2'>
     <h1>Rubens</h1>
    
     <p > "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  </p>

   </article>
   

   </div>
<Gallery/>

</div>
  )
}

export default Our_Services_Art
