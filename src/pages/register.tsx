import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import User from "@/components/Modals/User";
import {DataContext} from '../context/DataContext';
//importamos el context


export default function Register(){
  //creamos la const de la funcion que queremos llamar del context
  //const exampleContext = useContext(DataContext) as any
  const exampleContext = useContext(DataContext) as { userList: User[], setUserList: React.Dispatch<React.SetStateAction<User[]>> };

    const [registerUser, setRegisterUser] = useState<User>({
     id:1,
     nombre: '',
     password: '',
   });
   const [alertText, setAlertText] =useState<string>('');//este estado se pira muy rapido mhh maybe debo usar 
   //el UseEffect?
   const[confirmPass, setConfirmPass]=useState<string>('');

   let intID = registerUser.id;
    const handleRegisterSubmit = (event: React.FormEvent) => {      
        //event.preventDefault();
        if(registerUser.nombre !=='' && registerUser.password !== '' && confirmPass !==''){
          if(registerUser.password === confirmPass){
            setRegisterUser({...registerUser, id:intID+1});
            setAlertText('Nashe registrandosee')
          //aqui tiene que ir el setUserList y añadir el registerUser
          exampleContext.setUserList(prevUserList => [...prevUserList, {
            id:registerUser.id,
            nombre:registerUser.nombre,
            password: registerUser.password 
          }])
          }else{setAlertText('Deben coincidir las contraseñas.')}     
        }else{setAlertText('Rellene todos los campos porfavor.')}
      
        // Lógica para el registro de usuario
      };
      
      useEffect(() => {
        // Aquí puedes realizar acciones después de que exampleContext.userList cambie.
        console.log('User list updated:', exampleContext.userList);
      }, [exampleContext.userList]);
    
    return(
    <div className=" overflow flex justify-evenly items-center w-screen h-screen">
      <div></div>
     <div className='bg-white rounded px-3'>
     {exampleContext.userList.map((user:User, index:number) => (
    <div key={index} className='bg-white rounded px-3'>
      <p>ID: {user.id}</p>
      <p>Nombre: {user.nombre}</p>
      <p>Password: {user.password}</p>
    </div>
  ))}    
     </div>
      <div></div>
      <div>
             <form onSubmit={handleRegisterSubmit} className='my-3 flex flex-col items-center space-y-8'>
        <h2 className='font-bold text-2xl font-mono'>Registrarse</h2>
          <div className='flex flex-col items-center space-y-8'> 
            <div className='flex flex-col'>             
              <label className='mx-2 text-sm font-serif '>Register Name:</label>
              <input className="rounded pl-2" type="text" placeholder="username" value={registerUser.nombre} onChange={(e)=>setRegisterUser({...registerUser,nombre:e.target.value})}/>
            </div>
            <div className='flex flex-col'>
              <label className='mx-2 text-sm font-serif '>Register Password:</label>
              <input className="rounded pl-2" type="password" placeholder="password" value={registerUser.password} onChange={(e)=>setRegisterUser({...registerUser, password:e.target.value})}/>
            </div>      
            <div className='flex flex-col'>
              <label className='mx-2 text-sm font-serif '>Confirm Password:</label>
              <input className="rounded pl-2" type="password" placeholder="confirm password" value={confirmPass} onChange={(e)=>setConfirmPass(e.target.value)}/>
            </div>             
            <button className='bg-blue-300 rounded-2xl px-4 py-1 my-2 font-mono font-semibold' type="submit">Registrarse</button>
            <p>{alertText}</p>
          </div>         
        </form>
        </div>
    </div>
    );
}