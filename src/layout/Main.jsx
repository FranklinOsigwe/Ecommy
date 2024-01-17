import Navbar from "../components/Navbar";
import {Outlet} from 'react-router-dom';
import '../App.css'


const Main = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        {/* <Footer>Footer</Footer> */}
    </div>
  )
}

export default Main