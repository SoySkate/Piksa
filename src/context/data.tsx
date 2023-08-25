import User from '@/components/Modals/User';
import { count } from 'console';
import PreviousMap from 'postcss/lib/previous-map';
import React, { createContext, useContext, useState } from 'react';
import { text } from 'stream/consumers';




export default function Data(user:User) {
  const [userList, setUserList] = useState<User[]>([]);

  const [counter, setCounter] = useState<number>(0);

const handleclick =()=>{
  setUserList(prevUser=>[...prevUser, user])
  const textCount:number = userList.length;
  setCounter(userList.length);
  console.log(userList)
}
const clearList=()=>{
  setUserList([])
  setCounter(userList.length);
  console.log(userList)
}

console.log(userList);

  return (
    <div>
      <button onClick={handleclick}>Add User</button>
      <div>
        <p>{counter}</p>
        <button onClick={clearList}>Delete User</button>
      </div>
    </div>
  );
}
