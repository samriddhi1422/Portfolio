import Footer from "./Pages/Footer";
import Header from "./Pages/Header";


import { Outlet } from "react-router-dom";
export default function Layout(){
    return(
        <>
        <Header/>
       <Outlet/>
       <Footer/>
      
        </>
    )
}