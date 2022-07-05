import { useState, createContext, useEffect, useContext } from "react";
import { fetchLogout, fetchMe } from "../api";
import PrivateSpinner from "../components/spinner";
const AutContext = createContext();
const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() =>{
        (async () =>{
            try {
                const me = await fetchMe();
                setLoggedIn(true);
                setUser(me);
                setLoading(false)
            } catch (e) {
                setLoading(false); 
            }
        })();
    },[])

    const login = (data)=>{
        setLoggedIn(true);
        setUser(data.user);
      
        localStorage.setItem("access-token", data.accessToken);
        localStorage.setItem("refresh-token", data.refreshToken);    
    }
    const logout = async (callback)=>{
        setLoggedIn(false);
        setUser(null);

        await fetchLogout();

        localStorage.removeItem("access-token");
        localStorage.removeItem("refresh-token");  
        callback();  
    }

    const values = {
        user,
        loggedIn,
        login,
        logout
        
    }
     if(loading)
      return <PrivateSpinner/>
    return <AutContext.Provider value={values}>{children}</AutContext.Provider>
}

const useAuth = ()=> useContext(AutContext);
export {AuthProvider, useAuth};