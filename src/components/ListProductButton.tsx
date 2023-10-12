import React from "react";
import { useState, useEffect } from "react";
import ListaProducts from "./Modals/ListaProducts";
import { list } from "postcss";

export default function ListProductButton({listP, index, mostrarProductosLista, modalDeleteList, onclickDeleteP}:any){
    const mostrarProductos=(listP:ListaProducts)=>{
        console.log("DEBERIA crear una lista con este index:", index)
        console.log(listP.products)
        //setActualListOfProducts how?
        //Aqqui llamo la funcion que se pasa en AddListButton
        mostrarProductosLista(listP)
        
    }
    
    return (
               <div className="relative" key={index}> <button onClick={()=>mostrarProductos(listP)} className="hover:border-4 bg-white border-2 border-black rounded-xl w-14 h-14 flex justify-center items-center pb-2 font-bold m-4 ">
                {listP.nombre}
            </button>
            {modalDeleteList&&
                 <button onClick={()=>onclickDeleteP(listP)} className="hover:border-4 absolute bottom-0 right-0 hover:text-white border-2 rounded-full w-6 h-6 flex justify-center items-center pb-2 text-3xl font-bold m-2 bg-red-600 ">-</button>}
            </div>
    )
}