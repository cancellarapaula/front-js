import {UserIdContext} from "./UserIdContext";
import {useState} from "react";



export const UserIdProvider = ({children}) =>{
    const [userId, setUserId] = useState(27);
    return(
        <UserIdContext.Provider value={{userId, setUserId}}>
            {children}
        </UserIdContext.Provider>
    )
}
