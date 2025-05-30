import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Route, BrowserRouter,Routes, HashRouter} from 'react-router-dom'

import App from './App.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Service from './Pages/Service.jsx'
import Projects from './Pages/Projects.jsx'
import Contact from './Pages/Contact.jsx'
import Layout from './Layout.jsx'

export default function Main(){
  return(
    <BrowserRouter basename="/portfolio">
    <Routes>
    <Route path='' element={<Layout/>}>
    <Route path='/' element= {<Home/>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/services' element= {<Service/>}></Route>
    <Route path='/projects' element={<Projects/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    </Route>
</Routes>
    </BrowserRouter>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
    <Main></Main>
    </HashRouter>
  </StrictMode>,
)
