export default class User{
    id:number;
    nombre:string;
    password:string;

    constructor(id:number=0,nombre:string='',password:string=''){
        this.id =id;
        this.nombre= nombre;
        this.password = password;
    }
}