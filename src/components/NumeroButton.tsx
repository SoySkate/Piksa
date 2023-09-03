import React from "react";
import { useState, useEffect } from "react";

export default function NumeroButton({onClick}:any, {numero}:any){
    const handleClick = () => {
        console.log("NúmeroButton hizo clic");
        onClick();
    }
    return (
        <div>            
            <button onClick={handleClick} className="hover:border-4 text-white border-2 rounded-full w-14 h-14 flex justify-center items-center  text-3xl font-bold m-2 bg-black">
                {numero}           
            </button>
        </div>
    )
}