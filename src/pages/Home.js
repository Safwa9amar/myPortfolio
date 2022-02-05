import styled from "styled-components";
import mydata from "../components/data";
import {
  H1,
  H2,
  H5,
  Text,
  Card,
  Title,
  SubTitle,
  CardBody,
  Progress,
  Flex,
  TextWithBg,
} from "../all_in_one";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { useInView } from "react-intersection-observer";

const HomeWrapper = styled.div`
  section {
    margin: 3rem;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .description {
    display: flex;
    flex-flow: column;
    .profile_img {
      align-self: center;
      opacity: 0;
      animation: animate 2s forwards;
      @keyframes animate {
        from {
          opacity: 0;
          /* transform: scale(-1); */
        }
        to {
          opacity: 1;
          /* transform: scale(1); */
        }
      }
    }

    margin: 1rem;
    padding: 0.1rem;
    width: 75vw;
    .exp {
      display: flex;
      flex-flow: row;

      .card {
        flex: 1;
        padding: 0.5rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border: 1px solid #f3d1bf;
        @media screen and (max-width: 600px) {
          font-size: 0.81rem;
        }
        .icons {
          width: 4rem;
          height: 4rem;
          @media screen and (max-width: 600px) {
            width: 3rem;
            height: 3rem;
          }
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100%;
          background: #ef6c57;
          font-size: 2rem;
          color: #fff;
        }
        .body {
          & span {
            color: red;
            font-size: 1.3rem;
            font-weight: bold;
            @media screen and (max-width: 600px) {
              font-size: 1rem;
            }
          }
        }
      }
    }
    .PersonInfo {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      margin: 0.5rem;
      & p {
        text-align: left;
        padding: 0.2rem;
        border-bottom: 1px solid #f3d1bf;
        margin-bottom: 0.3rem;
      }
    }
  }

  @media screen and (max-width: 600px) {
    flex-flow: column;
    align-items: center;
    section {
      flex-flow: column;
      align-items: center;
      text-align: center;
    }
    .profile_img {
      & img {
        border-radius: 50%;
        width: calc(10px + 50vw);
        height: calc(10px + 50vw);
      }
    }
    .description {
      width: 80vw;
      & h5,
      h2 {
        text-align: center;
        font-size: calc(1.575rem + 3.9vw) !important;
      }
      .PersonInfo {
        display: flex;
        flex-flow: column;
      }
    }
  }
  .card-wrapper {
    width: 75vw;
    display: flex;
    justify-content: space-between;
    margin: 2rem;
    .edu_exp {
      border-left: 1px solid #ef6c57;
      margin: 1rem;
      padding: 1rem;
      position: relative;
      & h5 {
        text-transform: capitalize;
      }
    }
    @media screen and (max-width: 600px) {
      display: flex;
      flex-flow: column;
    }
  }
`;

const Home = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <HomeWrapper>
      <section>
        <div className="description">
          <div className="profile_img">
            <img
              src="https://image.freepik.com/photos-gratuite/gros-plan-portrait-jeune-bel-homme-affaires-pensif-confiant-travaillant-assis-table-ecrit-dans-cahier-interieur-bureau-moderne-blanc_176420-6562.jpg"
              alt="puc"
            />
          </div>
          <TextWithBg>
            <H1>Dev</H1>
            <H2>Designer & Web Developer</H2>
          </TextWithBg>
          <Text justify>
            Ability to put themselves in the merchant's shoes. It is meant to
            partner on the long run, and work as an extension of the merchant's
            team.
          </Text>
          <div className="PersonInfo">
            <p>
              <strong>Name : </strong> Hassani hamza
            </p>
            <p>
              <strong>Degree: </strong>Master
            </p>
            <p>
              <strong>Experience: </strong>5 Years
            </p>
            <p>
              <strong>Email: </strong>Hassanih97@gmail.com
            </p>
            <p>
              <strong>Phone: </strong>+213 674 020 244
            </p>
            <p>
              <strong>Address: </strong>Sidi bel Abbes , Ait elarbi ben mahidi
            </p>
            <p>
              <strong>Freelance: </strong>Available
            </p>
          </div>
          <div className="exp">
            <div className="card">
              <div className="icons">
                <BiTask />
              </div>
              <div className="body">
                <span>5 Years</span>
                <br></br> of experience
              </div>
            </div>
            <div className="card">
              <div className="icons">
                <MdOutlineBusinessCenter />
              </div>
              <div className="body">
                <span> 33+ </span>
                <br></br>Projects Done
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <TextWithBg>
          <H1>quality</H1>
          <H2>education & experience</H2>
        </TextWithBg>
        <div className="card-wrapper">
          <div className="edu_exp">
            <H5>education</H5>
            <Card ref={ref} activeView={inView}>
              <Title>Master In CSE</Title>
              <SubTitle>Cambridge University | 2000 - 2050</SubTitle>
              <CardBody>
                Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit
                amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd
                sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
              </CardBody>
            </Card>
            <Card ref={ref} activeView={inView}>
              <Title>Master In CSE</Title>
              <SubTitle>Cambridge University | 2000 - 2050</SubTitle>
              <CardBody>
                Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit
                amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd
                sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
              </CardBody>
            </Card>
          </div>
          <div className="edu_exp">
            <H5>education</H5>
            <Card ref={ref} activeView={inView}>
              <Title>Master In CSE</Title>
              <SubTitle>Cambridge University | 2000 - 2050</SubTitle>
              <CardBody>
                Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit
                amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd
                sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
              </CardBody>
            </Card>
            <Card ref={ref} activeView={inView}>
              <Title>Master In CSE</Title>
              <SubTitle>Cambridge University | 2000 - 2050</SubTitle>
              <CardBody>
                Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit
                amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd
                sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
              </CardBody>
            </Card>
          </div>
        </div>
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
    </HomeWrapper>
  );
};

const PropgresSkillsData = function (data) {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return data.map((el) => {
    return (
      <Progress value={el.precent} key={el.id} ref={ref} activeView={inView}>
        <span>{el.name}</span>
        <span>{el.precent}%</span>
      </Progress>
    );
  });
};

export default Home;
