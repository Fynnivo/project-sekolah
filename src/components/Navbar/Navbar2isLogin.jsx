import { useState, useEffect, useRef } from "react";
import {
    Navbar,
    MobileNav,
    IconButton,
} from "@material-tailwind/react";
import {
    ArrowRightOnRectangleIcon,
    Squares2X2Icon,
    TagIcon,
    UserIcon
} from '@heroicons/react/24/solid'
import defaultProfile from '../../asset/default-profile.png'
import { NavLink, Link } from "react-router-dom";
import logo from '../../asset/ikhwan-logo.png'
import { useSelector, useDispatch } from "react-redux";
import { LogOut, reset } from '../../features/authSlice'

export default function NavLogin() {
    const [openNav, setOpenNav] = useState(false);
    const ref = useRef(null);
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setToggle(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);

    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const handleLogout = () => {
        dispatch(LogOut())
        dispatch(reset())
    }

    const navList = (
        <ul className="ml-8 mb-4 mt-2 flex flex-col gap-2 lg:ml-0 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black">
            <NavLink to="/" className="p-1 font-medium hover:text-purple-500">
                Home
            </NavLink>
            <NavLink to="/dashboard" className="lg:hidden md:hidden p-1 font-medium hover:text-purple-500">
                Dashboard
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
                <div ref={ref} className="hidden lg:block">
                    <button onClick={handleToggle}>
                        {user && user.imageUrl ? <img className="w-10 h-10 rounded-full" src={user.imageUrl} alt="Rounded avatar" /> : <img className="w-10 h-10 rounded-full" src={defaultProfile} alt="Rounded avatar" />}
                    </button>

                    {toggle && <div className="absolute right-3 z-10 bg-gray-100 divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            <div>{user.name}</div>
                            <div className="font-medium truncate">{user.email}</div>
                        </div>
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                            <li>
                                <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <div className='flex gap-2'>
                                        <Squares2X2Icon className='w-5 h-5' />
                                        <span>Dashboard</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/account" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <div className='flex gap-2'>
                                        <UserIcon className='w-5 h-5' />
                                        <span>Account</span>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard/subscription" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                                    <div className='flex gap-2'>
                                        <TagIcon className='w-5 h-5' />
                                        <span>Subscription</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                        <div className="py-1">
                            <Link onClick={handleLogout} to='/' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                                <div className='flex gap-2'>
                                    <ArrowRightOnRectangleIcon className='w-5 h-5' />
                                    <span>Sign Out</span>
                                </div>
                            </Link>
                        </div>
                    </div>}
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
                    <NavLink onClick={handleLogout} to="/">
                        <button className="bg-purple-500 px-6 py-1 w-full rounded-full border-2 border-purple-500 text-white text-center">
                            <span className="">Log Out</span>
                        </button>
                    </NavLink>
                </div>
            </MobileNav>
        </Navbar>
    );
}