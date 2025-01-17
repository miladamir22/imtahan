import { Outlet } from "react-router"
import { Header } from "../Header"
import { Footer } from "../Footer"
import { FirstCard } from "../../components/FirstCard"

function Main() {

  return (
    <>
     <Header/>
     
     <FirstCard/>

     <Outlet />

     <Footer/>


    </>
  )
}

export default Main
