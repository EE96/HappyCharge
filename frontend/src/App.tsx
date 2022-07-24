import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Map from './Pages/Map/Map';
import Profile from './Pages/Profile/Profile';
import NavBar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import About from './Pages/About/About';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/profile" element={<Profile />} />
         <Route path="/about" element={<About />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
