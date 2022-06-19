import React, {useContext, useRef} from "react";
import "./login.css";
import Footer from '../../components/footer/Footer';
import {Emprendedor} from "../../models/emprendedor";
import {useNavigate} from "react-router-dom";
import {postGeneric} from "../../helpers/PostGeneric";
import {StatusCodes} from "http-status-codes";
import {UserIdContext} from "../../context/UserIdContext";


export default function Login() {
    const {userId, setUserId} = useContext(UserIdContext);


    let navigate = useNavigate();

    const email = useRef(null);
    const password = useRef(null);
    const url = 'http://localhost:8080/v1/gestion-emprendedor/login';


    const handleClick = async (e) => {
        e.preventDefault();
        let emprendedor = new Emprendedor(email.current.value, password.current.value)
        const {data, statusCode} = await postGeneric(url, emprendedor)

        setUserId(data.id);


        if (statusCode === StatusCodes.OK) {
            console.log("lo lograste")
            navigate("/feed", {replace: true});

        } else {
            alert(data.message)
        }

    };


    return (

        <div className="login">
            <div className="cabeceraWrapper">
                <div className="cabeceraTop">
                    <div className="cabecera">
                        <p className="logo">Emprendamos</p>
                    </div>
                </div>
                <div className="cabeceraDown">
                    <div className="loginWrapper">

                        <form className="loginBox" onSubmit={handleClick}>
                                <span className="texto2">
                                   Iniciar sesión en Emprendamos
                                 </span>
                            <input placeholder="Correo electrónico" className="loginInput" type="email" required
                                   ref={email}/>
                            <input placeholder="Contraseña" className="loginInput" type="password" required
                                   ref={password}/>
                            <button className="loginButton" type="submit"
                            > Iniciar Sesión
                            </button>
                            <span className="miembro">¿Olvidaste tu contraseña?</span>
                            <span className="recuperarContraseña"><button className="recoverPasswordButton">Recuperar contraseña</button></span>

                        </form>

                    </div>

                </div>
                <Footer/>
            </div>

        </div>


    );
}
