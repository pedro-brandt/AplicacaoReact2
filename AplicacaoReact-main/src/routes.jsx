import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import HomePage from "./Components/Home/Home";
import LoginPage from "./Pages/LoginPage";
import CadastroPage from "./Pages/CadastroPage";
import HomesPage from "./Pages/HomesPage";


function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cadastro" element={<CadastroPage />} />
                <Route path="/homes" element={<HomesPage />} />
                <Route path="*" element={<div>Página não encontrada</div>} />
            </Routes>
        </Router>
        //tentei bubstituir por switch
    );
}

export default AppRoutes;