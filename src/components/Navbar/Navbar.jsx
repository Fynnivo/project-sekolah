import ikhwanLogo from "../../asset/ikhwan-logo.png";
import { Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div className="sticky top-0 bg-white">
      <Navbar fluid={true} rounded={true} className="bg-white">
        <NavLink
          to="/"
          className="md:ml-[8rem] lg:ml-[8rem] ml-[2.6rem] flex"
        >
          <img
            src={ikhwanLogo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Ikhwan
          </span>
        </NavLink>
        <Navbar.Toggle className="" />
        <Navbar.Collapse className="md:mr-[8rem] lg:mr-[8rem] mr-0">
          <NavLink
            className="md:mb-0 text-center lg:mb-0 mb-2 pt-1.5 md:hover:border-b-2 hover:text-[#8b5cf6] border-[#8b5cf6]"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="md:mb-0 text-center lg:mb-0 mb-2 pt-1.5 md:hover:border-b-2 hover:text-[#8b5cf6] border-[#8b5cf6]"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="md:mb-0 text-center lg:mb-0 mb-2 pt-1.5 md:hover:border-b-2 hover:text-[#8b5cf6] border-[#8b5cf6]"
            to="/service"
          >
            Services
          </NavLink>
          <NavLink
            className="md:mb-0 text-center lg:mb-0 mb-2 pt-1.5 md:hover:border-b-2 hover:text-[#8b5cf6] border-[#8b5cf6]"
            to="/pricing"
          >
            Pricing
          </NavLink>
          <NavLink
            className="md:mb-0 text-center lg:mb-0 mb-2 pt-1.5 md:hover:border-b-2 hover:text-[#8b5cf6] border-[#8b5cf6]"
            to="/contact"
          >
            Contact
          </NavLink>
          <NavLink
            className="bg-[#8b5cf6] text-white text-center md:mb-0 lg:mb-0 mb-2 px-5 py-1 pt-1.5 rounded-full"
            to="/login"
          >
            Sign Up
          </NavLink>
          <NavLink
            className="border-2 border-[#8b5cf6] px-5 py-1 text-center rounded-full "
            to="/login"
          >
            Sign In
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
