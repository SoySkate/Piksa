import React from "react";

export default function ItemComanda({product,deleteItemComanda }:any){

    return(
        <div className="relative"> {product.nombre}------{product.precio} €  <button onClick={deleteItemComanda(product)} className="bg-red-500 absolute right-0">Delete</button></div>
    )
}