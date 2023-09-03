import React from "react";
import { useState, useEffect } from "react";

export default function ProductButton(){

    return (
        <div>
            <button className="bg-[url('/pizza-draw.png')] hover:border-4  border-2 rounded-full w-20 h-20 flex justify-center items-center pb-2 text-3xl font-bold m-2 ">
               <img className="rounded-full" src="/pizza-draw.png"/>
            </button>
        </div>
    )
}