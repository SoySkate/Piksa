import React, {useState} from 'react'
import User from '@/components/Modals/User'


export const DataContext = React.createContext<User[]>([])

export default function DataContextProvider({children}:any){
    const [userList, setUserList] = useState<User[]>([]);
    return(
      <DataContext.Provider value={{userList, setUserList}}>
      {children}
      </DataContext.Provider>
    )
}