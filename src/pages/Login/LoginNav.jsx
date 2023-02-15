import React from 'react'
import logo from '../../asset/ikhwan-logo.png'
import { Navbar } from '@material-tailwind/react'
import { NavLink } from 'react-router-dom'

const LoginNav = () => {
    return (
        <div>
            <Navbar className="mx-auto max-w-full py-2 px-4 lg:px-8 lg:py-4 sticky top-0 rounded-none">
                <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                    <NavLink
                        to="/"
                        className="mr-4 cursor-pointer py-1.5 font-normal flex items-center gap-2"
                    >
                        <img src={logo} alt="Logo" className="w-7 h-7" />
                        <span className="font-medium text-xl">Ikhwan</span>
                    </NavLink>
                </div>
            </Navbar>
        </div>
    )
}

export default LoginNav