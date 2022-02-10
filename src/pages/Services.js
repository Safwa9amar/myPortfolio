import styled from "styled-components";
import { H5, H4, TextSmall } from "../components/all_in_one";
import { Flex  ,BodyWrapper , IconsWrapper} from "../components/all_in_one";
import { MdFacebook } from "react-icons/md";
const Section = styled.section`
  /* width:100vw; */
  margin: 0 3rem;
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
`;
const Layout = () => {
  return (
    <>
      <Section>
        <H5>Services</H5>
        <Flex row around align_base>
          <H4>
            Digital agency is a business you hire to outsource your digital
            marketing efforts
          </H4>
          <TextSmall>
            Ability to put themselves in the merchant's shoes. It is meant to
            partner on the long run, and work as an extension of the merchant's
            team. A digital agency is a business you hire to outsource your
            digital marketing efforts, instead of handling in-house. They can
            provide your business with a variety of digital solutions to promote
            your product or service online and help you.
          </TextSmall>
        </Flex>
      </Section>
      <Section>
        <Flex evenly align_base>
            <IconsWrapper  >
              <MdFacebook/>
            </IconsWrapper>
            <BodyWrapper>
                <span>Design</span>
            </BodyWrapper>
        </Flex>
      </Section>
    </>
  );
};

export default Layout;
