import Product from "./Product";

export default class ListaProducts{
    id:number;
    nombre: string;
    products:Product[];

    constructor(id:number=0,nombre:string='noname', products:Product[]=[new Product(0,'defaultProduct',10.10)]){
        this.id=id;
        this.nombre=nombre;
        this.products=products
    }
}