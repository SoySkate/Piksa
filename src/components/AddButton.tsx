import React from "react";
import { useState, useEffect } from "react";

export default function AddButton(){

    return (
        <div>
            <div className="hover:border-4 hover:text-white border-2 rounded-full w-14 h-14 flex text-3xl font-bold m-2 flex justify-center items-center bg-green-600 ">
                +
            </div>
        </div>
    )
}