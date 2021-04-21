import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Container,
  Title,
  Image,
  SubTitle,
  ButtonNext,
  ButtonIcon,
  Wrapper,
} from "./styles";

const Welcome: React.FC = () => {
  const navigate = useNavigation();
  return (
    <Container>
      <Wrapper>
        <Title>
          Gerencie {"\n"} suas plantas de {"\n"} forma fácil
        </Title>
        <Image />
        <SubTitle>
          Não esqueça mais regar suas plantas, nós cuidamos de lembrar você
          sempre que precisar
        </SubTitle>
        <ButtonNext
          content={<ButtonIcon />}
          onPress={() => {
            navigate.navigate("UserIdentification", {});
          }}
        />
      </Wrapper>
    </Container>
  );
};
export default Welcome;
