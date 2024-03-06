import SchoolIcon from '@mui/icons-material/School';
import { IconButton } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';
import UploadIcon from '@mui/icons-material/Upload';
import mainImage from "./../assets/images/Product.png";
import "./../assets/style/myStyle.css";

import { useNavigate } from "react-router-dom";
import DriveFolderUploadRoundedIcon from '@mui/icons-material/DriveFolderUploadRounded';
function Upload() {
;
  return (
    <div style={{display:"flex" , flexDirection:"column"}}>
    <div className='LandPage'>
      <div className="main-container front ">
       
          
        <nav className="navbar">
        <div style={{display:"flex" , columnGap:"20px"}}> <SchoolIcon className="icon " />
        <h1><span style={{color:"#40679E"}}>Product</span> Scan</h1></div>
        <div style={{display:"flex" , columnGap:"20px"}} ><IconButton
             
            >

             
                <SearchIcon
                  className="icon "
                />
            
            </IconButton>
           
    
            </div>      
        </nav>
        <div style={{}}>
       
        <Button
        
        variant="outlined" size='medium' style={{
          alignItems:'center',justifyContent:'center',
          width:'250px',
          padding:'6px',
          marginLeft:'600px',
          marginTop:'190px',
         display:'flex',
          
        }}>
          
          <input id="file-input" type="file" className='w-full hidden' />
          <label for="file-input">
             
          <DriveFolderUploadRoundedIcon style={{fontSize:'30px',marginRight:'10px'}}
        
        />
        Upload
        </label>
        
          
          
          
          </Button>
          

        
        </div>
       
        <div style={{padding: "0px 100px"}} className="landingContent ">
          
    
          
        </div>
        </div>
        
      
        </div>
        
    </div>
  )
}

export default Upload