import styled, { keyframes } from "styled-components";

const H1 = styled.h1`
  font-family: Epilogue;
  font-weight: 800;
  font-size: 4.5rem;
  line-height: 80px;
  letter-spacing: -2px;
  color: ${(props) => (props.color === "white" ? "whitesmoke" : "#391400")};
`;
const H2 = styled.h2`
  font-family: Epilogue;
  font-size: 3.5rem;
  line-height: 64px;
  letter-spacing: -1px;
  color: ${(props) => (props.color === "white" ? "whitesmoke" : "#391400")};
`;
const H3 = styled.h3`
  font-family: Epilogue;
  font-size: 40px;
  line-height: 48px;
  color: #391400;
`;
const H4 = styled.h4`
  font-family: Epilogue;
  font-size: 24px;
  line-height: 32px;
  color: #391400;
`;
const H5 = styled.h5`
  font-family: Epilogue;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 3px;
  color: #ef6d58;
`;
const Label = styled.label`
  font-family: Epilogue;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: #391400;
`;
const TextBig = styled.p`
  font-family: Epilogue;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  color: #391400;
`;
const Text = styled.p`
  font-family: Epilogue;
  font-weight: normal;
  font-size: 1rem;
  line-height: 32px;
  color: ${(props) => (props.color === "white" ? "whitesmoke" : "#391400")};
  text-align: ${(props) => (props.justify === true ? "justify" : "")}; ;
`;
const TextSmall = styled.p`
  font-family: Epilogue;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: rgba(57, 20, 0, 0.64);
`;

const Title = styled.div``;
const SubTitle = styled.div``;
const CardBody = styled.div``;

const Card = styled.div`
  ${Title} {
    text-transform: capitalize;
    font-weight: 800;
  }
  ${SubTitle} {
    color: #333232;
    font-weight: 500;
  }
  ${CardBody} {
    position: relative;
    text-align: justify;
    color: grey;
    animation: ${(props) => (props.activeView === true ? "animate" : "")} 1s
      forwards;
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: -10px;
    width: 10px;
    height: 10px;
    border: 5px solid #ef6c57;
    border-radius: 50%;
    box-shadow: inset 0px 0px 0px 20px #ffffff;
  }

  @keyframes animate {
    from {
      opacity: 0;
    }
    to {
      top: 0px;
      opacity: 1;
    }
  }
`;
const ProgressWidth = (w) => keyframes`
from {
      width: 0;
    }
    to {
      width: ${w}%;
    }
`;
const Progress = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 10px;
  margin: 1rem;
  border-radius: 1rem;
  background-color: #eee;
  & span {
    position: relative;
    top: calc(-100% + -10px);
    text-transform: capitalize;
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: ${(props) => props.value + "%"};
    border-radius: 1rem;
    background-color: #e69367;
    // transition: width ease-in 500ms;
    animation: ${(props) =>
        props.activeView === true ? ProgressWidth(props.value) : ""}
      2s forwards;
  }

  @keyframes animateProgress {
  }
`;

const Flex = styled.div`
  display: flex;
  flex-flow: ${(props) => (props.col ? "column" : props.row ? "row" : "")}
    ${(props) => (props.wrap ? "wrap" : props.nowrap ? "nowrap" : "")};
  justify-content: ${(props) =>
    props.center
      ? "center"
      : props.between
      ? "space-between"
      : props.around
      ? "space-around"
      : props.evenly
      ? "space-evenly"
      : ""};
  align-items: ${(props) =>
    props.align_center
      ? "center"
      : props.align_base
      ? "baseline"
      : props.align_end
      ? "flex-end"
      : "flex-start"};
  margin: ${(props) => props.margin};
  width: ${(props) => (props.full ? "100%" : props.half ? "50%" : props.w)};
  @media screen and (max-width: 600px) {
    width: 100%;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;

const TextWithBg = styled.div`
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
`;
export {
  H1,
  H2,
  H3,
  H4,
  H5,
  Label,
  TextBig,
  Text,
  TextSmall,
  Card,
  Title,
  SubTitle,
  CardBody,
  Progress,
  Flex,
  TextWithBg,
};
