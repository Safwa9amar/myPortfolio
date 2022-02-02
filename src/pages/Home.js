import styled from "styled-components";
import { H5, H2, Text } from "../all_in_one";
import { MdOutlineBusinessCenter } from "react-icons/md";
import { BiTask } from "react-icons/bi";

const HomeWrapper = styled.div`
  margin: 2rem;
  display: flex;
  justify-content: space-evenly;
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
    padding: 1rem;
    width: 50vw;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    .exp {
      display: flex;
      flex-flow: row;
      justify-content: space-evenly;
      
      .card {
        flex: 1;
        padding: .5rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        border: 1px solid #F3D1BF;


        .icons{
          width:4rem;
          height: 4rem;
          @media screen and (max-width : 600px) {
            width:3rem;
            height: 3rem;
            
          }
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 100%;
          background: #EF6C57;
          font-size: 2rem;
          color: #FFF;
         
        }
        .body{
          & span{
            color: red;
            font-size: 1.3rem;
           
          }
        }
      }
    }
  
  }

  @media screen and (max-width: 600px) {
    flex-flow: column;
    align-items: center;

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
    </HomeWrapper>
  );
};

export default Home;
