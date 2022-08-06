import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import MapPage from './Pages/Map/MapPage';
import Profile from './Pages/Profile/Profile';
import NavBar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';
import About from './Pages/About/About';
import Admin from './Pages/Admin/Admin';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MapPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;
