import Ingrediente from "./Ingrediente";

export default class Product{
    id:number;
    nombre:string;
    precio:number;
    image:string

    constructor(id:number=0,nombre:string='', precio:number, image:string='/pizza-draw.png'){
        this.id=id;
        this.nombre = nombre;
        this.precio=precio;
        this.image=image;
    }
}