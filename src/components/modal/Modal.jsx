import * as React from "react"
import {useContext, useEffect, useRef, useState} from "react"
import CloseIcon from '@mui/icons-material/Close';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PhotoIcon from '@mui/icons-material/Photo';
import "./modal.css";
import styled from "styled-components";
import {Proyecto} from "../../models/Proyecto";
import {VacanteTable} from "../vacanteTable/VacanteTable";
import AddVacanteForm from "../addVacanteForm/AddVacanteForm";
import {UserIdContext} from "../../context/UserIdContext";
import {getGeneric} from "../../helpers/getGeneric";
import {postGeneric} from "../../helpers/PostGeneric";
import {StatusCodes} from "http-status-codes";


const Modal = ({estado, cambiarEstado}) => {

    const nombre = useRef(null);
    const descripcion = useRef(null);
    const montoMinimo = useRef(null);
    const url = 'http://localhost:8082/v1/gestion-proyectos/proyectos';
    const url2 = 'http://localhost:8082/v1/gestion-proyectos/habilidades/todos';

    ////OBTENER HABILIDADES

    const [habilidad, setHabilidad] = useState({
        data: []
    });


    useEffect(() => {
        const getHabilidades = async () => {
            const {data, statusCode} = await getGeneric(url2)
            setHabilidad(data.habilidades)
        }
        getHabilidades()
    }, [])


    const vacanteData = [];
    const [vacante, setVacante] = useState(vacanteData);
    const [vacanteId, setVacanteId] = useState(vacanteData);
    const {userId} = useContext(UserIdContext);
    const idDueño = userId;
    const estadoProy = 1;
    let listaVacantes = [];

    listaVacantes = vacanteId;

    const handleClick = async () => {


        let proyecto = new Proyecto(nombre.current.value,
            descripcion.current.value,
            estadoProy,
            idDueño,
            Number(montoMinimo.current.value),
            listaVacantes)


        const {data, statusCode} = await postGeneric(url, proyecto)

        if (statusCode === StatusCodes.CREATED) {
            console.log("lo lograste")

        } else {
            alert(data.message)
        }
    };


    return (

        <>

            {estado &&
                <Overlay>
                    <ContenedorModal>
                        <EncabezadoModal>
                            <h3>Publicar proyecto</h3>
                        </EncabezadoModal>
                        <BotonCerrar onClick={() => {
                            cambiarEstado(false)
                        }}><CloseIcon/></BotonCerrar>
                        <form className="input" onSubmit={handleClick}>
                            <span className="component-input-label">Nombre del proyecto</span>
                            <input className="component-input-input" type='text' ref={nombre} required/>

                            <br/>
                            <div>
                                <span className="component-input-label">Agregar vacante</span>

                                <hr/>

                                <AddVacanteForm vacante={vacante} setVacante={setVacante}
                                                vacanteId={vacanteId} setVacanteId={setVacanteId}
                                                habilidad={habilidad}/>
                                <hr/>
                                <br/>
                            </div>

                            <VacanteTable key={vacante} vacante={vacante}/>

                            <span className="component-input-label">Descripción del proyecto</span>
                            <textarea className="component-input-input2  overflow-visible"
                                      ref={descripcion} required></textarea>
                            <span className="component-input-label">Monto mínimo de inversión</span>
                            <span className="artdeco-button__text"></span>
                            <input className="component-input-input" type="number" min="1" ref={montoMinimo} required/>
                            <hr className="publicarHr"/>
                            <div className="publicarBottom">
                                <div className="publicarOpcion">
                                    <PhotoIcon htmlColor="tomato" className="shareIcon"/>
                                    <span className="shareOptionText">Foto</span>
                                </div>
                                <div className="publicarOpcion">
                                    <VideoCameraBackIcon htmlColor="green" className="shareIcon"/>
                                    <span className="shareOptionText">Video</span>
                                </div>
                                <div className="publicarOpcion">
                                    <AttachFileIcon htmlColor="black" className="shareIcon"/>
                                    <span className="shareOptionText">Archivo</span>
                                </div>
                            </div>

                            <button className="publicarButton"> Publicar</button>

                        </form>

                    </ContenedorModal>

                </Overlay>
            }
        </>
    )
}


export {Modal}

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .5);

  display: flex;
  align-items: center;
  justify-content: center;


`;
const ContenedorModal = styled.div`
  width: 800px;
  height: 700px;
  background: #fff;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(179, 179, 179);
  }

`;


const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid #E8E8E8;

  h3 {
    font-weight: 500;
    font-size: 20px;
    color: #3B5BCD;
  }
`;

const BotonCerrar = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: .3s ease all;
  border-radius: 5px;
  color: black;
  top: 15px;
  right: 20px;

  &:hover {
    background: #f2f2f2;
  }


`;

