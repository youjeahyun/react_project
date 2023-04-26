import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ScrollToTop from "../Components/Layout/ScrollToTop";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import LayoutType1 from "../Layout/LayoutType1";
import LayoutType2 from "../Layout/LayoutType2";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Profile from "../Pages/Profile";
import Error from "../Pages/404";


const Routers = () => {
    return (
        <Router>
            <ScrollToTop/>
            <Routes>
                <Route element={<PrivateRoute><LayoutType1/></PrivateRoute>}>
                    <Route path='/profile' element={<Profile/>}/>
                </Route>
                <Route element={<PublicRoute><LayoutType1/></PublicRoute>}>
                    <Route index element={<Home/>}/>
                </Route>
                <Route element={<PublicRoute><LayoutType2/></PublicRoute>}>
                    <Route path="*" element={<Error/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Route>
            </Routes>
        </Router>
    )
}

export default Routers;
