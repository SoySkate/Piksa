import React from "react";
import { useState, useEffect } from "react";
import AddButton from "./AddButton";

export default function UserWork(){


    return(

        <div className="m-4">
            <div className="flex justify-evenly"><div></div>
            <div></div>
            <div>PIKSAKLAM</div></div>
            <div className="flex border-2 border-black h-screen justify-between">
                <div className=" w-2/5 border-r-2 border-black grid">
                    <div className=" border-black"><h1 className="border-b-4 border-black text-center   ">COMANDA</h1> 
                        <div className="m-2">"llistacomanda"</div>
                    </div>
                    <div className="flex justify-between border-t-4 border-black">
                        <div className="m-2">teclat numeric</div>
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
                        <div className="m-2">"lista de items""tipo de productes"" per seleccionar utilizar un grid creo" <AddButton/></div>
                    </div>
                    
                    <div className="border-t-4 border-black p-2">lista de botones para seleccionar tipos de productos"que el seleccionado se mostrara en el div de arriba"</div>
                    </div>
                </div>
        </div>
    )
}