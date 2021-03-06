import styled from "styled-components";
import mydata from "../components/data";
import { H1, H2, H5, Flex, TextWithBg } from "../components/all_in_one";
import Description from "./home_layout/description";
import EduExp from "./home_layout/education_exp";
import PropgresSkillsData from "./home_layout/skills";
import ContactForm from "./home_layout/contact";
import { motion } from "framer-motion";
const HomeWrapper = styled.div`
  section {
    margin: 1rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    /* width: 100vw; */
  }
`;

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1 / 3 }}
      viewport={{ once: true }}
    >
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
          <ContactForm></ContactForm>
        </section>
      </HomeWrapper>
    </motion.div>
  );
};

export default Home;
