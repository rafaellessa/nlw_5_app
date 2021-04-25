import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert } from "react-native";
import { Keyboard } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
  const [nameUser, setNameUser] = useState<string>();
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

                  try {
                    AsyncStorage.setItem("@plantmanager:user", nameUser);
                    navigate.navigate("Confirmation", {
                      title: "Prontinho",
                      subTitle:
                        "Agora vamos começar a cuidar das suas plantinhas com muito cuidado.",
                      buttonTitle: "Começar",
                      icon: "smile",
                      nextScreen: "PlantSelect",
                    });
                  } catch {
                    Alert.alert("Não foi possível salvar o seu nome! 🥲");
                  }
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
