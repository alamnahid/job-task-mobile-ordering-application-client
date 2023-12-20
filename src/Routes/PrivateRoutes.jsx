import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()

    if(user){
        return children;
    }
    if(loading){
        return <p>loading</p>
    }
    return <Navigate to='/login' state={{form: location}}></Navigate> 

};

export default PrivateRoutes;