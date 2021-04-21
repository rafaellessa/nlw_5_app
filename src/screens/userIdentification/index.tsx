import React, { useState } from "react";

import {
  Container,
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
} from "./styles";

const userIdentification: React.FC = () => {
  const [nameUser, setNameUser] = useState<String>();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFileed] = useState(false);

  const handleInputBlur = () => {
    console.log("aquiauisaisauisa");
    setIsFocused(false);
    setIsFileed(!!nameUser);
  };

  const handleInputFocus = () => {
    console.log("dofofdfdsofipsoifopsidfdpispofisp");
    setIsFocused(true);
  };

  const handleInputChange = (value: string) => {
    setIsFileed(!!value);
    setNameUser(value);
  };

  return (
    <Container>
      <SafeContainer>
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
              <Button content={<TitleButton>Confirmar</TitleButton>} />
            </ContainerFooter>
          </FormContainer>
        </Content>
      </SafeContainer>
    </Container>
  );
};

export default userIdentification;
