import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import "./Navbar.scss"
const Navbar = () => {
    const navigate=useNavigate()
    const handelOnClick=()=>{
        navigate("/addtopicform")
    }
    const Nav = [
        {
            to: "/",
            text: "All"
        },
        {
            to: "/custom",
            text: "Custom"
        },
        {
            to: "/icp",
            text: "ICP"
        }, {
            to: "/mission",
            text: "Mission"
        }, {
            to: "/product",
            text: "Product"
        }
    ]
    return (
        <div className='Navbar'>
            <div className='top'>
                <h2>Categories</h2>
            </div>
            <div className='down'>
                <div className='left-side'>
                    {
                        Nav.map(({ to, text }, i) => {
                            return <NavLink end to={to} key={i}>{text}</NavLink>
                        })
                    }


                </div>
                <div className='right-side'>
                    <button onClick={()=>handelOnClick()}>Add Topic {">"}</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar