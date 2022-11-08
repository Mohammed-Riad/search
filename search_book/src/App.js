import {
  Routes,
  Route,
} from "react-router-dom";
// import React from "react";
import Bmifunction from './componente/Bmifunction';
import About from './componente/About';
import Home from './componente/Home';
import Header from './componente/Header';
import Contact from './componente/Contact';
import Footer from './componente/Footer';
import Info from './componente/Info';
import Setcount from './componente/Setcount';
import Loginform from './componente/Loginform';
import ColorPage from './componente/ColorPage';
import Effect from './componente/Effect';
import Inbox from "./componente/Inbox.1";




import React, {useState} from 'react'



// import Tours from './Tours';
export default function App() {

  const [count, setCount] = useState(0);
  let increase = () =>
  {
      setCount(count + 1)
  }

  let decrease = () =>
  {
      setCount(count - 1)
  }


  return (
     
     <> 
     {/* <p>You clicked {count} times</p> */}
      <Header />
        <Routes>
          <Route exact element={<Home />} path="/" />
          {/* <Route exact element={<Tours />} path="Tours" /> */}
          <Route exact element={<About />} path="/About" />
          <Route exact element={<Contact />} path="/Contact" />
          <Route exact element={<Bmifunction />} path="/Bmifunction/" />
          <Route exact element={<Info />} path="/Info/:id" />
          <Route exact element={<Setcount  increase={increase} decrease={decrease} count={count}/> } path="/Setcount" />
          <Route exact element={<ColorPage />} path="/ColorPage" />
          <Route exact element={<Loginform />} path="/Loginform" />
          <Route exact element={<Effect />} path="/Effect" />
          <Route exact element={<Inbox />} path="/Inbox" />




        </Routes>
        <Footer />
     </>
      

    
    
  );
}