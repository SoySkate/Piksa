import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import User from '@/components/Modales/User';


export default function Home() {
  const [loginUser, setLoginUser] = useState<User>({
    username: '',
    password: '',
  });


  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Lógica para el inicio de sesión
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
              <input className="rounded pl-2" type='text' value={loginUser.username} onChange={(e)=>setLoginUser({...loginUser,username: e.target.value})}></input>
            </div>
            <div className='flex flex-col'>
              <label className='mx-2 text-sm font-serif'>Password:</label>
              <input className="rounded pl-2" type="password" value={loginUser.password} onChange={(e)=>setLoginUser({...loginUser, password:e.target.value})} />
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
