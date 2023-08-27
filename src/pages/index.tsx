import Image from 'next/image';
import React from "react"
import { Inter } from 'next/font/google';
import { useState } from 'react';
import User from '@/components/Modals/User';
import {createClient} from '@supabase/supabase-js';
import { identify } from '@amplitude/analytics-node';
import Data from '@/context/data';




//const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default function Home() {
  const [loginUser, setLoginUser] = useState<User>({
    id:1,
    nombre: '',
    password: '',
  });

  let intID = loginUser.id;
   const handleLoginSubmit =async (event: React.FormEvent) => {
     event.preventDefault();
     if(loginUser.nombre && loginUser.password !== ''){
       setLoginUser({...loginUser, id:intID+1});
      
     }     
     //controla aqui el nameInput
     
     console.log("supuestamente iniciandosesion: ",loginUser);
   };


  return (
  <main className='overflow-hidden w-screen h-screen flex justify-evenly items-center'>
    <div></div>
    <div></div>
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
            {/* Campos de entrada para el inicio de sesión */}
            <button className='bg-green-300 rounded-2xl px-4 py-1 my-2 font-mono font-semibold' type="submit">Iniciar Sesión</button>
          </div>         
        </form>        
        <div></div>
        <div></div>
      </div>
    </div>  
  </main>
  );
}
