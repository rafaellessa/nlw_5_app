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
            onPress={() => {}}
            content={<TitleButton>Começar</TitleButton>}
          />
        </FooterContainer>
      </Content>
    </Container>
  );
};

export default Confirmation;
