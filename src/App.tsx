import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowAll from "./pages/ShowAll";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowAll />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
