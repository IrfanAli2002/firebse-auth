import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";


import SignUpUser from "../Pages/signup";
import LoginUser from "../Pages/login";
import Home from "../Pages/home";

const RouterApp = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<SignUpUser/> } />
                    <Route path="/home" element={<Home/> } />
                    <Route path="login" element={<LoginUser/>} />

                </Routes>


            </Router>

        </>
    )
}

export default RouterApp