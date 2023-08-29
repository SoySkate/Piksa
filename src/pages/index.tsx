import Image from 'next/image';
import React from "react"
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { useContext } from "react";
import User from '@/components/Modals/User';
import {DataContext} from '../context/DataContext';
import { useRouter } from 'next/router';
import { AuthContext, useAuth } from '@/context/AuthContext';

export default function Home() {
  const exampleContext = useContext(DataContext) as { userList: User[], setUserList: React.Dispatch<React.SetStateAction<User[]>> };
  const router = useRouter();
  const {setVerificacionExitosa}:any = useAuth();
  const [loginUser, setLoginUser] = useState<User>({
    id:1,
    nombre: '',
    password: '',
  });
  //  const [verificacionExitosa, setVerificacionExitosa] = useState('false');
  const [alert, setAlert] = useState('');

  let intID = loginUser.id;
   const handleLoginSubmit =(event: React.FormEvent) => {
     event.preventDefault();
     if(loginUser.nombre && loginUser.password !== ''){
       setLoginUser({...loginUser});
       exampleContext.userList.map(e=>{
        //Esto es muy poco seguro demomento lo hago asi
        if(e.nombre===loginUser.nombre&&e.password === loginUser.password){
            console.log('aqui entras en el login pq coinciden los datos')
             setVerificacionExitosa(true);
            router.push(`/user/${loginUser.id}`);
        }else{setAlert('Usuario o contraseña incorrectas.')}
       })
     }
     console.log(loginUser);
   };
   const registerPage=()=>{
    router.push('/register');
   };
  return (
  <main className='overflow-hidden w-screen h-screen flex justify-evenly items-center'>
    <div></div>
    <div>Verificacion:/*no le paso nada*/</div>
    <div></div>
    <div>      
      <div className='flex flex-col items-center space-y-8 mt-8 '>
        <h2 className='font-bold text-2xl font-mono'>Login</h2>
        <form onSubmit={handleLoginSubmit} className='my-3'>
          <div className='flex flex-col items-center space-y-8 '>
            <div className='flex flex-col'>
              <label className='mx-2 text-sm font-serif'>User Name:</label>
              <input id='nameInput' className="rounded pl-2" type='text' value={loginUser.nombre} onChange={(e)=>setLoginUser({...loginUser,nombre: e.target.value})}></input>
            </div>
            <div className='flex flex-col'>
              <label className='mx-2 text-sm font-serif'>Password:</label>
              <input id='passwordInput' className="rounded pl-2" type="password" value={loginUser.password} onChange={(e)=>setLoginUser({...loginUser, password:e.target.value})} />
            </div>          
            <button className='bg-green-300 rounded-2xl px-4 py-1 my-2 font-mono font-semibold' type="submit">Iniciar Sesión</button>           
          </div>         
        </form>        
        <div> <button className='bg-blue-300 rounded-2xl px-4 py-1 my-2 font-mono font-semibold' onClick={registerPage}>Registrarse</button></div>
        <div>{alert ===''?<p></p>:<p className='text-xs text-red-600'>{alert}</p>} </div>
      </div>
    </div>  
  </main>
  );
}
