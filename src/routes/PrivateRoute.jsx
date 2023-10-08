import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../hook/useAuthContext";


const PrivateRoute = ({children}) => {
const {user}=useAuthContext();
const location = useLocation();
console.log(location.pathname);


if(user){
    return children
}
return <Navigate state={location.pathname} to="/login"></Navigate>
}

export default PrivateRoute;