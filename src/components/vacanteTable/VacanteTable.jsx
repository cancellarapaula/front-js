import React from 'react';
import "./vacanteTable.css";
import {
    Table,
    Container,

} from "reactstrap";


const VacanteTable = ({vacante}) =>{



    return(
        <Container>

            <Table>
                <thead>
                <tr>
                    <th>Vacante</th>
                    <th>Habilidad</th>
                    <th>Descripción</th>
                    <th>Acciones</th>

                </tr>
                </thead>
                <tbody>
                {vacante.length > 0 ? (
                    vacante.map((v) => (
                        <tr key={v.habilidadId}>
                            <td>{v.cantidadRequerida}</td>
                            <td>{v.habilidadId}</td>
                            <td>{v.descripcion}</td>
                            <td>

                                <button className="accionesBottom">Borrar</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={4}>Sin vacantes</td>
                    </tr>

                )}
                </tbody>
            </Table>
        </Container>
    )
}
export {VacanteTable}
