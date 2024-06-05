import React from 'react'
import { Routes, NavLink, BrowserRouter, Route } from 'react-router-dom'

const RouterPrincipal = () => {
  return (

    //Cuando creo esta estructura, es lo mismo que trabajar con un componente, solo que utilizando el router dom
    <BrowserRouter>
        <Routes>
            <Route path='' element={""}/>
        </Routes>
    </BrowserRouter>
  )
}

export default RouterPrincipal