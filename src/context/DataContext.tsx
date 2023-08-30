import React, { createContext, useContext, useState } from 'react';
import User from '@/components/Modals/User'


// export const DataContext = React.createContext<User[]>([])
export const DataContext = createContext({})

export default function DataContextProvider({children}:any){
     const [userList, setUserList] = useState<User[]>([  {
      id: 1,
      nombre: 'user1',
      password: '1234'
    },
    {
      id: 2,
      nombre: 'user2',
      password: '4321'
    }]);
     //const [username, setUsername] = useState('midudev');
    return(
      <DataContext.Provider value={{ userList, setUserList }}>
      {children}
      </DataContext.Provider>
    )
}
export function useData() {
  return useContext(DataContext);
}