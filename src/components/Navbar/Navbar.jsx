import ikhwanLogo from "../../asset/ikhwan-logo.png";
import { Navbar } from "flowbite-react";

const NavbarComponent = () => {
  return (
    <div className="sticky top-0 bg-white">
      <Navbar fluid={true} rounded={true} className="bg-white">
        <Navbar.Brand
          href="/"
          className="md:ml-[8rem] lg:ml-[8rem] ml-[2.6rem]"
        >
          <img
            src={ikhwanLogo}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Ikhwan
          </span>
        </Navbar.Brand>
        <Navbar.Toggle className="" />
        <Navbar.Collapse className="md:mr-[8rem] lg:mr-[8rem] mr-0">
          <a
            className="md:mb-0 text-center lg:mb-0 mb-2 pt-1.5 md:hover:border-b-2 hover:text-[#8b5cf6] border-[#8b5cf6]"
            href="/navbars"
          >
            Home
          </a>
          <a
            className="md:mb-0 text-center lg:mb-0 mb-2 pt-1.5 md:hover:border-b-2 hover:text-[#8b5cf6] border-[#8b5cf6]"
            href="/navbars"
          >
            About
          </a>
          <a
            className="md:mb-0 text-center lg:mb-0 mb-2 pt-1.5 md:hover:border-b-2 hover:text-[#8b5cf6] border-[#8b5cf6]"
            href="/navbars"
          >
            Services
          </a>
          <a
            className="md:mb-0 text-center lg:mb-0 mb-2 pt-1.5 md:hover:border-b-2 hover:text-[#8b5cf6] border-[#8b5cf6]"
            href="/navbars"
          >
            Pricing
          </a>
          <a
            className="md:mb-0 text-center lg:mb-0 mb-2 pt-1.5 md:hover:border-b-2 hover:text-[#8b5cf6] border-[#8b5cf6]"
            href="/navbars"
          >
            Contact
          </a>
          <a
            className="bg-[#8b5cf6] text-white text-center md:mb-0 lg:mb-0 mb-2 px-5 py-1 pt-1.5 rounded-full"
            href="/"
          >
            Sign Up
          </a>
          <a
            className="border-2 border-[#8b5cf6] px-5 py-1 text-center rounded-full "
            href="/navbars"
          >
            Sign In
          </a>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
