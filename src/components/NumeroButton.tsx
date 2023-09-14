import React from "react";
import { useState, useEffect } from "react";
import UserWork from "./UserWork";

export default function NumeroButton({onClickButton}:any){
    const handleClick = (n:string) => {
        console.log("Devolver un valor Numero Button");
        onClickButton(n);
    }
    return (
        <div className="flex flex-wrap">            
            <button onClick={()=>handleClick('1')} className="hover:border-4 text-white border-2 rounded-full w-14 h-14 flex justify-center items-center  text-3xl font-bold m-2 bg-black">
                1         
            </button>
            <button onClick={()=>handleClick('2')} className="hover:border-4 text-white border-2 rounded-full w-14 h-14 flex justify-center items-center  text-3xl font-bold m-2 bg-black">
                2
            </button>
            <button onClick={()=>handleClick('3')} className="hover:border-4 text-white border-2 rounded-full w-14 h-14 flex justify-center items-center  text-3xl font-bold m-2 bg-black">
                3         
            </button>
            <button onClick={()=>handleClick('4')} className="hover:border-4 text-white border-2 rounded-full w-14 h-14 flex justify-center items-center  text-3xl font-bold m-2 bg-black">
                4    
            </button>
            <button onClick={()=>handleClick('5')} className="hover:border-4 text-white border-2 rounded-full w-14 h-14 flex justify-center items-center  text-3xl font-bold m-2 bg-black">
                5         
            </button>
            <button onClick={()=>handleClick('6')} className="hover:border-4 text-white border-2 rounded-full w-14 h-14 flex justify-center items-center  text-3xl font-bold m-2 bg-black">
                6        
            </button>
            <button onClick={()=>handleClick('7')} className="hover:border-4 text-white border-2 rounded-full w-14 h-14 flex justify-center items-center  text-3xl font-bold m-2 bg-black">
                7         
            </button>
            <button onClick={()=>handleClick('8')} className="hover:border-4 text-white border-2 rounded-full w-14 h-14 flex justify-center items-center  text-3xl font-bold m-2 bg-black">
                8         
            </button>
            <button onClick={()=>handleClick('9')} className="hover:border-4 text-white border-2 rounded-full w-14 h-14 flex justify-center items-center  text-3xl font-bold m-2 bg-black">
                9      
            </button>
            <button onClick={()=>handleClick('0')} className="hover:border-4 text-white border-2 rounded-full w-14 h-14 flex justify-center items-center  text-3xl font-bold m-2 bg-black">
                0         
            </button>
            <button onClick={()=>handleClick(',')} className="hover:border-4 text-white border-2 rounded-full w-14 h-14 flex justify-center items-center  text-3xl font-bold m-2 bg-black">
                ,        
            </button>
           
        </div>
    )
}