import { Children, useContext } from "react";
import {useLocation} from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import {AuthContext} from '../contexts/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();

    if(loading) {
        return (
            <LoadingSpinner/>
        )
    }

    if(user){
        return children
    }
  return (
   <Navigate to='/signup' state={{from:location}} replace></Navigate>
  )
}

export default PrivateRouter