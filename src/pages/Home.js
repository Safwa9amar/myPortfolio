import styled from "styled-components";
import mydata from "../components/data";
import { H1, H2, H5, Flex, TextWithBg } from "../components/all_in_one";
import Description from "./home_layout/description";
import EduExp from "./home_layout/education_exp";
import PropgresSkillsData from "./home_layout/skills";

const HomeWrapper = styled.div`
  section {
    margin: 3rem;
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <section>
        <Description></Description>
      </section>
      <section>
        <TextWithBg>
          <H1>quality</H1>
          <H2>education & experience</H2>
        </TextWithBg>
        <EduExp></EduExp>
      </section>
      <section>
        <TextWithBg>
          <H1>Skills</H1>
          <H2>Skills</H2>
        </TextWithBg>
        <Flex row w="75vw" between>
          <Flex col half margin="1rem">
            <H5>Languages</H5>
            {PropgresSkillsData(mydata.skills.programing_Langauges)}
          </Flex>
          <Flex col half margin="1rem">
            <H5>Frameworks</H5>
            {PropgresSkillsData(mydata.skills.framework)}
          </Flex>
          <Flex col half margin="1rem">
            <H5>design and others</H5>
            {PropgresSkillsData(mydata.skills.design)}
          </Flex>
        </Flex>
      </section>
      <section>
        <TextWithBg>
          <H1>CONTACT</H1>
          <H2>CONTACT ME</H2>
        </TextWithBg>
      </section>
    </HomeWrapper>
  );
};

export default Home;
