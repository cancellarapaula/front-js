export class Emprendedor {
    email: string
    password: string
    nombre: string | undefined
    apellido: string | undefined
    dni: number | undefined


    constructor(email: string, password: string, nombre?: string, apellido?: string, dni?: number) {
        this.email = email
        this.password = password
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
    }
}