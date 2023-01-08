import React, {useEffect, useState, Suspense} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css";
import homeImage from "./images/office.jpg";
// import Navbar from '../../Components/Navbar/Navbar';


function Home(props) {
 
    return (
        <header>
        <div className = "head-text">
          <div className = "head-image">
          <img src={homeImage} className = "office-photo" ></img>  
          </div>
            <div class='text-on-image'>
            <h3>Hi, I'm Alyssa</h3>
          Developer, Designer, and project manager.
        <br></br>
        <br></br>
          Currently based in Tucson, AZ completing my Computer Science degree from the University of Arizona
            </div>
        </div>
      </header>

    );
}

export default Home;