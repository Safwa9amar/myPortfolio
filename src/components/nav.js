import { Text } from "./all_in_one";
import styled from "styled-components";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { AiOutlineHome, AiFillProject, AiFillContacts } from "react-icons/ai";
import { MdOutlineDesignServices } from "react-icons/md";
import { ImBlog } from "react-icons/im";
import { BlogContext } from "../context/blogsContext";
import { ProjectsContext } from "../context/ProjectContext";


const Nav = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  &.Nav {
    background-color: #28293e;
    height: 45vh;
    position: relative;
  }
  @media screen and (max-width: 600px) {
    &.Nav {
      & ul {
        position: fixed;
        flex-flow: column;
        justify-content: center;
        align-items: flex-start;
        z-index: 111;
        height: 100vh;
        width: 50vw;
        background: #464764f0;
        left: ${(props) => (props.active === true ? "0" : "-50vw")};
        transition: ease-out 300ms;
        & li {
          padding-left: 10%;
          font-weight: 500;
          border-bottom: solid 1px #3c3735;
        }
      }
    }
  }
`;
const FlexRow = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-evenly;
  align-items: baseline;
  color: #ffffff;
  &.Epilogue {
    font-family: Epilogue;
    font-weight: 500;
  }
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }
  & li {
    list-style-type: none;
    margin: 1rem 2rem;
    display: flex;
    align-items: baseline;
  }
  & a {
    margin-left: 10px;
    text-decoration: none;
    color: inherit;
    position: relative;
    &.active {
      box-shadow: 1px 20px 17px 0px #d12e2ea1;
      background: inherit;
      ::after {
        content: "";
        background: #ff460e;
        width: 100%;
        height: 1px;
        left: 0;
      }
    }

    &::after {
      content: "";
      display: block;
      width: 0;
      background: #ffffff;
      transition: all 200ms;
      position: absolute;
      left: -100%;
    }

    &:hover,
    &:focus {
      box-shadow: 1px 20px 17px 0px #eeeeee30;
      background: inherit;
      outline: none;
      ::after {
        content: "";
        width: 100%;
        height: 1px;
        left: 0;
      }
    }
  }
`;
const About = styled.div`
  min-width: 250px;
  position: absolute;
  height: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const Logo = styled.div`
  color: red;
  font-weight: 800;
  @media screen and (max-width: 600px) {
    position: absolute;
    left: 1rem;
    margin: 1rem;
  }
`;

const MenuBtn = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: center;
    height: 35px;
    width: 35px;
    border: 1px solid whitesmoke;
    border-radius: 0.2rem;
    position: absolute;
    right: 5%;
    top: 5%;
    & span {
      width: 50%;
      height: 0.1rem;
      background: #eee;
      pointer-events: none;
      transition: transform ease-in 100ms;
    }
    &:hover {
      cursor: pointer;
    }

    &.active span:nth-child(2) {
      display: none;
    }
    &.active span:nth-child(1) {
      transform: rotate(45deg);
      transform-origin: center bottom;
    }
    &.active span:nth-child(3) {
      position: absolute;
      transform: rotate(-45deg);
      transform-origin: center bottom;
    }
  }
`;

const Navbar = (props) => {
  const [active, setActive] = useState(false);
  const Location = useLocation();

  const el = useRef(null);
  const blog = useContext(BlogContext).filter(
    (blog) => blog.id === Math.floor(Location.search.replace("?id=", ""))
  )[0];
  const Project = useContext(ProjectsContext).filter(
    (Project) => Project.id === Math.floor(Location.search.replace("?id=", ""))
  )[0];


  useEffect(() => {
    const typed = new Typed(el.current, {
      strings:
             Location.pathname === "/"
          ? ["Front End Developer", "Web designer", "5 Years Experience"]
          : Location.pathname === "/Services"
          ? [
              "We provides a full service range including technical skills, design, web development.",
            ]
          : Location.pathname === "/Portfolio"
          ? [
              "Here you will find our projects and works , Note: This section is under development",
            ]
          : Location.pathname === "/Blogs"
          ? [
              "we publish our latest topics in several scopes, including helping to find technical solutions , web development and design , software solutions...etc",
            ]
          : Location.pathname === "/Blogs/post"
          ? [`${blog.text}`]
          : Location.pathname === "/test"
          ? ['test']
          : Location.pathname === "/Contact"
          ? [
              "Welcome to the contact page, we are here to provide any assistance or any solutions",
            ]
          : Location.pathname === "/Portfolio/Project"
          ? [`${Project.text.slice(0,50)}...Read more`]
          
          : "", // Strings to display

      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 100,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  });
  return (
    <Nav className="Nav" active={active}>
      <FlexRow className="nav_list">
        <Logo className="logo">H.Safwan</Logo>
        <ul>
          <li>
            <AiOutlineHome />
            <Link className={Location.pathname === "/" ? "active" : ""} to="/">
              Home
            </Link>
          </li>
         
          <li>
            <AiFillProject />
            <Link
              className={Location.pathname === "/Portfolio" ? "active" : ""}
              to="/Portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <MdOutlineDesignServices />
            <Link
              className={Location.pathname === "/Services" ? "active" : ""}
              to="/Services"
            >
              Services
            </Link>
          </li>
          <li>
            <ImBlog />
            <Link
              className={Location.pathname === "/Blogs" ? "active" : ""}
              to="/Blogs"
            >
              Blogs
            </Link>
          </li>
          <li className="md:!hidden sm:flex">
            <AiFillContacts />
            <Link
              className={Location.pathname === "/Contact" ? "active" : ""}
              to="/Contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link
          className="border-[1px] px-2 rounded-sm hidden md:block before:!hidden after:!hidden hover:!bg-orange-400 transition hover:!shadow-none"
          to="/Contact"
        >
          Contact Me
        </Link>
      </FlexRow>
      <About className="prose-sm md:prose-md lg:prose-xl">
        <h3 className="text-white" color="white">
          {Location.pathname === "/"
            ? "About Me"
            : Location.pathname === "/Services"
            ? "Services"
            : Location.pathname === "/Portfolio"
            ? "Portfolio"
            : Location.pathname === "/Portfolio/Project"
            ? blog.header
            : Location.pathname === "/Blogs"
            ? "Blogs"
            : Location.pathname === "/Blogs/post"
            ? blog.header
            : Location.pathname === "/Blogs/html"
            ? "html"
            : Location.pathname === "/Contact"
            ? "Contact"
            : Location.pathname === "/test"
            ? "test"
            : ""}
        </h3>
        <div className="flex justify-center items-baseline gap-1 text-white">
        <Text color="white" ref={el}/>

        </div>
      </About>
      <MenuBtn
        onClick={(e) => {
          e.target.classList.toggle("active");
          active === false ? setActive(true) : setActive(false);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </MenuBtn>
    </Nav>
  );
};

export default Navbar;
