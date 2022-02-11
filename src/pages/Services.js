import styled from "styled-components";
import { H5, H4, TextSmall, H1 } from "../components/all_in_one";
import { Flex, IconsWrapper } from "../components/all_in_one";
import { MdDesignServices } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import images from "../components/images";

const Img = styled.img``;
const ImgWrapper = styled.div``;

const Card = ({ header, icon }) => {
  return (
    <Flex important evenly align_center >
      <IconsWrapper>{icon}</IconsWrapper>
      <H5>{header}</H5>
    </Flex>
  );
};
const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  @media screen and (max-width: 600px) {
    padding: 0;
  }

  ${Flex} {
    justify-content: stretch;
    align-items: stretch;
    align-content: center;
    gap: 1rem;
    padding: 1rem;
    width: 75%;
    & article {
      & ${TextSmall} {
        text-align: justify;
        padding: 2rem;
        @media screen and (max-width: 600px) {
          padding: 0;
        }
      }
      & ${H4} {
        margin-left: 2rem;
        @media screen and (max-width: 600px) {
          padding: 0;
          width: 100%;
          margin: 0;
        }
      }
    }
    & ${ImgWrapper} {
      width: 100%;
      ${Img} {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const Layout = () => {
  return (
    <>
      <Section>
        <Card header="Design" icon={<MdDesignServices />} />
        <Card header="Development" icon={<BsCodeSlash />} />
        <Card header="Consulting" icon={<FaHandsHelping />} />
      </Section>

      <Section>
        <Flex align_center>
          <article>
            <TextSmall>
              <H4>
                Digital agency is a business you hire to outsource your digital
                marketing efforts
              </H4>
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension of the
              merchant's team. A digital agency is a business you hire to
              outsource your digital marketing efforts, instead of handling
              in-house. They can provide your business with a variety of digital
              solutions to promote your product or service online and help you.
            </TextSmall>
          </article>
          <ImgWrapper>
            <Img src={images[0]} alt="img" />
          </ImgWrapper>
        </Flex>
      </Section>

      <Section>
        <Flex evenly align_center>
          <ImgWrapper>
            <Img src={images[1]} alt="img" />
          </ImgWrapper>
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
      </Section>
    </>
  );
};

export default Layout;
