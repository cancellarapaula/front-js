export class Proyecto {
    nombre: string
    vacantesAbiertasColaboradores: number
    descripcion: string
    idDueño: number
    estado: boolean | undefined
    montoMinimoInversion: number


    constructor(nombre: string, vacantesAbiertasColaboradores: number, idDueño: number, descripcion: string, montoMinimoInversion: number, estado?: boolean | undefined) {
        this.nombre = nombre;
        this.vacantesAbiertasColaboradores = vacantesAbiertasColaboradores;
        this.idDueño = idDueño;
        this.estado = estado;
        this.descripcion = descripcion;
        this.montoMinimoInversion = montoMinimoInversion;
    }
}