import React from "react";
import { useState, useEffect } from "react";
import AddButton from "./AddButton";
import ProductButton from "./ProductButton";
import ListProductButton from "./ListProductButton";
import AddListButton from "./AddListButton";
import NumeroButton from "./NumeroButton";

export default function UserWork(){
    const onClickButton=()=>{
        
    }

    return(

        <div className="m-4">
            <div className="flex justify-evenly"><div></div>
            <div></div>
            <div>PIKSAKLAM</div></div>
            <div className="flex border-2 border-black h-screen justify-between">
                <div className=" w-2/5 border-r-2 border-black grid">
                    <div className=" border-black"><h1 className="border-b-4 border-black text-center   ">COMANDA</h1> 
                        <div className="m-2">
                            <ul>
                            <li>- Clasica___________________________12.30€</li>
                            <li>- Marinera___________________________14.30€</li>
                            <li>- PikaKlam___________________________13.30€</li>
                            <li>- Pazzo___________________________11.30€</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between border-t-4 border-black">
                        <div className="m-2">"aqui hacer una funcion para agregar tantos <NumeroButton numero={2} onClick={onClickButton} /> hasta 9 y añadirlo"</div>
                        <div className="border-l-2 border-black p-2">buttons rapids</div>
                    </div>
                </div>
                <div className=" w-3/5 grid">
                    <div className="">
                        <div className=" flex justify-evenly border-b-4 border-black ">
                            <div>ItemB 1</div>
                            <div>ItemB 2</div>
                            <div>ItemB 3</div>
                            <div>ItemB 4</div>
                        </div>
                        <div className="m-2 flex flex-wrap"> 
                        <ProductButton/><ProductButton/><ProductButton/><ProductButton/><ProductButton/><AddButton/></div>
                    </div>
                    
                    <div className="border-t-4 border-black p-2 flex flex-wrap overflow-auto ">
                    <ListProductButton/><ListProductButton/><ListProductButton/><AddListButton/>
                    </div>
                </div>
            </div>
        </div>
    )
}