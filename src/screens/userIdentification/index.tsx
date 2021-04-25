import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert } from "react-native";
import { Keyboard } from "react-native";

import {
  Content,
  FormContainer,
  Emoji,
  Input,
  Title,
  Button,
  TitleButton,
  ContainerFooter,
  SafeContainer,
  WrapperContainer,
  FeedbackContainer,
} from "./styles";

const UserIdentification: React.FC = () => {
  const navigate = useNavigation();
  const [nameUser, setNameUser] = useState<String>();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFileed] = useState(false);

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFileed(!!nameUser);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputChange = (value: string) => {
    setIsFileed(!!value);
    setNameUser(value);
  };

  return (
    <SafeContainer>
      <FeedbackContainer
        onPress={() => {
          Keyboard.dismiss();
        }}
      >
        <Content>
          <FormContainer>
            <WrapperContainer>
              <Emoji>😀</Emoji>
              <Title>Como podemos {"\n"} chamar você?</Title>
            </WrapperContainer>
            <Input
              value={nameUser}
              placeholder="Digite seu nome"
              focused={isFocused}
              filled={isFilled}
              onBlur={handleInputBlur}
              onFocus={handleInputFocus}
              onChangeText={handleInputChange}
            />
            <ContainerFooter>
              <Button
                onPress={() => {
                  if (!nameUser) {
                    return Alert.alert("Me diz como chamar você 🥲");
                  }
                  navigate.navigate("Confirmation", {});
                }}
                content={<TitleButton>Confirmar</TitleButton>}
              />
            </ContainerFooter>
          </FormContainer>
        </Content>
      </FeedbackContainer>
    </SafeContainer>
  );
};

export default UserIdentification;
