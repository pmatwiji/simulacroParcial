export class Actor {
    public id:number;
    public nombre:string;
    public apellido:string;
    public sexo : string;
    public fechaNacimiento : string;
    public fotoActor : string;
    public nacionalidad: string;

    constructor(id:number,nombre:string,apellido:string,sexo:string,fechaNacimiento:string,fotoActor:string, nacionalidad:string){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.sexo=sexo;
        this.fechaNacimiento = fechaNacimiento;
        this.fotoActor = fotoActor;
        this.nacionalidad = nacionalidad;
    }
}
