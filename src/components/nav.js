import { H1, Text } from "../all_in_one";
import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  &.Nav {
    background-color: #28293e;
    height: 50vh;
    position: relative;
  }
  @media screen and (max-width: 600px) {
    &.Nav {
      & ul {
        justify-content: space-evenly;
        flex-flow: column;
        align-items: baseline;
        height: 100vh;
        width: 40vw;
        background: grey;
        position: absolute;
        right: 100%;
        transition: ease-out 300ms;
        & li {
          color: black;
          font-weight: 500;
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
    flex-flow: row;
    justify-content: space-evenly;
  }
  & li {
    list-style-type: none;
    margin: 1rem 2rem;
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
  @media screen and (max-width: 600px) {
    top: 35%;
    transform: translate(-50%, -35%);
    h1 {
      font-size: 3.5rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
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

const Contact = styled.div`
  width: 100px;
  height: 30px;
  padding: 0.1rem;
  line-height: 30px;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 0.1rem;
  @media screen and (max-width: 600px) {
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translate(-50%, -15%);
  }
`;
const MenuBtn = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    align-items: center;
    height: 48px;
    width: 48px;
    border: 1px solid whitesmoke;
    border-radius: 0.5rem;
    position: absolute;
    right: 5%;
    top: 5%;
    & span {
      width: 50%;
      height: 5%;
      background: #eee;
    }
  }
`;

const Navbar = (props) => {
  return (
    <Nav className="Nav">
      <FlexRow className="nav_list">
        <Logo className="logo">
            H.Safwan
        </Logo>
        <ul>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
        <Contact className="contactBtn">Contact</Contact>
      </FlexRow>
      <About className="About">
        <H1 color="white">About Me</H1>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, rem.
        </Text>
      </About>
      <MenuBtn>
        <span></span>
        <span></span>
        <span></span>
      </MenuBtn>
    </Nav>
  );
};

export default Navbar;
