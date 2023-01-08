// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About'
// import NavbarList from './Components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route path='/About' element={<About/>}/>
      {/* <Route path='/home' element={<Homepage/>}/>
      <Route path='/Introduction' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/> */}
      {/* <Route path='/:title' element={<Details/>}/> */}
      </Routes>
      {/* <Footer/> */}
     </> 
    
  );
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Digital Black Religion Timeline
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Digital Black Religion Timeline
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
