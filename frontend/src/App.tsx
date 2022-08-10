import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import MapPage from './Pages/Map/MapPage';
import Profile from './Pages/Profile/Profile';
import NavBar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import About from './Pages/About/About';
import Admin from './Pages/Admin/Admin';
import LogIn from './Pages/LogIn';
import Register from './Pages/Register';

const queryClient = new QueryClient()

function App() {
  return (

    // ternary rendering (if logged in)

    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>

          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          {/* <Route index element={ */}
          {/* // <NavBar>
              // <Routes> */}
          <Route path="map" element={<MapPage />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<About />} />
          <Route path="admin" element={<Admin />} />
          <Route index element={<MapPage />} />
          {/* // </Routes>
            // </NavBar>
          // } /> */}
        </Routes>


        {/* <Footer /> */}
      </BrowserRouter>
    </QueryClientProvider >
  )
}

export default App;
