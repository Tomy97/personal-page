import styled from "styled-components";

const TestimonialContainer = styled.div`
  width: 80%;
  margin: 40px auto;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin: 0;
`;

const Information = styled.p`
  font-size: 22px;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin: 60px 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 998px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const TestimonialCard = styled.div`
  background-color: #f6f6f6;
  border: 1px solid #9e9e9e;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;

const TestimonialTitle = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  margin: 0 0 20px 0;
`;

const ButtonContainer = styled.div`
  button {
    font-size: 16px;
    margin-right: 10px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export {
  TestimonialContainer,
  Title,
  Information,
  ListContainer,
  TestimonialCard,
  TestimonialTitle,
  ButtonContainer,
};
