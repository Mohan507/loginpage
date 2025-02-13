import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import RegisterPage from "../Components/Registerpage";

export default function Routing() {

    return(
        <>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<RegisterPage/>}/>
        </Routes>
        </>
    )    
}