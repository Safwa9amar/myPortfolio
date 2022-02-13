import styled from "styled-components";
import { H5, H4, TextSmall } from "../components/all_in_one";
import { Flex, IconsWrapper } from "../components/all_in_one";
import { MdDesignServices } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { FaHandsHelping } from "react-icons/fa";
import images from "../components/images";

const Button = styled.button`
  border: 1px solid #3cff00d3;
  background: white;
  color:#1d1c1c;
  border-radius: 0.1rem;
  padding: 5px;
  margin: 5px;
  &:hover {
    border: 1px solid white;
    background: #3cff00d3;
    cursor: pointer;
  }
`;
const Img = styled.img``;
const ImgWrapper = styled.div``;

const CardWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  ${IconsWrapper} {
    background: transparent !important;
    color: #e98400;
  }
  & ${H5} {
    flex: 1;
  }
`;
const Card = ({ header, icon }) => {
  return (
    <CardWrapper>
      <IconsWrapper>{icon}</IconsWrapper>
      <H5>{header}</H5>
    </CardWrapper>
  );
};
const Section = styled.section`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 1rem;
  @media screen and (max-width: 600px) {
    padding: 0;
    margin: 0;
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
        ${H4} {
          width: 100%;
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
        <Flex align_center>
          <ImgWrapper>
            <Img src={images[0]} alt="img" />
          </ImgWrapper>
          <article>
            <TextSmall>
              <H4>
                Digital agency is a business you hire to outsource your digital
                marketing efforts
              </H4>
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension of the
            </TextSmall>
          </article>
        </Flex>
      </Section>

      <Section>
        <Flex evenly align_center>
          <article>
            <TextSmall>
              <H4>
                Digital agency is a business you hire to outsource your digital
                marketing efforts
              </H4>
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension of the
              <Button>Read more</Button>
            </TextSmall>
          </article>
          <ImgWrapper>
            <Img src={images[1]} alt="img" />
          </ImgWrapper>
        </Flex>
      </Section>
      <Flex evenly align_center>
        <Card header="Design" icon={<MdDesignServices />} />
        <Card header="Development" icon={<BsCodeSlash />} />
        <Card header="Consulting" icon={<FaHandsHelping />} />
      </Flex>
    </>
  );
};

export default Layout;
