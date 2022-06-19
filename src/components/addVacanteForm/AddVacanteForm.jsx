import React, {useRef, useState} from 'react'
import "./addVacanteForm.css";
import {Vacantes} from "../../models/Vacantes";
import Select from 'react-select';


const AddVacanteForm = ({vacante, setVacante,vacanteId, setVacanteId, habilidad}) => {


    const cantidad = useRef  (null);
    const descripcion = useRef  (null);
    const options = [];
    let vacantesNombre;
    let vacantesId;
    let habilidadVacante;
    let nuevaVacante=[];

    //guardo los nombres de las habilidades en la lista desplegable como "options"
    habilidad.forEach(function(habilidad, index) {
        options.push({value: `${habilidad.id}`, label: `${habilidad.nombre}`});
    });

    ///hook para manejar las opciones de las habilidades
    const [hab,setHab] = useState({selectedOption:null});
    const handleChange = (selectedOption) =>{
        setHab({selectedOption});
    }

    habilidadVacante = hab.selectedOption;



    const handleAdd = (e) => {

        if(document.getElementById("cantidad").value==="" ||document.getElementById("habil").length === "" || document.getElementById("descrip").value==="" ){
            e.preventDefault();
            alert('completar vacantes');
        }
        else {
            ///vacante para mostrar en pantalla
          vacantesNombre = new Vacantes(

                habilidadVacante.label,
                descripcion.current.value,
                cantidad.current.value)

            setVacante([ ...vacante, vacantesNombre ]);

          //vacante para guardar en la base
            vacantesId = new Vacantes(

                Number(habilidadVacante.value),
                descripcion.current.value,
                Number(cantidad.current.value)
                )

            nuevaVacante.push(vacantesId)
            setVacanteId([...vacanteId, nuevaVacante.pop() ])



        }



    }



    return (

        <div>
            <div className="flex-inputs">
                <div className="flex-inputs-label">
                    <label className="label">Cantidad de vacantes</label>
                    <input type="number" min="1" id="cantidad" className="inputs" ref={cantidad} required/>
                </div>
                <div className="flex-inputs-label">

                    <label className="label">Habilidad</label>
                    <Select className="inputsSelect" id="habil" options={options} onChange={handleChange} required></Select>

                </div>
                <div className="flex-inputs-label">
                    <label className="label">Descripción</label>
                    <input type="text" id="descrip" className="inputs" ref={descripcion} required/>
                </div>
                <div className="flex-inputs-label">
                    <button className="agregarButton"  onClick={handleAdd}>+</button>


                </div>
            </div>

        </div>
    )
}

export default AddVacanteForm
