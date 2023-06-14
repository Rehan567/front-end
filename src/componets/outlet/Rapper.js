import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from "../navbar/Navbar"
const Rapper = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default Rapper