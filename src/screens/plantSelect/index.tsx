import React from "react";

import { Container, Title, Header, SubTitle, ContainerHeader } from "./styles";

const PlantSelect: React.FC = () => {
  return (
    <Container>
      <ContainerHeader>
        <Header name="Rafael" title="Olá" />
        <Title>Em qual ambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </ContainerHeader>
    </Container>
  );
};

export default PlantSelect;
