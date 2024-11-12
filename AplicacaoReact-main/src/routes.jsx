import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Components/Home/Home";
import CadastroPage from "./Pages/CadastroPage";
import HomesPage from "./Pages/HomesPage";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cadastro" element={<CadastroPage/>} />
                <Route path="/homes" element={<HomesPage/>} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
