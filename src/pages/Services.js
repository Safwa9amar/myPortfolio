import styled from "styled-components";
import { H5, H4, TextSmall, H3 } from "../components/all_in_one";
import { Flex, IconsWrapper } from "../components/all_in_one";
import { MdDesignServices } from "react-icons/md";
import {BsCodeSlash} from "react-icons/bs";
import {FaHandsHelping} from "react-icons/fa";
import images from "../components/images";
const Section = styled.section`
  margin: 2rem;
  padding: 1rem;
  ${H4} {
    margin: 1rem;
    margin-left: 2rem;
    flex: 1.5;
  }
  ${TextSmall} {
    text-align: justify;
    padding: 1rem;
    padding: 2rem;
    flex: 2;
  }
  .circle_card {
    display: flex;
    align-items: center;
    position: relative;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    padding: 1rem;
    flex: 1;
    :before {
      display: block;
      content: "🔽";
      position: absolute;
      right: 0;
      cursor: pointer;
    }
  }
  ${Flex}{
    display: grid ;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px
    grid-row-gap: 20px
    justify-items: stretch
    align-items: stretch
  }
  
`;

const Img = styled.img`
  width: 100%;
  height: 50vh;
  
`;
const Layout = () => {
  return (
    <>
      <Section>
        <H5>Services</H5>
        <Flex>
          <div>
            <H4>
              Digital agency is a business you hire to outsource your digital
              marketing efforts
            </H4>
            <TextSmall>
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension of the
              merchant's team. A digital agency is a business you hire to
              outsource your digital marketing efforts, instead of handling
              in-house. They can provide your business with a variety of digital
              solutions to promote your product or service online and help you.
            </TextSmall>
          </div>
          <div>
            <Img src={images[0]} alt="love" />
          </div>
        </Flex>
      </Section>
      <Section>
          <div className="circle_card">
            <IconsWrapper>
              <MdDesignServices />
            </IconsWrapper>
            <H3>Design</H3>
          </div>
        <Flex>
          <div>
            <Img src={images[1]} alt="love" />
          </div>

          <div>
            <H4>
              Digital agency is a business you hire to outsource your digital
              marketing efforts
            </H4>
            <TextSmall>
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension of the
              merchant's team. A digital agency is a business you hire to
              outsource your digital marketing efforts, instead of handling
              in-house. They can provide your business with a variety of digital
              solutions to promote your product or service online and help you.
            </TextSmall>
          </div>
        </Flex>
        <div className="circle_card">
            <IconsWrapper>
              <BsCodeSlash />
            </IconsWrapper>
            <H3>Development</H3>
          </div>
          <div className="circle_card">
            <IconsWrapper>
              <FaHandsHelping />
            </IconsWrapper>
            <H3>Consulting</H3>
          </div>
      </Section>
    </>
  );
};

export default Layout;
