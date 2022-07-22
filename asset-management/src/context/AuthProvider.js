import { createContext,useState } from "react";


const AuthContext = createContext({})

export const AuthProvider=({children})=>{
    const [user,setUser] = useState(null);


    let value ={user,setUser}
    return (
        <AuthContext.Provider value={value}>
            {children}

        </AuthContext.Provider>
    )
}

export default AuthContext;