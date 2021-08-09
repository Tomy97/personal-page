import React from "react";
import WelcomeTitle from "../../Components/WelcomeTitle/WelcomeTitle";
import Novedades from "../../Components/Novedades/Novedades";
import { Container } from "@material-ui/core";

const Home = () => {
  return (
    <Container>
      <WelcomeTitle />
      <Novedades />
    </Container>
  );
};

export default Home;
