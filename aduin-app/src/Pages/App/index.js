import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LandingPage from '../LandingPage';
import PetaPengaduan from '../PetaPengaduan'

const index = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path="/peta-pengaduan" element={<PetaPengaduan />}
/>
            </Routes>
            
        </BrowserRouter>
    )
}

export default index