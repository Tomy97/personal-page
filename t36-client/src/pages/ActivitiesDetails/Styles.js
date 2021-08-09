import styled from "styled-components";

const ActivityContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 40px;
  text-transform: uppercase;
  font-weigth: bold;
  text-align: center;
`;

const DetailContainer = styled.div`
  margin: 0;
  border: 2px solid #f3f3f3;
  border-radius: 5px;
  box-shadow: 2px 4px 8px 2px #f3f3f3;
`;

const ActivityTitle = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  padding: 5px 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #18a0fb;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const ActivityInfo = styled.p`
  width: 80%;
  text-align: center;
  font-size: 16px;
  margin: 15px auto;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const ActivityImage = styled.img`
  margin: 10px 0;
  width: 80%;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

export {
  ActivityContainer,
  Title,
  DetailContainer,
  ActivityTitle,
  ActivityInfo,
  ActivityImage
};
