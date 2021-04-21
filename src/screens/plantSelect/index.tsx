import React, { useState } from "react";

import {
  Container,
  Title,
  Header,
  SubTitle,
  ContainerHeader,
  Button,
  ContainerList,
  EnvironmentList,
} from "./styles";

const PlantSelect: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <ContainerHeader>
        <Header name="Rafael" title="Olá" />
        <Title>Em qual ambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </ContainerHeader>
      <ContainerList>
        <EnvironmentList
          data={[1, 2, 3, 4, 5]}
          renderItem={(item) => <Button title="Cozinha" />}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ContainerList>
    </Container>
  );
};

export default PlantSelect;
