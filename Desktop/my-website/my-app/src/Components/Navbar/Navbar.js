import React, {useEffect, useState, Suspense} from 'react';
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom';   
import "./Navbar.css";
// import NavLogo from "./nav-images/NavLogo.png";
// import homeImage from "./images/office.jpg";

function Navbar(props) {
    //useState Hook
    const [pageName, setPageName] = useState("");
    function handleClick(event) {
        // Event.target.value is grabbing the value of the <li> tag
        setPageName(event.target.value);
    }
    // useEffect Hook
    useEffect(() => {
        routeChange(); 
    }, [pageName]) 

    // Routing user to site page
    let navigate = useNavigate();
    function routeChange() {
    // Under the hood stuff
    let path = '/' + pageName.replace(/\s+/g, '');
    navigate(path);
    }

    return (
        
        <div className="header">
          
            {/* <img src = {NavLogo} className="office-image"></img> */}
            {/* <div className="name">Alyssa K. Yanez</div> */}
            <div className="navbar">
              <ul>
                  <li><button value={navBarItems[0]} onClick={e => handleClick(e)}>{navBarItems[0]}</button></li>
                  <li><button value={navBarItems[1]} onClick={e => handleClick(e)}>{navBarItems[1]}</button></li>
                  <li><button value={navBarItems[2]} onClick={e => handleClick(e)}>{navBarItems[2]}</button></li>
                  <li><button value={navBarItems[3]} onClick={e => handleClick(e)}>{navBarItems[3]}</button></li>
                  <li><button value={navBarItems[4]} onClick={e => handleClick(e)}>{navBarItems[4]}</button></li>
              </ul>
            </div>
        </div>
    )
}
    const navBarItems = ['About','Work','Contact','Resume','Play']; //Play


export default Navbar;
