import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PhotoIcon from '@mui/icons-material/Photo';
import "./modal.css";
import styled from "styled-components";
import {Component, useRef} from "react";
import {Proyecto} from "../../models/Proyecto";

const Modal = ({estado, cambiarEstado}) => {

    const nombre = useRef();
    const vacantes = useRef();
    const descripcion = useRef();
    const montoMinimo = useRef();
    const url = 'http://localhost:8082/v1/gestion-proyectos/proyectos';


    const handleClick = async (e) => {
        e.preventDefault();

        //TODO: obtener de variable de sesion
        let idDueño = 1;

        let proyecto = {
            nombre: nombre.current.value,
            vacantes: vacantes.current.value,
            idDueño,
            descripcion: descripcion.current.value,
            montoMinimo: montoMinimo.current.value
        }

        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(proyecto),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => console.log("lo lograste")).catch(err => console.log(err))

        console.log("lo lograste");


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
                                    <span className="component-input-label">Creador del proyecto</span>
                                    <input className="component-input-input" type='text' required/>
                                    <span className="component-input-label">Nombre del proyecto</span>
                                    <input className="component-input-input" type='text' ref={nombre} required/>
                                    <span className="component-input-label">Vacantes del proyecto</span>
                                    <input className="component-input-input" type="number" min="1" ref={vacantes}required/>
                                    <span className="component-input-label">Descripción del proyecto</span>
                                    <textarea className="component-input-input2  overflow-visible"
                                              ref={descripcion}required></textarea>
                                    <span className="component-input-label">Monto mínimo de inversión</span>
                                    <input className="component-input-input" type="number" min="1" ref={montoMinimo}required/>
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

                                    <button className="publicarButton"> Publicar </button>

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

