import { strict } from "assert";
import Decimal from "decimal.js";
import { list } from "postcss";
import React from "react";
import { useState, useEffect } from "react";
import ListProductButton from "./ListProductButton";
import Product from "./Modals/Product";

export default function AddListButton({abrirModal, listProducts, mostrarProductosLista}:any){
    const openModal=()=>{
        abrirModal();        
    }
    //aquesta list te de venir del DBContext bro
    let arrayStrings:Product[]=listProducts as Product[];
  

    return (
        <div className="flex flex-wrap">
            {arrayStrings.map((listP, index)=>(
                <ListProductButton index={index} listP={listP} mostrarProductosLista={mostrarProductosLista}/>
            ))}
            <div className="rounded-full w-20 h-20 flex justify-center items-center text-3xl  font-bold m-2 ">
            <button onClick={openModal} className="hover:border-4 hover:text-white mt-2 border-2 rounded-full w-10 h-10 flex justify-center items-center pb-2 text-3xl font-bold m-2 bg-blue-600 ">
                +            
            </button>
            </div>            
        </div>
   
    )
}