import styled from "styled-components";

const FormContainer = styled.div`
  width: 80%;
  margin: 30px auto;
  border: 1px solid #c1c1c1;
  border-radius: 5px;
  box-shadow: 2px 4px 8px 2px #c1c1c1;
`;

const FormTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px 15px;
  box-sizing: border-box;

  input {
    padding: 15px;
  }

  button {
    width: 100%;
    margin: 10px auto;
    background-color: #18a0fb;

    @media (min-width: 768px) {
      width: 30%;
    }
  }
`;

export { FormContainer, FormTitle, Form };
