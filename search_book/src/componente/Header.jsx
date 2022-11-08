import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import '../App.css';
import {
    Link
  } from "react-router-dom";
export default function header() {
  return (
    <div>

           {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            
          </ul>
        </nav> */}


    
        <nav class="navbar navbar-expand-lg navbar-light bg-dark" style={{height:"80px" }}>
 
  <div class="container-fluid">
    
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarCenteredExample"
      aria-controls="navbarCenteredExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div
      class="collapse navbar-collapse justify-content-center"
      id="navbarCenteredExample">
   
      <ul class="navbar-nav mb-2 mb-lg-0">
      <li class="nav-item">
          <a class="nav-link" href="#">   <Link to="/"   style={{color:"white", textDecoration:"none" , }}>Home</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">  <Link to="/about" style={{color:"white", textDecoration:"none"}}>About</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> <Link to="/Contact" style={{color:"white", textDecoration:"none"}}>Contact</Link></a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href="#"> <Link to="/Bmifunction" style={{color:"white", textDecoration:"none"}}>Bmifunction</Link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"> <Link to="/Setcount" style={{color:"white", textDecoration:"none"}}>Setcount</Link></a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#"> <Link to="/Loginform" style={{color:"white", textDecoration:"none"}}>Login</Link></a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#"> <Link to="/ColorPage" style={{color:"white", textDecoration:"none"}}>ColorPage</Link></a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#"> <Link to="/Effect" style={{color:"white", textDecoration:"none"}}>Effect</Link></a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#"> <Link to="/Inbox" style={{color:"white", textDecoration:"none"}}>Inbox</Link></a>
        </li>
       
      
      </ul>
      
    </div>
    
  </div>
 <h1 style={{color:"white" , marginRight:"70px"}}>Jordan</h1>
</nav>


    </div>
  );
}
