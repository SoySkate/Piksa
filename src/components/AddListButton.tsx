import React from "react";
import { useState, useEffect } from "react";

export default function AddListButton(){

    return (
        <div>
            <div className=" w-14 h-14 flex pb-2 font-bold m-2 ">
            <button className="hover:border-4 hover:text-white mt-2 border-2 rounded-full w-10 h-10 flex justify-center items-center pb-2 text-3xl font-bold m-2 bg-blue-600 ">
                +            
            </button>
            </div>
        </div>
    )
}