import Product from "./Product";

export default class ListaProducts{
    id:number;
    nombre: string;
    products:Product[];

    constructor(id:number=0,nombre:string='noname', products:Product[]=[]){
        this.id=id;
        this.nombre=nombre;
        this.products=products
    }
}