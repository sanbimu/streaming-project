import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Subscribe from './pages/Subscribe';
import SubscribeTerms from './pages/SubscribeTerms';
import SubscribePay from './pages/SubscribePay';
import ShowAll from "./pages/ShowAll";

function App() {
return (

<Router>
<div className="App">
    <div className="content">
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/LandingPage" element={<LandingPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/Subscribe" element={<Subscribe />} />
            <Route path="/SubscribeTerms" element={<SubscribeTerms />} />
            <Route path="/SubscribePay" element={<SubscribePay />} />
            <Route path="/ShowAll" element={<ShowAll />} />
        </Routes>
    </div>
</div>
</Router>

);
}

export default App
