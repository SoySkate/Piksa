import React from "react";
import { useState, useEffect } from "react";

export default function ListProductButton(){

    return (
        <div>
            <button className="hover:border-4 bg-white  border-2 border-black rounded-xl w-14 h-14 flex justify-center items-center pb-2 font-bold m-2 ">
               <h3>Pizzas</h3>
            </button>
        </div>
    )
}