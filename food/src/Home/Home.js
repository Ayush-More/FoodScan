
import React from 'react'
import './Home.css'
import Lottie from "lottie-react";
import Animation from "./Animation - 1709486392570.json";
const Home = () => {
  return (
   <>
   <body>
    <div className="container">
      <div className="content">
        <div className='header'>
        <h1>Food Scan</h1>
        <div className="buttons">
              <button className="search-button">Search</button>
              <button className="upload-button">Upload</button>
            </div>
        </div>
        <div className='thought-image'>
              <p style={{ color:'green',fontWeight:'bold',fontSize:'22px',marginLeft:'100px'}}>Food is fuel for the body.
              <br></br>
              
                 Choose wisely to nourish your body and mind.</p>
          
                <Lottie animationData={Animation}
                 loop={true} autoPlay={true} speed={1} style={{width: "100%", height: "350px",marginLeft:'550px'}}
                />
            
             <div>

             </div>
        </div>
        
      </div>

    </div>
    </body>
   </>
  )
}

export default Home