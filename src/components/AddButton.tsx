import React from "react";
import { useState, useEffect } from "react";
import Product from "./Modals/Product";
import path, { parse } from "path";

export default function AddButton({crearProduct, products, onLineaComanda, precio, precioValue, actualListOfProducts}:any){
const handleClick=()=>{
    crearProduct()
}
//mostrar el precio del producto en la comanda
const buttonClick =(n:string, p:number)=>{
    let precioArray:string[] = precio;
    console.log("supuestamente este es mi precio:::::",precioArray)
    if(precioArray.length>0 && p!==undefined){
        const numeroJunto:string  = precio.join('');
        let nuevoNum:number = parseFloat(numeroJunto)
        let finalP:number = nuevoNum*p;
        onLineaComanda(n,finalP.toFixed(2));
        precioValue()
    }else{
    onLineaComanda(n,p);
    }
}
//pasar la lista de actualListOfProducts a Product[]
const productsArray = actualListOfProducts as Product[];

    return (
        <div className="flex felx-wrap">
              {productsArray&&               
              productsArray.map((p, index)=>(
                <div key={index}><button onClick={()=>buttonClick(p.nombre,p.precio)} className="bg-[url('/pizza-draw.png')] hover:border-4  border-2 rounded-full w-20 h-20 flex justify-center items-center pb-2 text-2xl font-bold m-2 ">
                <img className="rounded-full" src={p.image}/>
             </button></div>
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