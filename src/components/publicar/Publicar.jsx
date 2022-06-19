import React, {useState} from "react";
import "./publicar.css";
import CreateIcon from '@mui/icons-material/Create';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import {Modal} from '../modal/Modal';






export default function Publicar() {

    const [estado, cambiarEstado] = useState(false);

    return (
        <>
            <div>
                <div className="publicar">
                    <div className="publicarWrapper">
                        <div className="publicarTop">
                            <img
                                className="publicarImgPerfil"
                                src="/images/usuarios/user1.jpg" alt="foto perfil"/>

                            <span
                                className="publicarText">
                                <p>Contanos sobre tus proyectos...</p>
                            </span>
                        </div>
                        <hr className="publicarHr"/>
                        <div className="publicarBottom">


                            <div className="publicarOpcion">
                                <TipsAndUpdatesIcon htmlColor="tomato" className="shareIcon"/>
                                <button className="shareOptionText" onClick={() => {
                                    cambiarEstado(!estado);

                                }}>Publicar proyecto </button>
                            </div>
                            <div className="publicarOpcion">
                                <CreateIcon htmlColor="green" className="shareIcon"/>
                                <button className="shareOptionText">Actualizar estado del proyecto</button>
                            </div>

                        </div>

                    </div>

                </div>
                <Modal estado={estado} cambiarEstado={cambiarEstado}/>


            </div>

        </>
    );
}



