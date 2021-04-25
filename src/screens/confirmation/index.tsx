import { useNavigation, useRoute } from "@react-navigation/native";
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

interface Params {
  title: string;
  subTitle: string;
  buttonTitle: string;
  icon: "smile" | "hug";
  nextScreen: string;
}

const emojis = {
  hug: "😛",
  smile: "😍",
};

const Confirmation: React.FC = () => {
  const navigate = useNavigation();
  const routes = useRoute();

  const {
    title,
    subTitle,
    buttonTitle,
    icon,
    nextScreen,
  } = routes.params as Params;
  return (
    <Container>
      <Content>
        <Emoji>{emojis[icon]}</Emoji>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
        <FooterContainer>
          <Button
            onPress={() => {
              navigate.navigate(nextScreen, {});
            }}
            content={<TitleButton>{buttonTitle}</TitleButton>}
          />
        </FooterContainer>
      </Content>
    </Container>
  );
};

export default Confirmation;
