import React, {useRef, useState} from 'react'
import "./addVacanteForm.css";
import {Vacantes} from "../../models/Vacantes";
import Select from 'react-select';


const AddVacanteForm = ({vacante, setVacante,vacanteId, setVacanteId, habilidad}) => {


    const id = Math.random();
    const cantidad = useRef  (null);
    const descripcion = useRef  (null);
    const options = [];
    let vacantes1;
    let vacantesId;
    let habilidadVacante;
    let nuevaVacante=[];
    habilidad.forEach(function(habilidad, index) {
        options.push({value: `${habilidad.id}`, label: `${habilidad.nombre}`});
    });


    const [hab,setHab] = useState({selectedOption:null});
    const handleChange = (selectedOption) =>{
        setHab({selectedOption});
    }

    habilidadVacante = hab.selectedOption;

    const handleAdd = (e) => {
        if(cantidad.current.value.lengh<=0 && habilidadVacante.label.length<=0 && descripcion.current.value.length<=0){
            alert('completar vacantes');
        }
        else {
            ///vacante para mostrar en pantalla
          vacantes1 = new Vacantes(

                habilidadVacante.label,
                descripcion.current.value,
                cantidad.current.value)

            setVacante(vacan => [ ...vacan, vacantes1 ]);

          //vacante para guardar en la base
            vacantesId = new Vacantes(

                Number(habilidadVacante.value),
                descripcion.current.value,
                Number(cantidad.current.value)
                )

            nuevaVacante.push(vacantesId)

            setVacanteId(vacanId => [ ...vacanId, nuevaVacante.pop() ])

            console.log("vacantes nuevas en el add")
            console.log(nuevaVacante)
            console.log(vacanteId)


        }



    }



    return (

        <div>
            <div className="flex-inputs">
                <div className="flex-inputs-label">
                    <label className="label">Cantidad de vacantes</label>
                    <input type="number" min="1"  className="inputs" ref={cantidad} required/>
                </div>
                <div className="flex-inputs-label">

                    <label className="label">Habilidad</label>
                    <Select className="inputs" options={options} onChange={handleChange}></Select>

                </div>
                <div className="flex-inputs-label">
                    <label className="label">Descripción</label>
                    <input type="text"  className="inputs" ref={descripcion} required/>
                </div>
                <div className="flex-inputs-label">
                    <button className="agregarButton"  onClick={handleAdd}>+</button>


                </div>
            </div>

        </div>
    )
}

export default AddVacanteForm
