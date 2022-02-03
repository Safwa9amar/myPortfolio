import styled from "styled-components";

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
  font-size: 3.5rem ;
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

export { H1, H2, H3, H4, H5, Label, TextBig, Text, TextSmall };
