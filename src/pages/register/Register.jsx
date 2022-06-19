import React, {useRef} from "react";
import "./register.css";
import Footer from '../../components/footer/Footer';
import {Emprendedor} from "../../models/emprendedor";
import {StatusCodes} from "http-status-codes";
import {postGeneric} from "../../helpers/PostGeneric";
import {useNavigate} from "react-router-dom";

export default function Register() {

    let navigate = useNavigate();


    const email = useRef(null);
    const password = useRef(null);
    const url = 'http://localhost:8080/v1/gestion-emprendedor/emprendedores';


    const handleClick = async (e) => {
        e.preventDefault();

        let emprendedor = new Emprendedor(email.current.value, password.current.value)

        const {data, statusCode} = await postGeneric(url, emprendedor)

        if (statusCode === StatusCodes.CREATED) {
            console.log("lo lograste")
            navigate("/login", {replace: true});
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
                                   Registrate en Emprendamos
                                 </span>
                            <input placeholder="Correo electrónico" className="loginInput" type="email" required
                                   ref={email}/>
                            <input placeholder="Contraseña" className="loginInput" type="password" required
                                   ref={password}/>

                            <span className="texto">
                                    Al hacer click en Unirse aceptas las Condiciones de Uso y las Políticas de privacidad
                                 </span>
                            <button className="loginButton" type="submit"> Unirse</button>
                            <span className="miembro">¿Ya eres miembro? <button className="loginRegisterButton">Iniciar sesión</button></span>

                        </form>

                    </div>

                </div>
                <Footer/>
            </div>

        </div>


    );
}
