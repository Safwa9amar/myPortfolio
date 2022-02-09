import { Flex } from "../../components/all_in_one";
import styled from "styled-components";

const Form = styled.form`
  width: 50%;
  & input {
    display: block;
    padding: 1rem;
    border-radius: 30px;
    border: 0.1rem solid #eee;
    margin: .51rem;
    outline: none;
    align-self: stretch;
    flex:1;
  }
  & textarea {
    display: block;
    padding: 1rem;
    border-radius: 10px;
    border: 0.1rem solid #eee;
    margin: .51rem;
    outline: none;
    align-self: stretch;
  }
  & button {
    width: 150px;
    height: 25px;
    outline: none;
    background: #fff;
    border-radius: 10px;
    border: 0.1rem solid #ff5e07;
    cursor: pointer;
    &:focus,
    :hover {
      background-color: #ff5e07;
    }
  }
  & * :focus {
    &:focus {
      border: 0.1rem solid red;
      transition: ease 500ms;
      box-shadow: 0 0 2px 0px red;
    }
  }
  @media screen and (max-width:600px){
      width:auto;
  } 
`;

const ContactForm = () => {
  return (
    <Form name="contact" method="POST" data-netlify="true">

      <Flex col between align_center>
        <Flex row full between align_center>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            required
          />
        </Flex>
        <Flex col full>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
            required
          />
          <textarea name="meg" id="msg" cols="30" rows="10" required></textarea>
        </Flex>
        <button type="submit">Send message</button>
      </Flex>
    </Form>
  );
};

export default ContactForm;
