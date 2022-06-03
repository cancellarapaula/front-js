import React, {useRef} from "react";
import "./register.css";
import Footer from '../../components/footer/Footer';
import {Emprendedor} from "../../models/emprendedor";

export default function Register() {
    const email = useRef();
    const password = useRef();
    const url = 'http://localhost:8080/v1/gestion-emprendedor/emprendedor';

    const handleClick = async (e) => {
        e.preventDefault();

        let emprendedor = {
            email: email.current.value,
            password: password.current.value}

        try {
            fetch(url, {
                method: 'POST',
                mode: 'no-cors',
                body: JSON.stringify(emprendedor),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            console.log("lo lograste")
        } catch (err) {
            console.log(err);
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
                            <input placeholder="Correo electrónico" className="loginInput" ref={email}/>
                            <input placeholder="Contraseña" className="loginInput" type="password" ref={password}/>

                            <span className="texto">
                                    Al hacer click en Unirse aceptas las Condiciones de Uso y las Políticas de privacidad
                                 </span>
                            <button className="loginButton" type="submit">Unirse</button>
                            <span className="miembro">¿Ya eres miembro? <button className="loginRegisterButton">Iniciar sesión</button></span>

                        </form>

                    </div>

                </div>
                <Footer/>
            </div>

        </div>


    );
}
