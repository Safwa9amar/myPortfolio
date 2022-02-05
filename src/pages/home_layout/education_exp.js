import { H5, Card, Title, SubTitle, CardBody } from "../../components/all_in_one";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

const Div = styled.div`
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
`;

const EduExp = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <Div>
      <div className="edu_exp">
        <H5>education</H5>
        <Card ref={ref} activeView={inView}>
          <Title>Master In CSE</Title>
          <SubTitle>Cambridge University | 2000 - 2050</SubTitle>
          <CardBody>
            Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet
            dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea
            lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
          </CardBody>
        </Card>
        <Card ref={ref} activeView={inView}>
          <Title>Master In CSE</Title>
          <SubTitle>Cambridge University | 2000 - 2050</SubTitle>
          <CardBody>
            Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet
            dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea
            lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
          </CardBody>
        </Card>
      </div>
      <div className="edu_exp">
        <H5>education</H5>
        <Card ref={ref} activeView={inView}>
          <Title>Master In CSE</Title>
          <SubTitle>Cambridge University | 2000 - 2050</SubTitle>
          <CardBody>
            Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet
            dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea
            lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
          </CardBody>
        </Card>
        <Card ref={ref} activeView={inView}>
          <Title>Master In CSE</Title>
          <SubTitle>Cambridge University | 2000 - 2050</SubTitle>
          <CardBody>
            Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet
            dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea
            lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
          </CardBody>
        </Card>
      </div>
    </Div>
  );
};

export default EduExp;
