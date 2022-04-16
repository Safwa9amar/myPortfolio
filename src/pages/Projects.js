import styled from 'styled-components'
import { Flex, TextSmall } from '../components/all_in_one';
const Section = styled.div`
  /* border:1px solid; */
  margin: 1rem;
  padding:1rem;
 `

const ProjectCard = styled.div`
  position:relative;
  width: 80%;
  border-radius: 15px;
   img{
    filter:brightness(60%);
    height: 50%;
    width: 50%;
  }
  .detail{
    position:absolute;
    bottom:1rem;
    left:1rem;
    .tag{
      background:whitesmoke;
      text-align:center;
      border-radius:5px;
      padding-inline:0.5rem;
      font-size: .9rem;
      width: fit-content;
    }
    .some_text{
      font-size: 2rem;
      color:white;
      font-weight: bold;
    }
  }
 
 `

const Projects = () => {
  return (
    <>
      <Section>
        <Flex center>
          <Flex around half >
            <TextSmall>Show All <sup>10</sup> </TextSmall>
            <TextSmall>Design <sup>4</sup></TextSmall>
            <TextSmall>ecomerce <sup>20</sup></TextSmall>
            <TextSmall>code <sup>3</sup></TextSmall>
          </Flex>
        </Flex>
      </Section>
      <Section>
        <ProjectCard>
          <img
            src="https://image.freepik.com/photos-gratuite/gros-plan-portrait-jeune-bel-homme-affaires-pensif-confiant-travaillant-assis-table-ecrit-dans-cahier-interieur-bureau-moderne-blanc_176420-6562.jpg"
            alt="puc"
          />
          <div className='detail'>
            <p className='tag'>Design</p>
            <div className='some_text'>Some text</div>
          </div>
        </ProjectCard>
      </Section>
    </>
  );
};

export default Projects;
