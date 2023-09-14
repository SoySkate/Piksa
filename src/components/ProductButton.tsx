import React from "react";
import { useState, useEffect } from "react";

export default function ProductButton({onLineaComanda}:any){
    const handleClick = (n:string, p:number) => {
        console.log("Devolver un valor ProductButton");
        onLineaComanda(n,p);
    }

    return (
        <div className="flex flex-wrap">
           
        </div>
    )
}