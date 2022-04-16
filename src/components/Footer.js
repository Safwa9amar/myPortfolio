import styled from "styled-components";
import { AiFillGithub, AiFillFacebook, AiFillMail } from "react-icons/ai";
import './footer.css'
import { Link } from "react-router-dom";


const Container = styled.div`
  height: 35vh;
  background-color: #28293e;
 
`;

const Footer = () => {
  return (
    <Container>
      <div class="footer-content">
        <p>Privacy | Terms | FAQs | Help </p>
        <p> © Domain Name. All Rights Reserved. Designed by H.safwan</p>
        <ul class="socials">
          <li>
            <a href="https://github.com/Safwa9amar">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/hamza.97gamar">
              <AiFillFacebook />
            </a>
          </li>
          <li>
            <a href="mailto:hassanih97@gmail.com">
              <AiFillMail />
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-bottom">
        <p>H.safwan</p>
        <div class="footer-menu">
          <ul class="f-menu">
            <li>
              <Link className={Location.pathname === "/" ? "active" : ""} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className={Location.pathname === "/Services" ? "active" : ""}
                to="/Services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={Location.pathname === "/Projects" ? "active" : ""}
                to="/Projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className={Location.pathname === "/Blogs" ? "active" : ""}
                to="/Blogs"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                className={Location.pathname === "/Contact" ? "active" : ""}
                to="/Contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </Container>
  );
};

export default Footer;
