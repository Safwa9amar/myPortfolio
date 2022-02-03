import styled from "styled-components";
import { H1, H2, Text } from "../all_in_one";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { BiTask } from "react-icons/bi";

const HomeWrapper = styled.div`
  section {
    margin: 3rem;
    display: flex;
    flex-flow: column;
    align-items: center;

  }
  .profile_img {
    margin: 1rem;
    & img {
      border-radius: 0.51rem;
      filter: saturate(1.6);
    }
  }
  .description {
    margin: 1rem;
    padding: 0.1rem;
    width: 50vw;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
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
  .text_back {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;
    & h2 {
      position: absolute;
      font-size: calc(1.375rem + 1.5vw);
      text-transform: capitalize;
    }
    & h1 {
      text-transform: uppercase;
      font-size: calc(2.125rem + 5.5vw);
      color: transparent;
      -webkit-text-stroke: 1px rgb(212, 212, 212);
    }
    @media screen and (max-width: 600px) {
      & h2 {
        font-size: calc(1.375rem + 1.5vw);
      }

      & h1 {
        font-size: calc(2.125rem + 10.5vw);
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
`;

const Home = () => {
  return (
    <HomeWrapper>
      <section>
        <div className="profile_img">
          <img
            src="https://image.freepik.com/photos-gratuite/gros-plan-portrait-jeune-bel-homme-affaires-pensif-confiant-travaillant-assis-table-ecrit-dans-cahier-interieur-bureau-moderne-blanc_176420-6562.jpg"
            alt="puc"
          />
        </div>
        <div className="description">
          <div className="text_back">
            <H1>Dev</H1>
            <H2>Designer & Web Developer</H2>
          </div>
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
        <div className="text_back">
          <H1>quality</H1>
          <H2>education & experience</H2>
        </div>
      </section>
    </HomeWrapper>
  );
};

export default Home;
