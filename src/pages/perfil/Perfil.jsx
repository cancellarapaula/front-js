import EncabezadoPerfil from "../../components/encabezadoPerfil/EncabezadoPerfil";
import Menufeed from "../../components/Menufeed/Menufeed";
import "./perfil.css";
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import PlaceIcon from '@mui/icons-material/Place';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


export default function Perfil() {
    return (
        <div className="perfil">
            <EncabezadoPerfil/>
            <div className="perfilContainer">
                <Menufeed/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img
                                className="profileCoverImg"
                                src="/images/portada2.png" alt="foto portada"
                            />
                            <img
                                className="profileUserImg"
                                src="/images/usuarios/user1.jpg" alt="foto portada"
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Ariel Ortega</h4>
                        </div>
                    </div>

                        <div className="cajaInformacion">
                            <div className="perfilWrapper">
                                <div className="perfilCenter">
                                    <div className="titulo">
                                     <span className="tituloInformacion">Información General</span>
                                        <ModeEditIcon className="perfilIconEdit" />
                                    </div>

                                        <hr className="perfilHr"/>
                                            <div className="cajaDatos">

                                                <div>
                                                    <LocalPostOfficeIcon className="perfilIcon"/>
                                                    <span className="subtituloInformacion">Email</span>
                                                </div>
                                                <p className="infoCargada">pepe@gmail.com</p>

                                                <div>
                                                    <PlaceIcon className="perfilIcon"/>
                                                    <span className="subtituloInformacion">País de residencia</span>
                                                </div>

                                                <p className="infoCargada">Argentina</p>

                                            </div>
                                </div>
                            </div>
                        </div>
                    <div className="cajaInformacion">
                        <div className="perfilWrapper">
                            <div className="perfilCenter">

                                <div className="titulo">
                                    <span className="tituloInformacion">Habilidades</span>
                                    <ModeEditIcon className="perfilIconEdit2" />
                                </div>
                                <hr className="perfilHr"/>
                                <div className="cajaDatos">



                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cajaInformacion">
                        <div className="perfilWrapper">
                            <div className="perfilCenter">

                                <div className="titulo">
                                    <span className="tituloInformacion">Experiencia</span>
                                    <ModeEditIcon className="perfilIconEdit2" />
                                </div>
                                <hr className="perfilHr"/>
                                <div className="cajaDatos">



                                </div>

                            </div>
                        </div>
                    </div>
                    <br/>

                </div>
            </div>

        </div>
    );
}
