import Navbar from "../components/Navbar"


const Main = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer>Footer</Footer>
    </div>
  )
}

export default Main