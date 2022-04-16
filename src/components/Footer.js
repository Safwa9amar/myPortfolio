import styled from "styled-components";
import { AiFillGithub, AiFillFacebook, AiFillMail } from "react-icons/ai";
import "./footer.css";
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
    </Container>
  );
};

export default Footer;
