import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { CopyToClipboard } from "react-copy-to-clipboard";
function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleRedirect = (e, url) => {
    e.preventDefault();
    window.open(url);
  };
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo image" style={{ width: "100px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Sobre mí
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Tecnologías
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Proyectos
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contacto
          </Link>
        </li>
      </ul>

      {/* Hamburguer */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars></FaBars> : <FaTimes></FaTimes>}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Inicio
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Sobre mí
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Tecnologías
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Proyectos
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            onClick={handleClick}
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contacto
          </Link>
        </li>
      </ul>

      {/* Social icons */}

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
            <a
              onClick={(e) =>
                handleRedirect(e, "https://www.linkedin.com/in/joaquingplante/")
              }
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              LikedIn
              <FaLinkedin size={30}></FaLinkedin>
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              onClick={(e) =>
                handleRedirect(e, "https://github.com/Joaquin-Garcia-Plante")
              }
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              GitHub
              <FaGithub size={30}></FaGithub>
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <CopyToClipboard text="joaquingarciaplante@gmail.com">
              <button
                onClick={(e) => {
                  alert("Email copiado en el portapapeles");
                  handleRedirect(
                    e,
                    "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                  );
                }}
                className="flex justify-between items-center w-full text-gray-300"
              >
                Email <HiOutlineMail size={30}></HiOutlineMail>
              </button>
            </CopyToClipboard>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              onClick={(e) =>
                handleRedirect(
                  e,
                  "https://drive.google.com/file/d/1AflmcJrUQKdGDWF0bZWmjR0BqXHTjwbk/view?usp=sharing"
                )
              }
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Curriculum
              <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
