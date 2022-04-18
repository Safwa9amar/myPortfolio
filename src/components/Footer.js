import { AiFillGithub, AiFillFacebook, AiFillMail } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-content">
      <ul className="socials">
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
      <p>Privacy | Terms | FAQs | Help </p>
      <p> © Domain Name. All Rights Reserved. Designed by H.safwan</p>
    </div>
  );
};

export default Footer;
