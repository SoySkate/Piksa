import React from "react";
import { useState } from "react";
import User from "@/components/Modales/User";

export default function Register(){

    const [registerUser, setRegisterUser] = useState<User>({
        username: '',
        password: '',
      });
    const handleRegisterSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Lógica para el registro de usuario
      };
    const[confirmPass, setConfirmPass]=useState<string>('');

 /*var per comprobar si la pass es correcte amb lanterior*/
    return(
    <div className=" overflow flex justify-evenly items-center w-screen h-screen">
      <div></div>
      <div></div>
      <div></div>
      <div>
             <form onSubmit={handleRegisterSubmit} className='my-3 flex flex-col items-center space-y-8'>
        <h2 className='font-bold text-2xl font-mono'>Registrarse</h2>
          <div className='flex flex-col items-center space-y-8'> 
            <div className='flex flex-col'>             
              <label className='mx-2 text-sm font-serif '>Register Name:</label>
              <input className="rounded pl-2" type="text" value={registerUser.username} onChange={(e)=>setRegisterUser({...registerUser,username:e.target.value})}/>
            </div>
            <div className='flex flex-col'>
              <label className='mx-2 text-sm font-serif '>Register Password:</label>
              <input className="rounded pl-2" type="password" value={registerUser.password} onChange={(e)=>setRegisterUser({...registerUser, password:e.target.value})}/>
            </div>      
            <div className='flex flex-col'>
              <label className='mx-2 text-sm font-serif '>Confirm Password:</label>
              <input className="rounded pl-2" type="password" value={confirmPass} onChange={(e)=>setConfirmPass(e.target.value)}/>
            </div>             
            <button className='bg-blue-300 rounded-2xl px-4 py-1 my-2 font-mono font-semibold' type="submit">Registrarse</button>
          </div>         
        </form>
        </div>
    </div>
    );
}