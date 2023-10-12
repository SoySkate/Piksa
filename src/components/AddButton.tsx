import React from "react";
import { useState, useEffect } from "react";
import Product from "./Modals/Product";
import path, { parse } from "path";
import ListaProducts from "./Modals/ListaProducts";
import ProductButton from "./ProductButton";

export default function AddButton({crearProduct, modalDeleteP, onLineaComanda, precio, precioValue, actualListOfProducts, selectActualProduct}:any){
const handleClick=()=>{
    crearProduct()
}
//mostrar el precio del producto en la comanda
const buttonClick =(product:Product)=>{
    //le paso el product para poder seleccionar el ActuaLProduct
    selectActualProduct(product)
    let precioArray:string[] = precio;
    console.log("supuestamente este es mi precio:::::",precioArray)
    if(precioArray.length>0 && product.precio!==undefined){
        const numeroJunto:string  = precio.join('');
        let nuevoNum:number = parseFloat(numeroJunto)
        let finalP:number = nuevoNum*product.precio;
        product.precio=finalP;
        product.precio.toFixed(2);
        onLineaComanda(product);
        precioValue()
    }else{
    onLineaComanda(product);
    }
}
const [clicked, setclicked] =useState<Boolean>(false)
//pasar la lista de actualListOfProducts a Product[]
let productsArray = actualListOfProducts as ListaProducts;
//delete selected Product
const onclickDelete=(product:Product)=>{
    productsArray.products = productsArray.products.filter((p)=>p.id!==product.id)  
    setclicked(true)
}


    return (
        <div className="flex flex-wrap relative">
              {productsArray&&               
              productsArray.products.map((product, index)=>(
                <ProductButton clicked={clicked} buttonClick={buttonClick} onclickDelete={onclickDelete} modalDeleteP={modalDeleteP} index={index} product={product} onLineaComanda={onLineaComanda}/>                
              ))}               
              <ul>
              </ul>
            <div className="rounded-full w-20 h-20 flex justify-center items-center text-3xl  font-bold m-2">
            <button onClick={handleClick} className="hover:border-4 hover:text-white border-2 rounded-full w-10 h-10 flex justify-center items-center pb-2 text-3xl font-bold m-2 bg-green-600 ">
                +            
            </button>
            </div>
        </div>
    )
}