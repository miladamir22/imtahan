import { Outlet } from "react-router"
import { Header } from "../Header"
import { Footer } from "../Footer"

function Main() {

  return (
    <>
     <Header/>
     
     <Outlet />

     <Footer/>


    </>
  )
}

export default Main
