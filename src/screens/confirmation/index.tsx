import { useNavigation } from "@react-navigation/native";
import React from "react";

import {
  Container,
  Content,
  Emoji,
  Button,
  TitleButton,
  Title,
  FooterContainer,
  SubTitle,
} from "./styles";

const Confirmation: React.FC = () => {
  const navigate = useNavigation();
  return (
    <Container>
      <Content>
        <Emoji>😃</Emoji>
        <Title>Prontinho</Title>
        <SubTitle>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado
        </SubTitle>
        <FooterContainer>
          <Button
            onPress={() => {
              navigate.navigate("PlantSelect");
            }}
            content={<TitleButton>Começar</TitleButton>}
          />
        </FooterContainer>
      </Content>
    </Container>
  );
};

export default Confirmation;
