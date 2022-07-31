export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripcionE: string;

    constructor(nombre: string,apellido: string, descripcionE: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcionE = descripcionE;
    }
}