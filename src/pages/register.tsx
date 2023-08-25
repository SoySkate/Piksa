import React from "react";
import { useState } from "react";
import User from "@/components/Modals/User";
import Data from "@/context/data";

export default function Register(){

    const [registerUser, setRegisterUser] = useState<User>({
     id:1,
     nombre: '',
     password: '',
   });
   const [alertText, setAlertText] =useState<string>('');//este estado se pira muy rapido mhh maybe debo usar 
   //el UseEffect?
   const[confirmPass, setConfirmPass]=useState<string>('');

   let intID = registerUser.id;
    const handleRegisterSubmit = (/*event: React.FormEvent*/) => {      
        //event.preventDefault();
        if(registerUser.nombre !=='' && registerUser.password !== '' && confirmPass !==''){
          if(registerUser.password === confirmPass){
            setRegisterUser({...registerUser, id:intID+1});
            setAlertText('Nashe registrandosee')
          }    else{setAlertText('Deben coincidir las contraseñas.')}     
        }else{setAlertText('Rellene todos los campos porfavor.')}
      
        // Lógica para el registro de usuario
      };
 
      const llamarFunc=()=>{

        //pasar la funcio data addUser aqui(registerComponent) i aixi ferho amb el handleclick també
      // Data {...registerUser}.handleclick();
       }
 /*var per comprobar si la pass es correcte amb lanterior*/
    return(
    <div className=" overflow flex justify-evenly items-center w-screen h-screen">
      <div></div>
      <div className='bg-white rounded px-3'><Data {...registerUser}/></div>
      <div></div>
      <div>
             <form /*onSubmit={handleRegisterSubmit}*/ className='my-3 flex flex-col items-center space-y-8'>
        <h2 className='font-bold text-2xl font-mono'>Registrarse</h2>
          <div className='flex flex-col items-center space-y-8'> 
            <div className='flex flex-col'>             
              <label className='mx-2 text-sm font-serif '>Register Name:</label>
              <input className="rounded pl-2" type="text" value={registerUser.nombre} onChange={(e)=>setRegisterUser({...registerUser,nombre:e.target.value})}/>
            </div>
            <div className='flex flex-col'>
              <label className='mx-2 text-sm font-serif '>Register Password:</label>
              <input className="rounded pl-2" type="password" value={registerUser.password} onChange={(e)=>setRegisterUser({...registerUser, password:e.target.value})}/>
            </div>      
            <div className='flex flex-col'>
              <label className='mx-2 text-sm font-serif '>Confirm Password:</label>
              <input className="rounded pl-2" type="password" value={confirmPass} onChange={(e)=>setConfirmPass(e.target.value)}/>
            </div>             
            <button className='bg-blue-300 rounded-2xl px-4 py-1 my-2 font-mono font-semibold' onClick={handleRegisterSubmit} type="submit">Registrarse</button>
            <p>{alertText}</p>
          </div>         
        </form>
        </div>
    </div>
    );
}