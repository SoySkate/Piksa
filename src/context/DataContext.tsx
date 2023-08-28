import React, {useState} from 'react'
import User from '@/components/Modals/User'
// export const DataContext = React.createContext<User[]>([])
export const DataContext = React.createContext({})


export default function DataContextProvider({children}:any){
     const [userList, setUserList] = useState<User[]>([  {
      id: 1,
      nombre: 'user1',
      password: '1234'
    },
    {
      id: 2,
      nombre: 'user2',
      password: 'qwerty'
    }]);
     //const [username, setUsername] = useState('midudev');
    return(
      <DataContext.Provider value={{ userList, setUserList }}>
      {children}
      </DataContext.Provider>
    )
}