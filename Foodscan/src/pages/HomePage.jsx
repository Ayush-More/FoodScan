import SchoolIcon from '@mui/icons-material/School';
import { IconButton } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';
import UploadIcon from '@mui/icons-material/Upload';
import mainImage from "./../assets/images/Product.png";
import "./../assets/style/myStyle.css";
import { useNavigate } from "react-router-dom";
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
                 <UploadIcon onClick={()=>{nav ("/profile")}} className="icon " />
              </IconButton>
            </div>
    
            </div>      
        </nav>
          
        
        <div style={{padding: "0px 100px"}} className="landingContent ">
          
          <div ><p className="tagLine ">Empowering<span style={{color:"#40679E" , fontSize:"40px", padding:"20px" }}>AYUSH</span><br/>Campus Journey:<br/><span style={{ fontSize:"20px"}}>Mentorship, Book Exchange and  Events at Your Fingertips!</span></p>
          <Button  style={{ backgroundColor:"#40679E", marginLeft:"30px"}} color="success" variant="contained" size="medium">
          Explore <ArrowRightAltIcon/>
        </Button></div>
          
          <div ><img src={mainImage} alt="college" height={400}width={450} /></div>
          
          
        </div>
        </div>
        
      
        </div>
        
    </div>
   </> 
   
  )
}

export default LandPageOverview