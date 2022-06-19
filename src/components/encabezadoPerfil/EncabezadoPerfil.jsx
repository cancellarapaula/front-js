import "./encabezadoPerfil.css";
import React from "react";
import {useNavigate} from "react-router-dom";


export default function EncabezadoPerfil() {
    let navigate = useNavigate();
           return (
            <div className="encabezadoContainer">
                <div className="cabeceraTop">
                    <div className="cabeceraIzq">
                        <p className="logo">Emprendamos</p>
                    </div>
                    <div className="cabeceraDer">
                        <button className="miPerfil" onClick={(e) => {navigate("/perfil", {replace: true});}}> Mi perfil</button>
                    </div>

                </div>
            </div>
            );


}
