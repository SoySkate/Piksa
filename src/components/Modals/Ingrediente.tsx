export default class Ingrediente{
    id:number;
    nombre:string;
    precio:number;

    constructor(id:number=0, nombre:string='',precio:number=0.00){
        this.id=id;
        this.nombre=nombre;
        this.precio=precio;
    }
}
