import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Subscribe from './pages/Subscribe';
import SubscribeTerms from './pages/SubscribeTerms';
import SubscribePay from './pages/SubscribePay';

function App() {
return (

<Router>
<div className="App">
    <div className="content">
        <Routes>
            <Route path="/" element={<LandingPage />} />
        </Routes>
        <Routes>
            <Route path="/LandingPage" element={<LandingPage />} />
        </Routes>
        <Routes>
            <Route path="/Login" element={<Login />} />
        </Routes>
        <Routes>
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
        <Routes>
            <Route path="/Subscribe" element={<Subscribe />} />
        </Routes>
        <Routes>
            <Route path="/SubscribeTerms" element={<SubscribeTerms />} />
        </Routes>
        <Routes>
            <Route path="/SubscribePay" element={<SubscribePay />} />
        </Routes>
        
    </div>
</div>
</Router>

);
}

export default App