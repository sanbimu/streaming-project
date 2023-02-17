import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';

function App() {
return (

<Router>
<div className="App">
    <div className="content">
        <Routes>
            <Route path="/" element={<LandingPage />} />
        </Routes>
        <Routes>
            <Route path="/Login" element={<Login />} />
        </Routes>
        <Routes>
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
    </div>
</div>
</Router>

);
}

export default App