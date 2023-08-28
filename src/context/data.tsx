import User from '@/components/Modals/User';
import { useEffect, useState } from 'react'


 const [userList, setUserList] = useState<User[]>([]);
export default function Data(user:User){
    // {userList.map((e)=>)}

return(
    <div>
        <h1>{userList[0].nombre}</h1>
    </div>
)
}