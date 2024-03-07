import SchoolIcon from '@mui/icons-material/School';
import { IconButton } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';
import UploadIcon from '@mui/icons-material/Upload';
import mainImage from "./../assets/images/Product.png";
import "./../assets/style/myStyle.css";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Lottie from "lottie-react";
import Animation from "./../assets/6.json";

function LandPageOverview() {
  const nav = useNavigate();
  return (
    <>
    <div style={{display:"flex" , flexDirection:"column"}}>
    <div className='LandPage'>
      <div className="main-container front ">
       
          
        <nav className="navbar">
        <div style={{display:"flex" , columnGap:"20px"}}> <SchoolIcon className="icon " />
        <h1><span style={{color:"#40679E"}}>Product</span> Scan</h1></div>
        <div style={{display:"flex" , columnGap:"20px"}} >
          <IconButton   onClick={()=>{nav ("/search")}}>
                <SearchIcon
                  className="icon "
                />
            
            </IconButton>
            
            
            <div> 
              <IconButton>
                 <UploadIcon onClick={()=>{nav ("/upload")}} className="icon " />
              </IconButton>
            </div>
            <div> 
              <IconButton>
                 <AccountCircleIcon onClick={()=>{nav ("/profile")}} className="icon " />
              </IconButton>
            </div>
            
    
            </div>      
        </nav>
          
        
        <div style={{padding: "0px 100px"}} className="landingContent ">
          
          <div ><p className="tagLine ">Food is fuel<span style={{color:"#40679E" , fontSize:"40px", padding:"20px" }}>calories are the currency of energy.</span><br/><br/><span style={{ fontSize:"20px"}}> Choose wisely to nourish your body and power your life</span></p>
          <Button  style={{ backgroundColor:"#40679E", marginLeft:"30px"}} color="success" variant="contained" size="medium">
          Explore <ArrowRightAltIcon/>
        </Button></div>
          
          <div ><Lottie animationData={Animation}/></div>
          
          
        </div>
        </div>
        
      
        </div>
        
    </div>
   </> 
   
  )
}

export default LandPageOverview