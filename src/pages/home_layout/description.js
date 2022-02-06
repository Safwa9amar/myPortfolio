import styled from "styled-components";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { Text, H1, H2, TextWithBg, Flex } from "../../components/all_in_one";
import mydata from "../../components/data";
const Div = styled.div`
  width: 80vw;
  .profile_img {
    align-self: stretch;
    & img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      box-shadow: 0 0 2px 1px #615d5d7d;
      animation: animate 2s forwards;
      display: block;
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
  }
  .description {
    display: flex;
    flex-flow: column;
    margin: 1rem;
    padding: 0.1rem;
    /* width: 75vw; */
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

    .profile_img {
      display: flex;
      justify-content: center;
      align-items: center;
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

const Description = () => {
  return (
    <Div>
      <Flex col around align_center>
        <TextWithBg>
          <H1>Dev</H1>
          <H2>Designer & Web Developer</H2>
        </TextWithBg>
        <Flex align_center>
          <div className="profile_img">
            <img
              src="https://image.freepik.com/photos-gratuite/gros-plan-portrait-jeune-bel-homme-affaires-pensif-confiant-travaillant-assis-table-ecrit-dans-cahier-interieur-bureau-moderne-blanc_176420-6562.jpg"
              alt="puc"
            />
          </div>
          <div className="description">
            <Text justify>
              Ability to put themselves in the merchant's shoes. It is meant to
              partner on the long run, and work as an extension of the
              merchant's team.
            </Text>
            <div className="PersonInfo">{Personal(mydata.about)}</div>
            <div className="exp">
              <div className="card">
                <div className="icons">
                  <BiTask />
                </div>
                <div className="body">
                  <span>{mydata.about.Experience}</span>
                  <br></br> of experience
                </div>
              </div>
              <div className="card">
                <div className="icons">
                  <MdOutlineBusinessCenter />
                </div>
                <div className="body">
                  <span>{mydata.about.Projects}</span>

                  <br></br>Projects Done
                </div>
              </div>
            </div>
          </div>
        </Flex>
      </Flex>
    </Div>
  );
};

const Personal = (data) => {
  return (
    <>
      <p>
        <strong>Name : </strong>
        {data.Name}
      </p>
      <p>
        <strong>birthday : </strong>
        {data.birthday}
      </p>
      <p>
        <strong>Degree : </strong>
        {data.Degree}
      </p>
      <p>
        <strong>Experience : </strong>
        {data.Experience}
      </p>
      <p>
        <strong>Phone : </strong>
        {data.Phone}
      </p>
      <p>
        <strong>Email : </strong>
        {data.Email}
      </p>
      <p>
        <strong>Address : </strong>
        {data.Address}
      </p>
      <p>
        <strong>FreeLance : </strong>
        {data.FreeLance}
      </p>
    </>
  );
};
export default Description;
