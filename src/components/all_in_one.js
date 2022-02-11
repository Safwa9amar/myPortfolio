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
  text-transform: capitalize;
  color: #ef6d58;
  margin: 1rem;
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
  position: relative;
  border-left: 0.1px dashed #ef6c57;
  padding: 1rem;
  ${Title} {
    text-transform: capitalize;
    font-weight: 800;
  }
  ${SubTitle} {
    color: #333232;
    font-weight: 500;
    animation: ${(props) => (props.activeView === true ? "animate" : "")} 1s
      forwards;
  }
  ${CardBody} {
    position: relative;
    text-align: justify;
    color: grey;
    animation: ${(props) => (props.activeView === true ? "animate" : "")} 3s
      forwards;
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: -7px;
    width: 10px;
    height: 10px;
    border: 2px solid #ef6c57;
    border-radius: 50%;
    box-shadow: inset 0px 0px 0px 2px #ffffff, inset 0px 0px 0px 20px #ff5e07;
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
const IconsWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #2b2a2a;
  font-size: 2rem;
  color: #fff;
  margin: 0 2rem;
`;
const BodyWrapper = styled.div`
  & span {
    color: red;
    font-size: 1.3rem;
    font-weight: bold;
    @media screen and (max-width: 600px) {
      font-size: 1rem;
    }
  }
`;
// =============================================================================================
// =============================================================================================
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
    border-radius: 1rem;
    background-color: #e69367;
    animation: ${(props) =>
        props.activeView === true ? ProgressWidth(props.value) : ""}
      2s forwards;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-flow: ${(props) => (props.col ? "column" : props.row ? "row" : "")}
    ${(props) => (props.wrap ? "wrap" : props.nowrap ? "nowrap" : "")};
  justify-content: ${(props) =>
    props.center
      ? `center ${props.important ? "!important" : ""}`
      : props.between
      ? `space-between ${props.important ? "!important" : ""}`
      : props.around
      ? `space-around ${props.important ? "!important" : ""}`
      : props.evenly
      ? `space-evenly ${props.important ? "!important" : ""}`
      : props.end
      ? `flex-end ${props.important ? "!important" : ""}`
      : props.start
      ? `flex-start ${props.important ? "!important" : ""}`
      : ""};
  align-items: ${(props) =>
    props.align_center
      ? `center ${props.important ? "!important" : ""}`
      : props.align_base
      ? `baseline ${props.important ? "!important" : ""}`
      : props.align_end
      ? `flex-end ${props.important ? "!important" : ""}`
      : `flex-start ${props.important ? "!important" : ""}`};
  margin: ${(props) => props.margin};
  width: ${(props) => (props.full ? "100%" : props.half ? "50%" : props.w)};
  height: ${(props) =>
    props.h_full ? "100%" : props.h_half ? "50%" : props.h};
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
    filter: blur(1px);
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
  IconsWrapper,
  BodyWrapper,
};
