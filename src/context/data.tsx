import User from '@/components/Modals/User';
import { count } from 'console';
import PreviousMap from 'postcss/lib/previous-map';
import React, { createContext, useContext, useState } from 'react';
import { text } from 'stream/consumers';

//creacion de un context
const DataContext = createContext<User[]>([]);
//funcion para acceder al context
export const useDataContext = () => useContext(DataContext);

export default function Data() {
  const [userList, setUserList] = useState<User[]>([]);

  const [counter, setCounter] = useState<number>(0);

 const addUser =(user:User, x:boolean=false)=>{
  console.log('Este es el valor de X',x);
  console.log('Este es el valor de User',user);
    if(x===true){
      setUserList(prevUser=>[...prevUser, user])
      const textCount:number = userList.length;
      console.log(userList.length);
    }else{console.log('No ha entrado la data')}
  } 
   
//   const textCount:number = userList.length;
//   setCounter(userList.length);
//   console.log(userList)
// }
const clearList=()=>{
  setUserList([])
  setCounter(userList.length);
  console.log(userList)
}

console.log(userList);

  return (
    <div>
      {/* <button onClick={handleclick}>Add User</button> */}
      <div>
        <strong>nombre del user:</strong>
        <p>-{user.nombre}</p>
        <strong>contraseña del user:</strong>
        <p>-{user.password}</p>
        <p>{counter}</p>
        <button onClick={clearList}>Delete User</button>
      </div>
      <div>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>{user.nombre}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}
