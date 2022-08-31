import React from 'react'
import { NavLink } from "react-router-dom";
const Home = () => {
    return (
        <>

            <h1>Home   </h1><br />

            Click :  <NavLink to='/function'>Functional Componenet </NavLink><br /><br />
            <br /><br /><br /><br /><br /><br />
            Click :  <NavLink to='/class'>Class Componenet </NavLink><br />
        </>
    )
}
export default Home
