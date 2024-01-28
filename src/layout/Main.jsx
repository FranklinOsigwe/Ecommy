import Navbar from "../components/Navbar";
import {Outlet} from 'react-router-dom';
import '../App.css'
import Footer from "../components/Footer";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";


const Main = () => {
  const {loading} = useContext(AuthContext)


  return (
    <div>
      {
        loading ? <p>LOading ....</p> : <div><Navbar/>
        <div className='min-h-screen'>
        <Outlet/>
        </div>
        </div>
      }
        
        {/* <Footer/> */}
    </div>
  )
}

export default Main