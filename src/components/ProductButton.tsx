import React from "react";
import { useState, useEffect } from "react";

export default function ProductButton({onLineaComanda, index, buttonClick, product, modalDeleteP, onclickDelete}:any){
    const handleClick = (n:string, p:number) => {
        console.log("Devolver un valor ProductButton");
        onLineaComanda(n,p);
    }
 

    return (    
           <div className="relative" key={index}><button onClick={()=>buttonClick(product)} className="bg-[url('/pizza-draw.png')] hover:border-4  border-2 rounded-full w-20 h-20 flex justify-center items-center pb-2 text-2xl font-bold m-2 ">
                <img className="rounded-full w-18 h-16" src={product.image}/>               
             </button>
             {modalDeleteP&&
                <button onClick={()=>onclickDelete(product)} className="hover:border-4 absolute bottom-0 right-0 hover:text-white border-2 rounded-full w-6 h-6 flex justify-center items-center pb-2 text-3xl font-bold m-2 bg-red-600 ">-</button>}
            </div>
    )
}