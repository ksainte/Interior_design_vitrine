import React from 'react'
import './OurProcess.css'
import OurProcessSmall from './OurProcessSmall'


function OurProcess() {
  return (
    <div className='Process ' >
    <h1>Our Process</h1>
        <div className='Process_components '>
            <div className="divTable minimalistBlack ">
                    <div className="divTableHeading ">
                    <div className="divTableRow">
                    <div className="divTableHead">Step 1</div>
                    <div className="divTableHead">Step 2</div>
                    <div className="divTableHead">Step 3</div>
                    </div>
                    </div>

                    <div className="divTableBody">
                    <div className="divTableRow">
                    <div className="divTableCell">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <div className="divTableCell">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    <div className="divTableCell">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                    </div>
             </div>
             <div className="check"> 
             <OurProcessSmall/> 
             </div>
        </div>
    </div>
  )
}

export default OurProcess

