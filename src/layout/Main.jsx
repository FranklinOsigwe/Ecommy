import Navbar from "../components/Navbar";
import {Outlet} from 'react-router-dom';
import '../App.css'
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";


const Main = () => {
  const {loading} = useContext(AuthContext)


  return (
    <div className='min-h-screen'>
        <div>
          <Navbar/>
        <Outlet/>
        </div>
    </div>
  )
}

export default Main