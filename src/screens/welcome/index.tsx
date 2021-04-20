import React from "react";
import { Text } from "react-native";
import { Container, Title, Image, SubTitle, ButtonNext } from "./styles";

const Welcome: React.FC = () => {
  return (
    <Container>
      <Title>
        Gerencie {"\n"} suas plantas {"\n"} de forma fácil
      </Title>
      <Image />
      <SubTitle>
        Não esqueça mais regar suas plantas, nós cuidamos de lembrar você sempre
        que precisar
      </SubTitle>
      <ButtonNext content={<Text>!</Text>} />
    </Container>
  );
};

export default Welcome;
