import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { NftCard } from './Components/NftCard/';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<NftCard />}/>
        </Routes>
    );
}