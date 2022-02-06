import styled from "styled-components";
import { Flex } from "./all_in_one";
import { AiFillGithub, AiFillFacebook, AiFillMail } from "react-icons/ai";
const Container = styled.div`
  height: 35vh;
  background-color: #28293e;
  color: #fff;
  a{
      font-size: 2rem;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Flex col h_full evenly align_center>
        <Flex row around  half>
          <a href="#">
            <AiFillGithub />
          </a>
          <a href="#">
            <AiFillFacebook />
          </a>
          <a href="#">
            <AiFillMail />
          </a>
        </Flex>
        <p>Privacy | Terms | FAQs | Help </p>
        <p> © Domain Name. All Rights Reserved. Designed by H.safwan</p>
      </Flex>
    </Container>
  );
};

export default Footer;
