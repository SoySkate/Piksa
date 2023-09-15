import React from "react";
import { useState, useEffect } from "react";

export default function ProductButton({onLineaComanda, index, buttonClick, product}:any){
    const handleClick = (n:string, p:number) => {
        console.log("Devolver un valor ProductButton");
        onLineaComanda(n,p);
    }

    return (    
           <div key={index}><button onClick={()=>buttonClick(product.nombre,product.precio, product)} className="bg-[url('/pizza-draw.png')] hover:border-4  border-2 rounded-full w-20 h-20 flex justify-center items-center pb-2 text-2xl font-bold m-2 ">
                <img className="rounded-full" src={product.image}/>
             </button></div>
    )
}