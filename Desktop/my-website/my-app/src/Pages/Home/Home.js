import React, {useEffect, useState, Suspense} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import homeImage from "./images/office.jpg";
// import Navbar from '../../Components/Navbar/Navbar';


function Home(props) {

    return (
        
        <div>
              <img src={homeImage} className = "office-photo" ></img>  
            {/* <div className="left"> */}
                {/* <img src={homepageContentImage} className="headerPhoto"></img>  */}
                
                {/* <div className="textContainer"> 
                    <div className = "text"> 
        
                    
                    </div>
                </div>
            {/* </div> */}
            {/* <div className="right"> */}
                {/* <img src = {homeOffice} className = "office-photo" ></img> */}
            {/* </div>  */}

        </div>
      
           

    );
}

export default Home;