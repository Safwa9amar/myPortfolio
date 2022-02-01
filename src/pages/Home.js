import styled from "styled-components";
import { H5, H2, Text } from "../all_in_one";
const HomeWrapper = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: space-evenly;
  .profile_img {
    margin: 1rem;
    & img {
      border-radius: 0.51rem;
      filter: saturate(1.6);
      width: 50vw;
    }
  }
  .description {
    margin: 1rem;
    padding: 1rem;
    width: 50vw;
  }
  @media screen and (max-width: 600px) {
    flex-flow: column;
    .profile_img {
      & img {
        width: 80vw;
      }
    }
    .description {
      width: 80vw;
      & h5 , p , h2{
          text-align: center;
      }
    }
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <div className="profile_img">
        <img
          src="https://image.freepik.com/photos-gratuite/gros-plan-portrait-jeune-bel-homme-affaires-pensif-confiant-travaillant-assis-table-ecrit-dans-cahier-interieur-bureau-moderne-blanc_176420-6562.jpg"
          alt="puc"
        />
      </div>
      <div className="description">
        <H5>Gabriel Pires</H5>
        <H2>Professional Web Designer</H2>
        <Text justify>
          Ability to put themselves in the merchant's shoes. It is meant to
          partner on the long run, and work as an extension of the merchant's
          team. A digital agency is a business you hire to outsource your
          digital marketing efforts, instead of handling in-house. They can
          provide your business with a variety of digital solutions to promote
          your product or service online and help you.
        </Text>
      </div>
    </HomeWrapper>
  );
};

export default Home;
