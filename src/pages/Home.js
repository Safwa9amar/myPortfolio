import styled from "styled-components";
import { H1, H2, Text } from "../all_in_one";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { BiTask } from "react-icons/bi";

const HomeWrapper = styled.div`
  section {
    margin: 3rem;
    display: flex;
    justify-content: space-evenly;
  }
  .profile_img {
    margin: 1rem;
    & img {
      border-radius: 0.51rem;
      filter: saturate(1.6);
      width: 40vw;
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
    & table {
      td {
        strong {
          color: #391400;
        }
        border-left: 1px solid;
        padding: 0.4rem;
      }
    }
  }

  @media screen and (max-width: 600px) {
    flex-flow: column;
    align-items: center;
    section{
      flex-flow: column;
      align-items: center;
    }
    .profile_img {
      & img {
        width: 80vw;
      }
    }
    .description {
      width: 80vw;
      & h5,
      h2 {
        text-align: center;
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
          <H2>Designer & Web Developer</H2>
          <Text justify>
            Ability to put themselves in the merchant's shoes. It is meant to
            partner on the long run, and work as an extension of the merchant's
            team.
          </Text>
          <table className="MyInfo">
            <tr>
              <td>
                <strong>Name : </strong> Hassani hamza
              </td>
              <td>
                <strong>Birthday : </strong> 22 March 1997
              </td>
            </tr>
            <tr>
              <td>
                <strong>Degree: </strong>Master
              </td>
              <td>
                <strong>Experience: </strong>5 Years
              </td>
            </tr>
            <tr>
              <td>
                <strong>Phone: </strong>+213 674 020 244
              </td>
              <td>
                <strong>Email: </strong>Hassanih97@gmail.com
              </td>
            </tr>
            <tr>
              <td>
                <strong>Address: </strong>Sidi bel Abbes , Ait elarbi ben mahidi
              </td>
              <td>
                <strong>Freelance: </strong>Available
              </td>
            </tr>
          </table>
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
        <H2>EDUCATION & EXPERICENCE</H2>
      </section>
    </HomeWrapper>
  );
};

export default Home;
