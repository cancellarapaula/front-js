import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "../pages/register/Register";
import Feed from "../pages/feed/Feed";
import MisProyectos from "../pages/misProyectos/MisProyectos"
import NotFoundPage from "../pages/notFoundPages/NotFoundPage";
import React from "react";
import Perfil from "../pages/perfil/Perfil";
import Login from "../pages/login/Login";
import {UserIdProvider} from "../context/UserIdProvider";

export const AppRoutes = () => {
    return (

        <UserIdProvider>
            <BrowserRouter>

                <Routes>

                    <Route path="/" element={<Register/>}/>
                    <Route path="/feed" element={<Feed/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/misproyectos" element={<MisProyectos/>}/>
                    <Route path="/perfil" element={<Perfil/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>

            </BrowserRouter>
        </UserIdProvider>
    )

}

export default AppRoutes;
