import { useState, useEffect } from "react";
import {
    Navbar,
    MobileNav,
    IconButton,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import logo from '../../asset/ikhwan-logo.png'

export default function NavCom2() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="ml-8 mb-4 mt-2 flex flex-col gap-2 lg:ml-0 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black">
            <NavLink to="/" className="p-1 font-medium hover:text-purple-500">
                Home
            </NavLink>
            <NavLink to="/about" className="p-1 font-medium hover:text-purple-500"
            >
                About
            </NavLink>
            <NavLink to="/contact" className="p-1 font-medium hover:text-purple-500"
            >
                Contact
            </NavLink>
        </ul>
    );

    return (
        <Navbar className="mx-auto max-w-full py-2 px-4 lg:px-8 lg:py-4 sticky top-0 rounded-none">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <NavLink
                    to="/"
                    className="mr-4 cursor-pointer py-1.5 font-normal flex items-center gap-2"
                >
                    <img src={logo} alt="Logo" className="w-7 h-7" />
                    <span className="font-medium text-xl">Ikhwan</span>
                </NavLink>
                <div className="hidden lg:block">{navList}</div>
                <div className="flex gap-2">
                    <NavLink to="/register" className="hidden lg:block px-6 py-1 rounded-full border-2 border-purple-500 text-center">
                        Register
                    </NavLink>
                    <NavLink to="/login">
                        <button className="hidden lg:block bg-purple-500 px-6 py-1 rounded-full border-2 border-purple-500 lg:text-white text-black text-center">
                            <span className="">Login</span>
                        </button>
                    </NavLink>
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </IconButton>
            </div>
            <MobileNav open={openNav}>
                {navList}
                <div className="flex flex-col">
                    <NavLink to="/register" className="mb-4 px-6 py-1 rounded-full border-2 border-purple-500 text-center text-black">
                        Register
                    </NavLink>
                    <NavLink to="/login">
                        <button className="bg-purple-500 px-6 py-1 w-full rounded-full border-2 border-purple-500 text-white text-center">
                            <span className="">Login</span>
                        </button>
                    </NavLink>
                </div>
            </MobileNav>
        </Navbar>
    );
}