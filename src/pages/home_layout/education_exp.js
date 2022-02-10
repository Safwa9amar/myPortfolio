import {
  H5,
  Card,
  Title,
  SubTitle,
  CardBody,
} from "../../components/all_in_one";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import mydata from "../../components/data";

const Div = styled.div`
  width: 75vw;
  display: flex;
  justify-content: space-between;
  margin: 2rem;

  .edu_exp {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    margin: 0.5rem;
    padding: 1rem;
    position: relative;
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-flow: column;
    .edu_exp {
      display: flex;
      flex-flow: column;
      justify-content: center;
    }
  }
`;

const EduExp = () => {
  return (
    <>
      <H5>education</H5>
      <Div>
        <div className="edu_exp">{Education(mydata.Education)}</div>
      </Div>
    </>
  );
};

let Education = (data) => {
  const { ref, inView } = useInView({
    /* Optional options */
    // threshold: 1,
    rootMargin:'-200px',
    triggerOnce: true,
  });
  return data.map((el) => {
    return (
      <Card ref={ref} activeView={inView}>
        <Title>{el.name}</Title>
        <SubTitle>
          {el.institute} | {el.year}
        </SubTitle>
        <CardBody>{el.city}</CardBody>
      </Card>
    );
  });
};
export default EduExp;
