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
import ItemComanda from "./ItemComanda";

export default function UserWork(){
    const [precio, setPrecio]=useState<string[]>([])
    //comanda((mejor que sea una lista de componentes))
    let [comanda, setComanda] = useState<Product[]>([]);
    //lista de productos que ha de venir del DBContext:
    const [listProducts, setListProducts] = useState<ListaProducts[]>([]);    
    //TextModalListaProductos
    const [textModal, setTextModal]=useState<string>('');
    const [mostrarModal, setMostrarModal] = useState(false);
    //Lista de productos
    const [mostrarModalProduct, setMostrarModalProduct] =useState(false)
    const [nameProduct, setNameProduct]=useState<string>('')
    const [priceProduct, setPriceProduct]=useState<string>('')
    const [textUrl, setTextUrl]=useState<string>('');
    //ModalDelete
    const [modalDeleteP, setModalDeleteP] = useState<boolean>(false)
    const [modalDeleteList, setModalDeleteList] =useState<boolean>(false)
    //controlar el actual (el que se ha hecho click)
    const [actualListOfProducts, setActualListOfProducts] = useState<ListaProducts>()
    const [actualProduct, setActualProduct] = useState<Product>();
    //ID productos crear
    const [idP, setIdP] =useState<number>(1)
    
    //funcion de pasar numeros del teclado seleccionados
    const onClickButton=(n:string)=>{
        setPrecio([...precio,n])
    }
    const onLineaComanda=(product:Product)=>{   
        if(comanda.includes(product)){

        }else{setComanda([...comanda, product]);    }     
    }
    const abrirModal = () => {
        setMostrarModal(true);
      };
      //crea una lista de productos
    const buttonAddList =()=>{            
        if(textModal!==''){
        const nuevaListProducts = new ListaProducts(listProducts.length+1,textModal)
        setListProducts([...listProducts,nuevaListProducts])
        }
        setTextModal('');
        setMostrarModal(false);
        //aixo aqui no va gaire be
        if(listProducts.length>0){
            console.log("hay mas de uno en el array de ListaProducts")
            console.log(actualListOfProducts)
            setActualListOfProducts(listProducts[0])
            console.log('ACTUALITZAT: ',actualListOfProducts)
        }
    }       
    const crearProduct=()=>{
        setMostrarModalProduct(true);                    
    }
    const closeModalProduct=()=>{
        setMostrarModalProduct(false); 
        const nuevoProducto= new Product(idP,nameProduct, Number(priceProduct))
        setIdP(idP+1)
        if(nameProduct!==''&&priceProduct!==''){           
                if(textUrl!==''){//Aqui es con la foto que se le ha indicado
                nuevoProducto.image=textUrl
                actualListOfProducts?.products.push(nuevoProducto);                
                console.log('este es mi nuevo producto',nuevoProducto)
                }
                else{          
                    //aqui es con la foto default         
                    actualListOfProducts?.products.push(nuevoProducto);                                    
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
          keyCode === 8 || keyCode ===190 || keyCode === 9 || keyCode===13
        ) {
            if(keyCode===13){closeModalProduct()}
          // es correcto
        } else {
            //no es correcto---> 'evitar la tecla'
          event.preventDefault();
        }
       
      }
      const precioValue=()=>{
        setPrecio([])
      }
      //selecciono el actualProduct
      const selectActualProduct=(product:Product)=>{
        setActualProduct(product)
      }
      //selecciono la actualList of Products
      const mostrarProductosLista=(listP:ListaProducts)=>{
        setActualListOfProducts(listP)        
      }
      const deleteProductButton=()=>{
        console.log("AAccion de eliminar el producto")
        setModalDeleteP(!modalDeleteP)
        
      }
      const deleteListOfProducts=()=>{
        console.log("Accion de eliminar la LISTA de productos")
        setModalDeleteList(!modalDeleteList)
      }
      const deleteItemComanda=(product:Product)=>{
        console.log("esta es la puta comanda")
        comanda = comanda.filter((p)=>p.id!==product.id)
      }
    return(

        <div className="m-4">
            <div className="flex justify-evenly"><div></div>
            <div></div>
            <div>PIKSAKLAM(nombre del negocio)</div></div>            
            <div className="flex border-2 border-black h-screen justify-between">           
                <div className=" w-2/5 border-r-2 border-black grid">                    
                    <div className=" border-black"><h1 className="border-b-4 border-black text-center   ">COMANDA</h1> 
                        <div className="  p-4 h-[265px] overflow-auto">
                            <ul className="bg-black text-white font-bold">
                            {comanda.map((product, index)=>(
                                  <li key={index}><ItemComanda product={product} deleteItemComanda={deleteItemComanda}/></li>
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
                            <div>ItemB stadistica 1</div>
                            <div>ItemB profile 2</div>
                            <div>ItemB listaComandas 3</div>
                            <div>ItemB 4</div>
                        </div>                                         
                    <div className=" relative flex flex-wrap"> 
                    <button onClick={deleteProductButton} className="absolute right-0 top-0"><img className="h-8 w-8" src="/editImage.png" alt="Imagen De Botton De Editar" /></button>
                    {mostrarModalProduct&&(<div className="bg-green-700 h-60 rounded flex flex-col justify-evenly items-center">                      
                    <h3 className="text-sm underline ">Nombre del Producto:</h3>
                    <input className="m-2" type="text" value={nameProduct} onChange={(e)=>setNameProduct(e.target.value)}/>
                    <h3 className="text-sm underline ">Precio del Producto:</h3>
                    <input onKeyDown={handleKeyDown} className="m-2" type="text" value={priceProduct} onChange={(e)=>setPriceProduct(e.target.value)}/>
                    <h3 className="text-sm underline ">Dirección URL de la imagen:</h3>
                    <input className="m-2" type="text" value={textUrl} onChange={(e)=>setTextUrl(e.target.value)}/>                  
                    <button onClick={closeModalProduct} className="  text-black text-xl hover:text-white">Crear Producto</button>
                    </div>)}
                    {/*Supuestamente aqui deberia visualizar la lista de productos (<AddButton/>)
                    O llamar cada AddButton que le pertenezca a la lista selecioanda de (<AddListButton>)*/}           
                    <AddButton selectActualProduct={selectActualProduct} modalDeleteP={modalDeleteP} crearProduct={crearProduct} onLineaComanda={onLineaComanda} precio={precio} precioValue={precioValue} actualListOfProducts={actualListOfProducts}/></div>
                    </div>
                    
                    <div className="border-t-4 relative border-black p-2 overflow-auto ">
                    <button onClick={deleteListOfProducts} className="absolute right-0 top-0"><img className="h-8 w-8" src="/editImage.png" alt="Imagen De Botton De Editar" /></button>
                    {mostrarModal&&(<div><div className="bg-blue-500 h-40 rounded flex flex-col justify-evenly items-center">                       
                        <h3 className="text-sm underline ">Escriba el nombre de la lista:</h3>
                    <input className="m-2" onKeyDown={(e)=>{if(e.key==='Enter')buttonAddList()}} type="text" value={textModal} onChange={(e)=>setTextModal(e.target.value)}/>
                    <button onClick={buttonAddList} className="text-black text-xl hover:text-white">Crear Lista</button>
                </div></div>)}
                   <AddListButton abrirModal={abrirModal} modalDeleteList={modalDeleteList} listProducts={listProducts} mostrarProductosLista={mostrarProductosLista}/>            
                    </div>
                </div>
            </div>
        </div>
    )
}