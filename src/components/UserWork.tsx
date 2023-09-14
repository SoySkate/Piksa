import React, { Component } from "react";
import { useState, useEffect } from "react";
import AddButton from "./AddButton";
import ProductButton from "./ProductButton";
import ListProductButton from "./ListProductButton";
import AddListButton from "./AddListButton";
import NumeroButton from "./NumeroButton";
import { text } from "stream/consumers";
import Product from "./Modals/Product";
import Decimal from "decimal.js";
import { isNumberObject } from "util/types";
import { Texturina } from "next/font/google";
import ListaProducts from "./Modals/ListaProducts";

export default function UserWork(){
    const [precio, setPrecio]=useState<string[]>([])
    //comanda((mejor que sea una lista de componentes))
    const [comanda, setComanda] = useState<string[]>([]);
    //lista de productos:
    const [listProducts, setListProducts] = useState<ListaProducts[]>([]);    
    //TextModalListaProductos
    const [textModal, setTextModal]=useState<string>('');
    const [mostrarModal, setMostrarModal] = useState(false);
    //Lista de productos
    const [products, setProducts]=useState<Product[]>([])
    const [mostrarModalProduct, setMostrarModalProduct] =useState(false)
    const [nameProduct, setNameProduct]=useState<string>('')
    const [priceProduct, setPriceProduct]=useState<string>('')
    const [textUrl, setTextUrl]=useState<string>('');
    //controlar el actual (el que se ha hecho click)
    const [actualListOfProducts, setActualListOfProducts] = useState<ListaProducts>()
    const [actualProduct, setActualProduct] = useState<Product>();
    
    //funcion de pasar numeros del teclado seleccionados
    const onClickButton=(n:string)=>{
        setPrecio([...precio,n])
       /* if(n===','){
            if(precio.includes(',')){

            }else{setPrecio(...precio,n)}
        }else{setPrecio(n)} */
    }
    const onLineaComanda=(text:string, price:number)=>{   
        if(comanda.includes(text)){

        }else{setComanda([...comanda, text+' __________ '+price+'€']);    }     
    }
    const abrirModal = () => {
        setMostrarModal(true);
      };
    const buttonAddList =()=>{
        //seria lo seu posar aqui la funcio de crear button       
        if(textModal!==''){
        const nuevaListProducts = new ListaProducts(listProducts.length+1,textModal)
        setListProducts([...listProducts,nuevaListProducts])
        }
        setTextModal('');
        setMostrarModal(false);
    }       
    const crearProduct=()=>{
        setMostrarModalProduct(true);                    
    }
    const closeModalProduct=()=>{
        setMostrarModalProduct(false); 
        const nuevoProducto= new Product(1,nameProduct, Number(priceProduct))
        if(nameProduct!==''&&priceProduct!==''){           
                if(textUrl!==''){
                nuevoProducto.image=textUrl
                setProducts([...products, nuevoProducto])
                console.log('este es mi nuevo producto',nuevoProducto)
                }
                else{                   
                   setProducts([...products, nuevoProducto])
                   console.log('este es mi nuevo producto CON FOTO',nuevoProducto)
                }
         }    
        setNameProduct('')
        setPriceProduct('')
        setTextUrl('')
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        //keyEventController Para precios
        const keyCode = event.keyCode || event.which;
        if (keyCode === 188) {
            // Si se presiona la coma (keyCode 188), cambia a punto y previene la acción por defecto
            event.preventDefault();
            setPriceProduct(priceProduct + '.');
        }
     
        if (
          (keyCode >= 48 && keyCode <= 57) || 
          keyCode === 8 || keyCode ===190 || keyCode === 9
        ) {
          // es correcto
        } else {
            //no es correcto---> 'evitar la tecla'
          event.preventDefault();
        }
      }
      const precioValue=()=>{
        setPrecio([])
      }
      const mostrarProductosLista=(listP:ListaProducts)=>{
        console.log("aqui hago las cosas para mostrar los productos")
        //ESTO ES VIABLE?:
        //<AddButton listaP={listaP}>
        setActualListOfProducts(listP)        
      }
    return(

        <div className="m-4">
            <div className="flex justify-evenly"><div></div>
            <div></div>
            <div>PIKSAKLAM</div></div>            
            <div className="flex border-2 border-black h-screen justify-between">
            
                <div className=" w-2/5 border-r-2 border-black grid">
                    <div className="bg-white border-black"><h1 className="border-b-4 border-black text-center   ">COMANDA</h1> 
                        <div className="  p-4 w-[450px] h-[265px] overflow-auto">
                            <ul className="">
                            {comanda.map((linea, index)=>(
                                  <li key={index}>{linea}</li>
                            ))}                            
                            </ul>
                        </div>
                        <p>{precio}</p>
                    </div>
                    <div className="flex justify-between border-t-4 border-black">
                        <div className="m-2">"aqui hacer una funcion para agregar tantos <NumeroButton onClickButton={onClickButton} /> hasta 9 y añadirlo"</div>
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
                    {mostrarModalProduct&&(<div className="bg-green-700 h-60 rounded flex flex-col justify-evenly items-center">                      
                    <h3 className="text-sm underline ">Nombre del Producto:</h3>
                    <input className="m-2" type="text" value={nameProduct} onChange={(e)=>setNameProduct(e.target.value)}/>
                    <h3 className="text-sm underline ">Precio del Producto:</h3>
                    <input onKeyDown={handleKeyDown} className="m-2" type="text" value={priceProduct} onChange={(e)=>setPriceProduct(e.target.value)}/>
                    <h3 className="text-sm underline ">Url de la imagen:</h3>
                    <input className="m-2" type="text" value={textUrl} onChange={(e)=>setTextUrl(e.target.value)}/>                  
                    <button onClick={closeModalProduct} className="  text-black text-xl hover:text-white">Crear Producto</button>
                    </div>)}
                    {/*Supuestamente aqui deberia visualizar la lista de productos (<AddButton/>)
                    O llamar cada AddButton que le pertenezca a la lista selecioanda de (<AddListButton>)*/}           
                    <AddButton crearProduct={crearProduct} products={products} onLineaComanda={onLineaComanda} precio={precio} precioValue={precioValue} actualListOfProducts={actualListOfProducts}/></div>
                    </div>
                    
                    <div className="border-t-4 border-black p-2 overflow-auto ">
                    {mostrarModal&&(<form onSubmit={buttonAddList} action=""><div className="bg-blue-500 h-40 rounded flex flex-col justify-evenly items-center">                       
                        <h3 className="text-sm underline ">Escriba el nombre de la lista:</h3>
                    <input className="m-2" type="text" value={textModal} onChange={(e)=>setTextModal(e.target.value)}/>
                    <button type="submit" className="text-black text-xl hover:text-white">Crear Lista</button>
                </div></form>)}
                   <AddListButton abrirModal={abrirModal} listProducts={listProducts} mostrarProductosLista={mostrarProductosLista}/>            
                    </div>
                </div>
            </div>
        </div>
    )
}