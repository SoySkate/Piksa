import React from "react";
import { useState, useEffect } from "react";

export default function AddButton(){

    return (
        <div>
            <div className="rounded-full w-20 h-20 flex justify-center items-center text-3xl  font-bold m-2">
            <button className="hover:border-4 hover:text-white border-2 rounded-full w-10 h-10 flex justify-center items-center pb-2 text-3xl font-bold m-2 bg-green-600 ">
                +            
            </button>
            </div>
        </div>
    )
}