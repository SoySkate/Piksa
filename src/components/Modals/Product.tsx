import Ingrediente from "./Ingrediente";

export default class Product{
    id:number;
    nombre:string;
    precio:number;
    listaIngredientes:Ingrediente[]

    constructor(id:number=0,nombre:string='', precio:number, listaIngredientes:Ingrediente[]){
        this.id=id;
        this.nombre = nombre;
        this.precio=precio;
        this.listaIngredientes=listaIngredientes;
    }
}